<?php

namespace Home\Controller;
use Think\CommonController;

class UsercenterController extends CommonController{

    public function _initialize(){
        parent::_initialize();
    }

    //建筑公司个人中心首页
    public function index(){
        $this->display();
    }

    //中介公司个人中心首页
    public function brokerindex(){
        $this->display();
    }

    public function brokerorder(){
        $this->display();
    }

    public function question(){
        $this->display();
    }


  




}