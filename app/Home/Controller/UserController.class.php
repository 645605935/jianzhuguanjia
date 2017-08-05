<?php

namespace Home\Controller;
use Think\CommonController;

class UserController extends CommonController{

    public function _initialize(){
        parent::_initialize();

        $this->HTTP_HOST=$_SERVER['HTTP_HOST'];
    }

    public function register(){
        if($_POST){
            $data=array();
            $data['truename']=$_POST['Contact'];
            $data['phone']=$_POST['Phone'];
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
                $row=M('User')->find($id);
                session('userinfo',$row);

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

    // 用户登出
    public function exituser() {
        $res=session();
        
        $data=array();
        $data['IsSuccess']=true;
        $data['Msg']='退出成功';
        
        echo json_encode($data);
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
        if($phone){
            $row=M('User')->where(array('phone'=>$phone))->find();
            if(!$row){
                echo 'true';
            }else{
                echo 'false';
            }
        }
    }


    public function getvalidatecode(){
        $phone=$_POST['phone'];

        if($phone){
            $res= send_code($phone);
            if($res['http_code']==200){
                $body_data=json_decode($res['body'],true);

                //记录短信验证码信息
                $data=array();
                $data['phone']=$phone;
                $data['msg_id']=$body_data['msg_id'];
                $data['time']=time();
                $data['ip']=get_client_ip();

                $id=M('JsmsLog')->add($data);
                if($id){
                    $data=array();
                    $data['IsSuccess']=true;
                    $data['Msg']='发送短信并添加记录成功';
                }else{
                    $data=array();
                    $data['IsSuccess']=false;
                    $data['Msg']='发送成功但记录日志失败';
                }
            }else{
                $data=array();
                $data['IsSuccess']=false;
                $data['Msg']=$res['error']['msg'];
            }

            echo json_encode($data);
        }
    }

    public function checkvalidatecode(){
        $phone=$_POST['phone'];
        $code=$_POST['code'];

        if($phone&&$code){

            $row=M('JsmsLog')->where(array('phone'=>$phone))->order('id desc')->find();
            if($row){
                $msg_id=$row['msg_id'];

                $res=check_code($msg_id, $code);
                if($res['http_code']==200){
                    $body_data=json_decode($res['body'],true);
                    if($body_data['is_valid']==true){
                        $data=array();
                        $data['IsSuccess']=true;
                        $data['Msg']='验证成功'; 
                    }else{
                        $data=array();
                        $data['IsSuccess']=false;
                        $data['Msg']='验证失败'; 
                    }
                }else{
                    $data=array();
                    $data['IsSuccess']=false;
                    $data['Msg']='验证失败'; 
                }
            }else{
                $data=array();
                $data['IsSuccess']=false;
                $data['Msg']='验证失败'; 
            }

            echo json_encode($data);
        }
    }




  




}