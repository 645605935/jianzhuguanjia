<?php

namespace Home\Controller;
use Think\CommonController;

class UserController extends CommonController{

    public function _initialize(){
        parent::_initialize();
    }

    public function register(){
        // if($_GET['aaa']==1){
        //     $phone="15822836709";
        //     $response=send_code($phone);
        // }else{
        //     $msg_id="290544903796";
        //     $code="285775";
        //     $response=check_code($msg_id, $code);
        // }

        // dump($response);die;
        $this->display();
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