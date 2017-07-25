<?php

namespace Home\Controller;
use Think\CommonController;

class SafetysetController extends CommonController{

    public function _initialize(){
        parent::_initialize();

        global $user;
        $user=session('userinfo');
        $this->user=$user;
    }

    //安全设置
    public function index(){
        $this->display();
    }

    public function changepassword(){
    	global $user;

    	$userinfo=M('User')->find($user['id']);
    	$this->phone=$userinfo['phone'];
        $this->display();
    }

    public function ajax_edit_password(){
        global $user;
        if($_POST && $user){
        	$oldpassword=$_POST['oldpassword'];
        	$password=$_POST['password'];
        	$repassword=$_POST['repassword'];

        	$userinfo=M('User')->find($user['id']);
        	if($userinfo['password'] == md5($oldpassword)){
        		if($oldpassword != $password){
	        		if($password == $repassword){
	        			$data=array();
	        			$data['password']=md5($password);
	        			$data['id']=$user['id'];
	        			$data['time']=time();

	        			$res=M('User')->save($data);
	        			if($res){
	        			    $data=array();
	        			    $data['code']=0;
	        			    $data['msg']='修改成功';
	        			}else{
	        			    $data=array();
	        			    $data['code']=1;
	        			    $data['msg']='修改失败';
	        			}
	        		}else{
						$data=array();
				        $data['code']=1;
				        $data['msg']='新旧密码不一致';
	        		}
        		}else{
					$data=array();
			        $data['code']=1;
			        $data['msg']='新旧密码不可以一样';
        		}
        	}else{
        		$data=array();
                $data['code']=1;
                $data['msg']='当前密码不正确';
        	}
        }else{
            $data=array();
            $data['code']=1;
            $data['msg']='操作失败';
        }

        echo json_encode($data);
    }
  




}