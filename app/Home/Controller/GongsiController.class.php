<?php

namespace Home\Controller;
use Think\CommonController;

class GongsiController extends CommonController{

    public function _initialize(){
        parent::_initialize();

        global $user;
        $user=session('userinfo');
        $this->user=$user;

        if(!$cid=$_GET['cid']){
            $this->redirect('Home/Index/index');
        }else{
            $company_info=D('User')->relation(true)->find($cid);
            $types_zzdb=explode('#', $company_info['company_types_zzdb']);
            $types_axbl=explode('#', $company_info['company_types_axbl']);
            $types=array_filter(array_merge($types_zzdb, $types_axbl));   

            foreach ($types as $key => $value) {
                $company_info['_company_types'][]=M('Type')->find($value);
            }

            $this->company_info=$company_info;
        }

        // dump($_SERVER);die;
    }

    public function search(){
        $this->display();
    }

    public function index(){
        $cid=$_GET['cid'];
        $case_list=D('Case')->where(array('uid'=>$cid))->relation(true)->limit(3)->select();

        $team_list=D('Team')->where(array('uid'=>$cid))->relation(true)->limit(3)->select();

        $this->case_list=$case_list;
        $this->team_list=$team_list;
        $this->display();
    }

    public function anli(){
        $zizhileixing=M('Type')->where(array('pid'=>1275))->select();

        $where=array();
        $where['cid']=$_GET['cid'];
        if($_GET['type']){
            $where['zizhileixing']=$_GET['type'];
        }
        $list=D('Case')->where($where)->relation(true)->select();
            
        $this->zizhileixing=$zizhileixing;
        $this->list=$list;
        $this->display();
    }

    public function jianjie(){
        $this->display();
    }

    public function zhengshu(){
        $this->display();
    }

    public function team(){
        $chongyejingyan=M('Type')->where(array('pid'=>1341))->select();

        $where=array();
        $where['cid']=$_GET['cid'];
        if($_GET['type']){
            $where['chongyejingyan']=$_GET['type'];
        }
        $list=D('Team')->where($where)->relation(true)->select();
            
        $this->chongyejingyan=$chongyejingyan;
        $this->list=$list;
        $this->display();
    }

    public function lianxi(){
        $this->display();
    }

    

    
  




}