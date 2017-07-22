<?php

namespace Home\Controller;
use Think\CommonController;

class SafetysetController extends CommonController{

    public function _initialize(){
        parent::_initialize();
    }

    //安全设置
    public function index(){
        $this->display();
    }


  




}