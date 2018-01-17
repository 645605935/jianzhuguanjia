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

        $this->config_info=M('Config')->find(1);
    }

    //建筑公司个人中心首页
    public function index(){
        $this->display();
    }

    //中介公司个人中心首页
    public function brokerindex(){
        global $user;
        $user=M('User')->find($user['id']);

        //订单查看情况
        $where=array();
        if($user['company_types_zzdb']!=''){
            $map['type_2']=array('in', explode('#', $user['company_types_zzdb']));
        }
        if($user['company_types_axbl']!=''){
            $map['type_2']=array('in', explode('#', $user['company_types_axbl']));
        }
        $map['_logic'] = 'or';
        $where['_complex'] = $map;
        $where['province']=$user['company_service_province'];
        $where['city']=$user['company_service_city'];


        $all_orders=D('Order')->where($where)->select();
        $nosee_num=0;
        foreach ($all_orders as $key => $value) {
            $res=M('OrderLog')->where(array('uid'=>$user['id'], 'oid'=>$value['id']))->find();
            if($res){
                $all_orders[$key]['see']=1;
                $nosee_num++;    
            }
        }

        $coupon_num=$user['coupon'];
        $this->user=$user;
        $this->all_num=count($all_orders);
        $this->nosee_num=$nosee_num;

        $this->coupon_num=$coupon_num;
        $this->display();
    }

    public function brokerorder(){
        global $user;
        $user=M('User')->find($user['id']);
        if($user['gid']==33){
            //中介
            $where=array();

            switch ($_POST['type']) {
                case 1:
                    $where['type']=1;//zzdb  资质代办
                    $where['type_2']=array('in', explode('#', $user['company_types_zzdb']));
                    break;
                case 2:
                    $where['type']=2;//axbl  安许办理
                    $where['type_2']=array('in', explode('#', $user['company_types_axbl']));
                    break;
                case 3:
                    $where['type']=3;//axbl  寻证挂靠
                    $where['type_2']=array('in', explode('#', $user['company_types_xzgk']));
                    break;
                case 4:
                    $where['type']=4;//axbl  公司注册
                    $where['type_2']=array('in', explode('#', $user['company_types_gszc']));
                    break;

                default:
                    if($user['company_types_zzdb']!=''){
                        $zzdb=explode('#', $user['company_types_zzdb']);
                    }else{
                        $zzdb=array();
                    }
                    if($user['company_types_axbl']!=''){
                        $axbl=explode('#', $user['company_types_axbl']);
                    }else{
                        $zzdb=array();
                    }
                    if($user['company_types_xzgk']!=''){
                        $xzgk=explode('#', $user['company_types_xzgk']);
                    }else{
                        $xzgk=array();
                    }
                    if($user['company_types_gszc']!=''){
                        $gszc=explode('#', $user['company_types_gszc']);
                    }else{
                        $gszc=array();
                    }
                    $where['type_2'] = array_merge($zzdb,$axbl,$xzgk,$gszc);
                    break;
            }


            $where['province']=$user['company_service_province'];
            $where['city']=$user['company_service_city'];
            

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
        }else{
            //建筑
            $where=array();

            switch ($_POST['type']) {
                case 1:
                    $where['type']=1;//zzdb  资质代办
                    $where['type_2']=array('in', explode('#', $user['company_types_zzdb']));
                    break;
                case 2:
                    $where['type']=2;//axbl  安许办理
                    $where['type_2']=array('in', explode('#', $user['company_types_axbl']));
                    break;

                default:
                    # code...
                    break;
            }
            $where['phone']=$user['phone'];

            $count      = M('Order')->where($where)->count();
            $Page       = new \Common\Extend\Page($count,10);
            $nowPage = isset($_GET['p'])?$_GET['p']:1;
            $list=D('Order')->page($nowPage.','.$Page->listRows)->where($where)->relation(true)->select();
            foreach ($list as $key => $value) {
                $list[$key]['see']=1;
                $list[$key]['time']=date('Y-m-d H:i', $value['time']);
            }

            $this->page=$Page->show();
            $this->list=$list;

            $this->display();
        }

        
        
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
        $where['id']=$user['id'];
        $user=M('user')->where($where)->find();
       
        if($user['coupon'] > 0){
            M('User')->where(array('id'=>$user['id']))->setDec('coupon',1);
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

    //获取当前订单券数量
    public function ajax_get_coupon_num(){
        global $user;

        $user=M('user')->find($user['id']);
       
        if($user['coupon'] > 0){
            $data=array();
            $data['code']=0;
            $data['msg']='success';
            $data['data']=$user['coupon'];
        }else{
            $data=array();
            $data['code']=2;
            $data['msg']='请先购买优惠券！';
        }

        echo json_encode($data);
    }

  




}