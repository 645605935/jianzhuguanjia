<?php

namespace Home\Controller;
use Think\CommonController;

class UsercenterController extends CommonController{

    public function _initialize(){
        parent::_initialize();

        global $user;
        $user=session('userinfo');
        $this->user=$user;
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
        global $user;

        if($user){
            $where=array();
            $count      = M('Order')->where($where)->count();
            $Page       = new \Common\Extend\Page($count,10);
            $nowPage = isset($_GET['p'])?$_GET['p']:1;
            $list=D('Order')->page($nowPage.','.$Page->listRows)->where($where)->relation(true)->select();

            $this->page=$Page->show();
            $this->list=$list;

            $this->display();
        }else{
            $this->redirect('Home/Index/index'); 
        }
    }

    public function question(){
        $this->display();
    }


  




}