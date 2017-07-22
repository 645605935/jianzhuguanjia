<?php

namespace Home\Controller;
use Think\CommonController;

class UserController extends CommonController{

    public function _initialize(){
        parent::_initialize();
    }

    public function register(){
        if($_POST){
            $data=array();
            $data['Contact']=$_POST['Contact'];
            $data['Phone']=$_POST['Phone'];
            $data['password']=md5($_POST['password']);
            if($_POST['CompanyType']==0){
                $gid=22;//建筑企业
            }else{
                $gid=33;//中介机构
            }
            $data['gid']=$gid;
            $data['time']=time();

            $id=M('User')->add($data);
            if($id){
                $data=array();
                $data['IsSuccess']=true;
                $data['CompanyType']=$_POST['CompanyType'];
                $data['Phone']=$_POST['Phone'];
                $data['Msg']='注册成功';
            }else{
                $data=array();
                $data['IsSuccess']=false;
                $data['Msg']='注册失败';
            }

            echo json_encode($data);
        }else{
            $this->display();
        }
    }

    public function login(){
        $this->display();
    }

    public function UserLogin(){
        if($_POST){
            $where=array();
            $where['phone']=$_POST['Phone'];
            $where['password']=md5($_POST['password']);

            $row=M('User')->where($where)->find();
            if($row){
                session('userinfo',$row);

                $gid=$row['gid'];
                if($gid==33){
                    $Isbroker=1;
                }else{
                    $Isbroker=0;
                }
                $data=array();
                $data['IsSuccess']=true;
                $data['Isbroker']=$Isbroker;
                $data['Msg']='登录成功';
            }else{
                $data=array();
                $data['IsSuccess']=false;
                $data['Msg']='登录失败';
            }

            echo json_encode($data);
        }
    }



    public function userbasicisexist(){
        $phone=$_POST['phone'];
        // send_code($phone);
        if(1){
            echo 'true';
        }else{
            echo 'false';
        }
        
    }


    public function getvalidatecode(){
        $phone=$_POST['phone'];

        $data=array();
        $data['IsSuccess']=true;
        $data['Msg']='发送短信并添加记录成功';

        echo json_encode($data);
        // send_code($phone);
    }

    public function checkvalidatecode(){
        $phone=$_POST['phone'];

        $data=array();
        $data['IsSuccess']=true;
        $data['Msg']='手机验证成功';

        echo json_encode($data);
    }




  




}