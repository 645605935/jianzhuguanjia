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



    public function ajax_register(){
        $_json=file_get_contents('php://input');
        $_arr=json_decode($_json,true);

        if($_arr){
            $data=array();
            $data['truename']=$_arr['truename'];
            $data['password']=md5($_arr['password']);
            $data['username']=$_arr['username'];
            $data['gid']=$_arr['gid'];
            $data['img']=$_arr['img'];
            $data['time']=time();


            if($id = D('User')->where($where)->add($data)){
                $row= D('User')->relation(true)->find($id);
                if($row){
                    // 赋权限,如果没有则添加
                    $ga_data=array();
                    $ga_data['uid']=$id;
                    $ga_data['group_id']=$_arr['gid'];
                    M('AuthGroupAccess')->add($ga_data);
                    

                    $data=array();
                    $data['code']=0;
                    $data['msg']='success';
                    $data['data']=$row;
                }else{
                    $data=array();
                    $data['code']=1;
                    $data['msg']='error';
                }
            }else{
                $data=array();
                $data['code']=1;
                $data['msg']='error';
            }
            
            
        }else{
            $data=array();
            $data['code']=2;
            $data['msg']='error';
        }

        echo json_encode($data);
    }
  




}