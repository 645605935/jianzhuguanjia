<?php

namespace Home\Controller;
use Think\CommonController;

class UsercenterController extends CommonController{

    public function _initialize(){
        parent::_initialize();

        global $user;
        $user=session('userinfo');
        $this->user=$user;
        if(!$user){
            $this->redirect('Home/User/login');
        }
    }

    //建筑公司个人中心首页
    public function index(){
        $this->display();
    }

    //中介公司个人中心首页
    public function brokerindex(){
        global $user;
        $user=M('User')->find($user['id']);


        $coupon_info=M('Coupon')->where(array('uid'=>$user['id']))->find();
        $this->user=$user;
        $this->coupon_info=$coupon_info;
        $this->display();
    }

    public function brokerorder(){
        global $user;

        $where=array();
        $count      = M('Order')->where($where)->count();
        $Page       = new \Common\Extend\Page($count,10);
        $nowPage = isset($_GET['p'])?$_GET['p']:1;
        $list=D('Order')->page($nowPage.','.$Page->listRows)->where($where)->relation(true)->select();
        foreach ($list as $key => $value) {
            $res=M('OrderLog')->where(array('uid'=>$user['id'], 'oid'=>$value['id']))->find();
            if($res){
                $list[$key]['see']=1;
            }else{
                $list[$key]['phone']=hidtel($value['phone']);
                $list[$key]['see']=0;
            }
            $list[$key]['time']=date('Y-m-d H:i', $value['time']);
        }

        $this->page=$Page->show();
        $this->list=$list;

        $this->display();
        
    }

    public function question(){
        $this->display();
    }


    //获取手机号
    public function ajax_get_phone(){
        global $user;

        $id=$_GET['id'];

        //查看是否还有卷可用
        $where=array();
        $where['uid']=$user['id'];
        $where['num']=array('gt', 0);
        $coupon=M('Coupon')->where($where)->find();
       
        if($coupon['num'] > 0){
            M('Coupon')->where(array('id'=>$coupon['id']))->setDec('num',1);
            $data=array();
            $data['uid']=$user['id'];
            $data['oid']=$id;
            $data['time']=time();
            M('OrderLog')->add($data);

            $row = M('Order')->find($id);
            $data=array();
            $data['code']=0;
            $data['msg']='success';
            $data['data']=$row['phone'];
        }else{
            $data=array();
            $data['code']=2;
            $data['msg']='请先购买优惠券！';
        }

        echo json_encode($data);
    }


  




}