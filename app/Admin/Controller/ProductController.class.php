<?php
namespace Admin\Controller;
use Common\Controller\AuthController;
use OSS\Core\OssException;//不然OssException 报错

class ProductController extends AuthController {
    
    public function _initialize() {
        parent::_initialize();
        global $user;
        $user=session('auth');
        $this->user=$user;
        $this->cur_c='Product';

        if($_POST){
            $this->_POST=$_POST;
        }
    }

    public function index(){
        global $user;

        $group=M('auth_group')->where(array('pid'=>0))->select();
        foreach ($group as $key => $value) {
            $group[$key]['_child']=M('auth_group')->where(array('pid'=>$value['id']))->select();
        }
        $this->group=$group;


        $this->cur_v='Product-index';

        $page="Product/index";
        $page_buttons=M('PageButtons')->where(array('page'=>$page))->select();
        $this->page_buttons=$page_buttons;
        $this->page=$page;


        //三级分类
        $this->type_1=A('Communal/Type')->getSon(1238);
        $this->display();
    }

    //列表
    public function ajax_get_list(){
        $map=array();
        if($_GET['title']){
            $map['title']=array('like','%'.$_GET['title'].'%');
        }

        $d = D('Product');
        $list = $d->where($map)->order('id desc')->relation(true)->select();

        foreach ($list as $key => $value) {
            $list[$key]['time']=date('Y-m-d',$value['time']);
            $list[$key]['end_time']=date('Y-m-d',$value['end_time']);
        }

        if($list){
            $data=array();
            $data['code']=0;
            $data['msg']='success';
            $data['data']=$list;
        }else{
            $data=array();
            $data['code']=1;
            $data['msg']='未搜索到数据';
            $data['data']=array();
        }
        echo json_encode($data);
    }

    public function ajax_get_type_1(){
        $type_1 = A('Communal/Type')->getSon(1238);

        if($type_1){
            $data=array();
            $data['code']=0;
            $data['msg']='success';
            $data['data']=$type_1;
        }else{
            $data=array();
            $data['code']=1;
            $data['msg']='未搜索到数据';
            $data['data']=array();
        }
        echo json_encode($data);
    }

    public function ajax_get_type_2(){
        $type_1=I('id');

        $type_2 = A('Communal/Type')->getSon($type_1);

        if($type_2){
            $data=array();
            $data['code']=0;
            $data['msg']='success';
            $data['data']=$type_2;
        }else{
            $data=array();
            $data['code']=1;
            $data['msg']='未搜索到数据';
            $data['data']=array();
        }
        echo json_encode($data);
    }

    public function ajax_get_type_3(){
        $type_2=I('id');

        $type_3 = A('Communal/Type')->getSon($type_2);

        if($type_3){
            $data=array();
            $data['code']=0;
            $data['msg']='success';
            $data['data']=$type_3;
        }else{
            $data=array();
            $data['code']=1;
            $data['msg']='未搜索到数据';
            $data['data']=array();
        }
        echo json_encode($data);
    }

    

   
    //根据ID获取用户关联的信息
    public function ajax_get_user_relation_logs(){

        $id=$_GET['id'];
        if($id==0){
            $list = array();
        }else{
            $list = D('Log')->where(array('uid'=>$id))->order('time desc')->select();
        }

        echo json_encode($list);
    }

    //获取单条信息
    public function ajax_get_row_info(){
        $id=I('id');

        if($id){
            $row = M('Product')->find($id);
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
            $data['code']=2;
            $data['msg']='error';
        }

        echo json_encode($data);
    }


    //添加
    public function ajax_add(){
        global $user;

        $data=array();
        $data=$_POST;
        if($data){
            $data['uid']=$user['uid'];
            $data['time']=time();
            $data['end_time']=strtotime($data['end_time']);

            $id = M('Product')->add($data);
            if($id){
                $row= D('Product')->relation(true)->find($id);

                $row['time']=date('Y-m-d H:i',$value['time']);
                $row['end_time']=date('Y-m-d H:i',$value['end_time']);

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

    //编辑
    public function ajax_edit(){
        global $user;

        $data=array();
        $data=$_POST;
        if($data){
            $data['time']=time();

            $res = M('Product')->save($data);
            if($res){
                $id=$data['id'];
                $row= D('Product')->relation(true)->find($id);

                $row['time']=date('Y-m-d H:i',$value['time']);
                $row['end_time']=date('Y-m-d H:i',$value['end_time']);

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

    //删除
    public function ajax_del(){
        $id=I('id'); 

        if($id){
            $res=M('Product')->where(array('id'=>$id))->delete();

            if($res){
                $data=array();
                $data['code']=0;
                $data['msg']='success';
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


    // 上传文件
    public function lay_upload_file1111(){
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
                $data['data']["src"]='http://'.$_SERVER['HTTP_HOST'].'/Uploads/layui/'.$img;
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
                $img_url='http://'.$_SERVER['HTTP_HOST'].'/Uploads/layui/'.$img;

                $data=array();
                $data['code']=0;
                $data['msg']='success';
                $data['data']["src"]=$img_url;

                //上传到阿里云OSS
                oss_upload( './Uploads/layui/'.$img );
            }

            echo json_encode($data);
        }
    }



}