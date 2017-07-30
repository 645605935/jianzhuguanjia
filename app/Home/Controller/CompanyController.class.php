<?php

namespace Home\Controller;
use Think\CommonController;

class CompanyController extends CommonController{

    public function _initialize(){
        parent::_initialize();

        global $user;
        $user=session('userinfo');
        $this->user=$user;
    }

    

    //公司资料
    public function companyinfo(){
        global $user;
        
        $province=M('Province')->select();

        $company_types=M('Type')->where(array('pid'=>1275))->select();
        foreach ($company_types as $key => $value) {
            $company_types[$key]['_child']=M('Type')->where(array('pid'=>$value['id']))->select();
        }

        $this->province=$province;
        $this->company_types=$company_types;
        $this->display();
    }

    public function caseinfo(){
        global $user;
        $where=array();
        $where['uid']=$user['id'];


        $count      = M('Cases')->where($where)->count();
        $Page       = new \Common\Extend\Page($count,6);
        $nowPage = isset($_GET['p'])?$_GET['p']:1;
        $list=M('Cases')->page($nowPage.','.$Page->listRows)->where($where)->select();
        foreach ($list as $key => $value) {
            $list[$key]['time']=date('Y-m-d',$value['time']);
            if($value['zizhileixing']){
                $temp=M('Type')->find($value['zizhileixing']);
                $list[$key]['zizhileixing']=$temp['title'];
            }
            if($value['banlizhouqi']){
                $temp=M('Type')->find($value['banlizhouqi']);
                $list[$key]['banlizhouqi']=$temp['title'];
            }
        }


        $this->page=$Page->show();
        $this->list=$list;
        $this->display();
    }

    public function addcaseinfo(){
        $banlizhouqi=M('Type')->where(array('pid'=>1336))->select();
        $zizhileixing=M('Type')->where(array('pid'=>1275))->select();
        

        $this->banlizhouqi=$banlizhouqi;
        $this->zizhileixing=$zizhileixing;
        $this->display();
    }

    public function ajax_add_case(){
        global $user;
        if($_POST && $user){
            $data=array();
            $data['img']=$_POST['img'];
            $data['company_name']=$_POST['company_name'];
            $data['zizhileixing']=$_POST['zizhileixing'];
            $data['hezuoyewu']=$_POST['hezuoyewu'];
            $data['banlizhouqi']=$_POST['banlizhouqi'];
            $data['price']=$_POST['price'];
            $data['renyuanpeizhi']=$_POST['renyuanpeizhi'];
            $data['uid']=$user['id'];
            $data['time']=time();

            $id=M('Cases')->add($data);
            if($id){
                $data=array();
                $data['code']=0;
                $data['msg']='添加成功';
                $data['data']=$id;
            }else{
                $data=array();
                $data['code']=1;
                $data['msg']='添加失败';
            }
        }else{
            $data=array();
            $data['code']=1;
            $data['msg']='操作失败';
        }

        echo json_encode($data);
    }

    public function editcaseinfo(){
        if($id=$_GET['id']){
            $row=M('Cases')->find($id);
            $banlizhouqi=M('Type')->where(array('pid'=>1336))->select();
            $zizhileixing=M('Type')->where(array('pid'=>1275))->select();
            
            $this->row=$row;
            $this->banlizhouqi=$banlizhouqi;
            $this->zizhileixing=$zizhileixing;

            $this->display();
        }
    }

    public function ajax_edit_case(){
        global $user;
        if($_POST && $user){
            $data=array();
            $data['img']=$_POST['img'];
            $data['company_name']=$_POST['company_name'];
            $data['zizhileixing']=$_POST['zizhileixing'];
            $data['hezuoyewu']=$_POST['hezuoyewu'];
            $data['banlizhouqi']=$_POST['banlizhouqi'];
            $data['price']=$_POST['price'];
            $data['renyuanpeizhi']=$_POST['renyuanpeizhi'];
            $data['time']=time();


            $res=M('Cases')->where(array('id'=>$_POST['id']))->save($data);
            if($res){
                $data=array();
                $data['code']=0;
                $data['msg']='编辑成功';
            }else{
                $data=array();
                $data['code']=1;
                $data['msg']='编辑失败';
            }
        }else{
            $data=array();
            $data['code']=1;
            $data['msg']='操作失败';
        }

        echo json_encode($data);
    }

    public function ajax_del_case(){
        global $user;

        $id=$_GET['id'];
        if($id && $user){

            $res=M('Cases')->delete($id);
            if($res){
                $data=array();
                $data['code']=0;
                $data['msg']='删除成功';
            }else{
                $data=array();
                $data['code']=1;
                $data['msg']='删除失败';
            }
        }else{
            $data=array();
            $data['code']=1;
            $data['msg']='操作失败';
        }

        echo json_encode($data);
    }

//**************************************************************
    public function team(){
        global $user;
        $where=array();
        $where['uid']=$user['id'];


        $count      = M('Team')->where($where)->count();
        $Page       = new \Common\Extend\Page($count,6);
        $nowPage = isset($_GET['p'])?$_GET['p']:1;
        $list=M('Team')->page($nowPage.','.$Page->listRows)->where($where)->select();
        foreach ($list as $key => $value) {
            $list[$key]['time']=date('Y-m-d',$value['time']);
            if($value['chongyejingyan']){
                $temp=M('Type')->find($value['chongyejingyan']);
                $list[$key]['chongyejingyan']=$temp['title'];
            }
        }


        $this->page=$Page->show();
        $this->list=$list;
        $this->display();
    }

    public function addteam(){
        $chongyejingyan=M('Type')->where(array('pid'=>1341))->select();

        $this->chongyejingyan=$chongyejingyan;
        $this->display();
    }

    public function ajax_add_team(){
        global $user;
        if($_POST && $user){
            $data=array();
            $data['img']=$_POST['img'];
            $data['truename']=$_POST['truename'];
            $data['phone']=$_POST['phone'];
            $data['chongyejingyan']=$_POST['chongyejingyan'];
            $data['fuwulinian']=$_POST['fuwulinian'];
            $data['uid']=$user['id'];
            $data['time']=time();

            $id=M('Team')->add($data);

            if($id){
                $data=array();
                $data['code']=0;
                $data['msg']='添加成功';
                $data['data']=$id;
            }else{
                $data=array();
                $data['code']=1;
                $data['msg']='添加失败';
            }
        }else{
            $data=array();
            $data['code']=1;
            $data['msg']='操作失败';
        }

        echo json_encode($data);
    }

    public function editteam(){
        if($id=$_GET['id']){
            $row=M('Team')->find($id);
            $chongyejingyan=M('Type')->where(array('pid'=>1341))->select();
            
            $this->row=$row;
            $this->chongyejingyan=$chongyejingyan;

            $this->display();
        }
    }

    public function ajax_edit_team(){
        global $user;
        if($_POST && $user){
            $data=array();
            $data['img']=$_POST['img'];
            $data['truename']=$_POST['truename'];
            $data['phone']=$_POST['phone'];
            $data['chongyejingyan']=$_POST['chongyejingyan'];
            $data['fuwulinian']=$_POST['fuwulinian'];
            $data['time']=time();


            $res=M('Team')->where(array('id'=>$_POST['id']))->save($data);
            if($res){
                $data=array();
                $data['code']=0;
                $data['msg']='编辑成功';
            }else{
                $data=array();
                $data['code']=1;
                $data['msg']='编辑失败';
            }
        }else{
            $data=array();
            $data['code']=1;
            $data['msg']='操作失败';
        }

        echo json_encode($data);
    }

    public function ajax_del_team(){
        global $user;

        $id=$_GET['id'];
        if($id && $user){

            $res=M('Cases')->delete($id);
            if($res){
                $data=array();
                $data['code']=0;
                $data['msg']='删除成功';
            }else{
                $data=array();
                $data['code']=1;
                $data['msg']='删除失败';
            }
        }else{
            $data=array();
            $data['code']=1;
            $data['msg']='操作失败';
        }

        echo json_encode($data);
    }

    //实名认证
    public function companylicense(){
        global $user;

        $companyinfo=M('User')->find($user['id']); 

        $province=M('Province')->select();
        $city=M('city')->where(array('fatherid'=>$companyinfo['company_province']))->select();

        $comanySize=M('Type')->where(array('pid'=>11))->select();

        $this->comanySize=$comanySize;
        $this->companyinfo=$companyinfo;
        $this->province=$province;
        $this->city=$city;
        $this->display();
    }

    public function ajax_save_companylicense(){
        global $user;

        if($_POST && $user){
            $data=array();
            $data['company_name']=$_POST['company_name'];
            $data['company_province']=$_POST['province'];
            $data['company_city']=$_POST['city'];
            $data['company_address']=$_POST['company_address'];
            $data['company_size']=$_POST['company_size'];
            $data['company_yingyezhizhao']=$_POST['company_yingyezhizhao'];
            $data['time']=time();

            $where=array();
            $where['id']=$user['id'];

            $res=M('User')->where($where)->save($data);
            if($res){
                $data=array();
                $data['code']=0;
                $data['msg']='保存成功';
            }else{
                $data=array();
                $data['code']=1;
                $data['msg']='保存失败';
            }
        }else{
            $data=array();
            $data['code']=1;
            $data['msg']='操作失败';
        }

        echo json_encode($data);
    }


    public function question(){
        $this->display();
    }
    
  




}