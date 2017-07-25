<?php

namespace Home\Controller;
use Think\CommonController;

class CompanyController extends CommonController{

    public function _initialize(){
        parent::_initialize();

        global $user;
        $user=session('userinfo');
        $this->user=$user;
    }

    //实名认证
    public function companylicense(){
        $this->display();
    }

    //公司资料
    public function companyinfo(){
        $this->display();
    }

    public function caseinfo(){
        global $user;
        $where=array();
        $where['uid']=$user['id'];


        $count      = M('Cases')->where($where)->count();
        $Page       = new \Common\Extend\Page($count,6);
        $nowPage = isset($_GET['p'])?$_GET['p']:1;
        $list=M('Cases')->page($nowPage.','.$Page->listRows)->where($where)->select();
        foreach ($list as $key => $value) {
            $list[$key]['time']=date('Y-m-d',$value['time']);
            if($value['zizhileixing']){
                $temp=M('Type')->find($value['zizhileixing']);
                $list[$key]['zizhileixing']=$temp['title'];
            }
            if($value['banlizhouqi']){
                $temp=M('Type')->find($value['banlizhouqi']);
                $list[$key]['banlizhouqi']=$temp['title'];
            }
        }


        $this->page=$Page->show();
        $this->list=$list;
        $this->display();
    }

    public function addcaseinfo(){
        $banlizhouqi=M('Type')->where(array('pid'=>1336))->select();
        $zizhileixing=M('Type')->where(array('pid'=>1275))->select();
        

        $this->banlizhouqi=$banlizhouqi;
        $this->zizhileixing=$zizhileixing;
        $this->display();
    }

    public function ajax_add_case(){
        global $user;
        if($_POST && $user){
            $data=array();
            $data['img']=$_POST['img'];
            $data['company_name']=$_POST['company_name'];
            $data['zizhileixing']=$_POST['zizhileixing'];
            $data['hezuoyewu']=$_POST['hezuoyewu'];
            $data['banlizhouqi']=$_POST['banlizhouqi'];
            $data['price']=$_POST['price'];
            $data['renyuanpeizhi']=$_POST['renyuanpeizhi'];
            $data['uid']=$user['id'];
            $data['time']=time();

            $id=M('Cases')->add($data);
            if($id){
                $data=array();
                $data['code']=0;
                $data['msg']='添加成功';
                $data['data']=$id;
            }else{
                $data=array();
                $data['code']=1;
                $data['msg']='添加失败';
            }
        }else{
            $data=array();
            $data['code']=1;
            $data['msg']='操作失败';
        }

        echo json_encode($data);
    }

    public function editcaseinfo(){
        if($id=$_GET['id']){
            $row=M('Cases')->find($id);
            $banlizhouqi=M('Type')->where(array('pid'=>1336))->select();
            $zizhileixing=M('Type')->where(array('pid'=>1275))->select();
            
            $this->row=$row;
            $this->banlizhouqi=$banlizhouqi;
            $this->zizhileixing=$zizhileixing;

            $this->display();
        }
    }

    public function ajax_edit_case(){
        global $user;
        if($_POST && $user){
            $data=array();
            $data['img']=$_POST['img'];
            $data['company_name']=$_POST['company_name'];
            $data['zizhileixing']=$_POST['zizhileixing'];
            $data['hezuoyewu']=$_POST['hezuoyewu'];
            $data['banlizhouqi']=$_POST['banlizhouqi'];
            $data['price']=$_POST['price'];
            $data['renyuanpeizhi']=$_POST['renyuanpeizhi'];
            $data['time']=time();


            $res=M('Cases')->where(array('id'=>$_POST['id']))->save($data);
            if($res){
                $data=array();
                $data['code']=0;
                $data['msg']='编辑成功';
            }else{
                $data=array();
                $data['code']=1;
                $data['msg']='编辑失败';
            }
        }else{
            $data=array();
            $data['code']=1;
            $data['msg']='操作失败';
        }

        echo json_encode($data);
    }

    public function ajax_addcaseinfo111(){
        global $user;
        if($_POST && $user){
            $data=array();
            $data['company_name']=$_POST['Name'];
            $data['company_people']=$_POST['contact'];
            $data['contact_phone']=$_POST['TelPhone'];
            $data['contact_email']=$_POST['Email'];
            $data['company_province']=$_POST['AreaPpid'];
            $data['company_city']=$_POST['AreaId'];
            $data['company_address']=$_POST['address'];
            $data['company_introduction']=$_POST['Introduction'];
            $data['time']=time();

            $where=array();
            $where['id']=$user['id'];

            $res=M('User')->where($where)->save($data);
            if($res){
                $data=array();
                $data['IsSuccess']=true;
                $data['Msg']='保存成功';
            }else{
                $data=array();
                $data['IsSuccess']=false;
                $data['Msg']='保存失败';
            }
        }else{
            $data=array();
            $data['IsSuccess']=false;
            $data['Msg']='操作失败';
        }

        echo json_encode($data);
    }

    public function team(){
        $this->display();
    }

    
  




}