<?php

namespace Home\Controller;
use Think\CommonController;

class AgententerController extends CommonController{

    public function _initialize(){
        parent::_initialize();

        global $user;
        $user=session('userinfo');
        $this->user=$user;
    }

    public function step_1(){
        if($_POST){
            $data=array();
            $data['truename']=$_POST['Contact'];
            $data['phone']=$_POST['Phone'];
            $data['password']=md5($_POST['password']);
            $data['gid']=33;
            $data['time']=time();

            $id=M('User')->add($data);
            if($id){
                $row=M('User')->find($id);
                session('userinfo',$row);

                $data=array();
                $data['IsSuccess']=true;
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

    public function ruzhu_success(){
        $this->display();
    }

    public function step_2(){
        $province=M('Province')->select();
        $company_size=M('Type')->where(array('pid'=>11))->select();

        $this->province=$province;
        $this->company_size=$company_size;
        $this->display();
    }

    public function step_3(){
        $province=M('Province')->select();

        $company_types=M('Type')->where(array('pid'=>1275))->select();
        foreach ($company_types as $key => $value) {
            $company_types[$key]['_child']=M('Type')->where(array('pid'=>$value['id']))->select();
        }

        $this->province=$province;
        $this->company_types=$company_types;
        $this->display();
    }

    public function step_4(){
        $this->display();
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


    public function ajax_save_company_info(){
        global $user;

        if($user){
            $data=array();
            $data=$_POST;
            if($data){
                $where=array();
                $where['id']=$user['id'];

                $data['time']=time();

                $res = M('User')->where($where)->save($data);
                if($res){
                    $row= M('User')->find($user['id']);
                    $row['time']=date('Y-m-d H:i',$row['time']);

                    if($row){
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