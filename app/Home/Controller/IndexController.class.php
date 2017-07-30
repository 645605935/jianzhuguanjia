<?php

namespace Home\Controller;
use Think\CommonController;

class IndexController extends CommonController{
    public function _initialize(){
        parent::_initialize();

        global $user;
        $user=session('userinfo');
        $this->user=$user;
    }

    public function index(){
        $this->display();
    }



    public function baojia(){
        global $user;

        $province=M('Province')->select();

        $zhuanyedengji=M('Type')->where(array('pid'=>1292))->select();

        //左侧分类菜单
        $type=M('Type')->where(array('pid'=>1275,'id'=>array('in',array('1292','1293'))))->select();
        foreach ($type as $key => $value) {
            $type[$key]['_child']=M('Type')->where(array('pid'=>$value['id']))->select();
        }

        $this->type=$type;
        $this->province=$province;
        $this->zhuanyedengji=$zhuanyedengji;
        $this->display();
    }

    public function daiban(){
        global $user;

        $province=M('Province')->select();
        if($_GET['fit_3']){
            $city=M('City')->where(array('fatherid'=>$_GET['fit_3']))->select();
        }

        $type_1=M('Type')->where(array('pid'=>1273))->select();
        if($_GET['fit_1']){
            $type_2=M('Type')->where(array('pid'=>$_GET['fit_1']))->select();
        }



        // 右侧分类
        $right_type_1=M('Type')->where(array('pid'=>1275))->select();

        $this->type_1=$type_1;
        $this->type_2=$type_2;
        $this->province=$province;
        $this->city=$city;

        $this->right_type_1=$right_type_1;
        $this->display();
    }

    public function safe(){
        global $user;

        $province=M('Province')->select();
        if($_GET['fit_3']){
            $city=M('City')->where(array('fatherid'=>$_GET['fit_3']))->select();
        }

        $type_1=M('Type')->where(array('pid'=>1273))->select();
        if($_GET['fit_1']){
            $type_2=M('Type')->where(array('pid'=>$_GET['fit_1']))->select();
        }

        // 右侧分类
        $right_type_1=M('Type')->where(array('pid'=>1377))->select();//办理类型
        $right_type_2=M('Type')->where(array('pid'=>1378))->select();//资质情况
        $right_type_3=M('Type')->where(array('pid'=>1379))->select();//人员情况


        $this->type_1=$type_1;
        $this->type_2=$type_2;
        $this->province=$province;
        $this->city=$city;

        $this->right_type_1=$right_type_1;
        $this->right_type_2=$right_type_2;
        $this->right_type_3=$right_type_3;
        $this->display();
    }

    //是否到期，可否继续登录
    public function ajaxIsCanLogin(){
        if(IS_POST){
            $url = $_SERVER['HTTP_HOST'];
            $temp_school=explode('.baidulab.', $url);
            $url=$temp_school[0];
            $school=D('School')->where(array('url'=>$url))->find();

            if( $school['start_time'] < time() && time() < $school['end_time']){
                $data['status']="1";
            }else{
                $data['status']="1";
            }
            echo json_encode($data);
        }
    }



    public function ajax_check_code(){
        global $user;

        if($code=$_GET['code']){
            $votelog=M('Order')->where(array('uid'=>$user['id'],'bid'=>$id))->find();
            if($votelog){
                $data=array();
                $data['code']=1;
                $data['msg']='您已投过！';
            }else{
                $where=array();
                $where['id']=$id;


                $data=array();
                $data['uid']=$user['id'];
                $data['bid']=$id;
                $data['time']=time();
                M('Votelog')->add($data);

                $res = M('Baoming')->where($where)->setInc('vote');
                if($res){
                    $data=array();
                    $data['code']=0;
                    $data['msg']='success';
                    $data['data']=$row;
                }else{
                    $data=array();
                    $data['code']=1;
                    $data['msg']='error';
                }
            }
        }else{
            $data=array();
            $data['code']=2;
            $data['msg']='error';
        }

        echo json_encode($data);
    }
    
    public function ajax_apply_baojia(){
        global $user;

        if($_POST){
            $data=$_POST;
            $data['time']=time();

            $id=M('Order')->add($data);
            if($id){
                $data=array();
                $data['code']=0;
                $data['msg']='申请成功';
            }else{
                $data=array();
                $data['code']=1;
                $data['msg']='申请失败';
            }
        }else{
            $data=array();
            $data['code']=2;
            $data['msg']='error';
        }

        echo json_encode($data);
    }

    public function news(){
        $this->display();
    }

    public function news_detail(){
        $this->display();
    }

    //临时接口
    public function isokphone(){
        $phone=$_GET['Phone'];

        if($phone){
            echo 'true';
        }else{
            echo 'false';
        }
    }

    public function aboutus(){
        $this->display();
    }

    public function contact(){
        $this->display();
    }

    public function join(){
        $this->display();
    }

    public function mzsm(){
        $this->display();
    }

    public function team(){
        $this->display();
    }

    public function tuiguang(){
        $this->display();
    }

    public function xunzheng(){
        $this->display();
    }

    public function baike(){
        $this->display();
    }

    public function ajax_get_city_list(){
        $map=array();
        if($provinceid=$_GET['provinceid']){
            $map['fatherid']=$provinceid;
        }
            
        $list = M('City')->where($map)->order('first_name desc')->select();

        if($list){
            $data=array();
            $data['code']=0;
            $data['msg']='success';
            $data['data']=$list;
        }else{
            $data=array();
            $data['code']=1;
            $data['msg']='empty';
        }
        echo json_encode($data);
    }


    public function ajax_get_type_list(){
        $map=array();
        if($type=$_GET['type']){
            $map['pid']=$type;
        }
            
        $list = M('Type')->where($map)->select();

        if($list){
            $data=array();
            $data['code']=0;
            $data['msg']='success';
            $data['data']=$list;
        }else{
            $data=array();
            $data['code']=1;
            $data['msg']='empty';
        }
        echo json_encode($data);
    }

    public function ajax_get_autoprice_info(){
        $map=array();
        if($type=$_GET['type']){
            $map['type']=$type;
        }

        $row = M('Autoprice')->where($map)->find();

        if($row){
            $data=array();
            $data['code']=0;
            $data['msg']='success';
            $data['data']=$row;
        }else{
            $data=array();
            $data['code']=1;
            $data['msg']='empty';
        }
        echo json_encode($data);
    }

    
    // 上传单图
    public function lay_upload_img(){
        if($_FILES['img']['size']>0){
            $upload = new \Think\Upload();// 实例化上传类
            $upload->maxSize   =     31457280 ;// 设置附件上传大小
            $upload->exts      =     array('jpg','png','jpeg','gif');// 设置附件上传类型
            $upload->uploadReplace  = false;// 存在同名文件是否覆盖
            $upload->autoSub   =     false;//是否启用子目录保存
            $upload->rootPath  =     './Uploads/'; // 设置附件上传根目录
            $upload->savePath  =     'layui/'; // 设置附件上传（子）目录
            $upload->saveRule  =     ''; // 设置附件上传（子）目录
             
            // 上传文件 
            $info   =   $upload->upload();

            if(!$info) {
                $data=array();
                $data['code']=0;
                $data['msg']=$upload->getError();
            }else{
                $img=$info['img']['savename'];
                $data=array();
                $data['code']=0;
                $data['msg']='success';
                $data['data']["src"]='/Uploads/layui/'.$img;
            }

            echo json_encode($data);
        }
    }

    // 上传多图
    public function lay_upload_images(){
        if($_FILES['images']['size']>0){
            $upload = new \Think\Upload();// 实例化上传类
            $upload->maxSize   =     31457280 ;// 设置附件上传大小
            $upload->exts      =     array('jpg','png','jpeg','gif');// 设置附件上传类型
            $upload->uploadReplace  = false;// 存在同名文件是否覆盖
            $upload->autoSub   =     false;//是否启用子目录保存
            $upload->rootPath  =     './Uploads/'; // 设置附件上传根目录
            $upload->savePath  =     'layui/'; // 设置附件上传（子）目录
            $upload->saveRule  =     ''; // 设置附件上传（子）目录
             
            // 上传文件 
            $info   =   $upload->upload();

            if(!$info) {
                $data=array();
                $data['code']=0;
                $data['msg']=$upload->getError();
            }else{
                $img=$info['images']['savename'];
                $data=array();
                $data['code']=0;
                $data['msg']='success';
                $data['data']["src"]='/Uploads/layui/'.$img;
            }

            echo json_encode($data);
        }
    }


    // 上传文件
    public function lay_upload_file(){
        if($_FILES['file']['size']>0){
            $upload = new \Think\Upload();// 实例化上传类
            $upload->maxSize   =     31457280 ;// 设置附件上传大小
            $upload->exts      =     array('zip', 'rar', 'xls','xlsx', 'doc','docx','ppt','pptx','pdf','jpg','png','jpeg','gif');// 设置附件上传类型
            $upload->uploadReplace  = false;// 存在同名文件是否覆盖
            $upload->autoSub   =     false;//是否启用子目录保存
            $upload->rootPath  =     './Uploads/'; // 设置附件上传根目录
            $upload->savePath  =     'layui/'; // 设置附件上传（子）目录
            $upload->saveRule  =     ''; // 设置附件上传（子）目录
             
            // 上传文件 
            $info   =   $upload->upload();

            if(!$info) {
                $data=array();
                $data['code']=0;
                $data['msg']=$upload->getError();
            }else{
                $img=$info['file']['savename'];
                $data=array();
                $data['code']=0;
                $data['msg']='success';
                $data['data']["src"]='/Uploads/layui/'.$img;
            }

            echo json_encode($data);
        }
    }


}