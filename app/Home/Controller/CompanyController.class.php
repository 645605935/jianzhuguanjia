<?php

namespace Home\Controller;
use Think\CommonController;

class CompanyController extends CommonController{

    public function _initialize(){
        parent::_initialize();
    }

    //实名认证
    public function companylicense(){
        $this->display();
    }

    //公司资料
    public function companyinfo(){
        $this->display();
    }

    public function caseinfo(){
        $this->display();
    }

    public function addcaseinfo(){
        $this->display();
    }

    public function team(){
        $this->display();
    }

    
  




}