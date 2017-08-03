<?php

namespace Home\Controller;
use Think\CommonController;

class GongsiController extends CommonController{

    public function _initialize(){
        parent::_initialize();

        global $user;
        $user=session('userinfo');
        $this->user=$user;

        if(!$_GET['cid']){
            $this->redirect('Home/Index/index');
        }
    }

    public function search(){
        $cid=$_GET['cid'];

        $company_info=M('User')->find($cid);
        dump($company_info);die;
        $this->display();
    }

    public function index(){
        $cid=$_GET['cid'];

        $this->company_info=M('User')->find($cid);
        $this->company_info=$company_info;
        $this->display();
    }

    public function anli(){
        $this->display();
    }

    public function jianjie(){
        $this->display();
    }

    public function zhengshu(){
        $this->display();
    }

    public function team(){
        $this->display();
    }

    public function lianxi(){
        $this->display();
    }

    

    
  




}