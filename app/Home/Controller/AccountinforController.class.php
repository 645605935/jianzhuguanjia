<?php

namespace Home\Controller;
use Think\CommonController;

class AccountinforController extends CommonController{

    public function _initialize(){
        parent::_initialize();

        global $user;
        $user=session('userinfo');
        $this->user=$user;
    }

    public function personalinfo(){
        global $user;

        $companyinfo=M('User')->find($user['id']); 

        $province=M('Province')->select();
        $city=M('city')->where(array('fatherid'=>$companyinfo['company_province']))->select();

        $this->companyinfo=$companyinfo;
        $this->province=$province;
        $this->city=$city;
        $this->display();
    }

    public function companyalter(){
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

    



  




}