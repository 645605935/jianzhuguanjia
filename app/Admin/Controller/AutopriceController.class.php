<?php
namespace Admin\Controller;
use Common\Controller\AuthController;

class AutopriceController extends AuthController {
    
    public function _initialize() {
        parent::_initialize();
        global $user;
        $user=session('auth');
        $this->user=$user;
        $this->cur_c='Autoprice';

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


        $this->cur_v='Autoprice-index';

        $page="Autoprice/index";
        $page_buttons=M('PageButtons')->where(array('page'=>$page))->select();
        $this->page_buttons=$page_buttons;
        $this->page=$page;

        $type=M('Type')->where(array('pid'=>11))->select();
        $this->type=$type;
        $this->display();
    }

    //请求分类
    public function ajax_get_type_list(){
        $list = D('Type')->where(array('pid'=>I('id')))->select();
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

    //列表
    public function ajax_get_list(){
        $map=array();
        if($_GET['title']){
            $map['title']=array('like','%'.$_GET['title'].'%');
        }

        $d = D('Autoprice');
        $list = $d->where($map)->order('id desc')->relation(true)->select();

        foreach ($list as $key => $value) {
            $list[$key]['time']=date('Y-m-d H:i',$value['time']);
            $list[$key]['start_time']=date('Y-m-d H:i',$value['start_time']);
            $list[$key]['end_time']=date('Y-m-d H:i',$value['end_time']);
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

    //获取单条信息
    public function ajax_get_row_info(){
        $id=I('id');

        if($id){
            $row = D('Autoprice')->find($id);

            $type1_info=M('type')->find($row['type1']);
            $type2_info=M('type')->find($row['type2']);
            $type3_info=M('type')->find($row['type3']);
            $_type1_list=M('type')->where(array('pid'=>$type1_info['pid']))->select();
            $_type2_list=M('type')->where(array('pid'=>$type2_info['pid']))->select();
            $_type3_list=M('type')->where(array('pid'=>$type3_info['pid']))->select();

            foreach ($_type1_list as $key => $value) {
                if($value['id']==$row['type1']){
                    $_type1_list[$key]['selected']=1;
                }else{
                    $_type1_list[$key]['selected']=0;
                }
            }
            $row['_type1_list']=$_type1_list;

            foreach ($_type2_list as $key => $value) {
                if($value['id']==$row['type2']){
                    $_type2_list[$key]['selected']=1;
                }else{
                    $_type2_list[$key]['selected']=0;
                }
            }
            $row['_type2_list']=$_type2_list;

            foreach ($_type3_list as $key => $value) {
                if($value['id']==$row['type3']){
                    $_type3_list[$key]['selected']=1;
                }else{
                    $_type3_list[$key]['selected']=0;
                }
            }
            $row['_type3_list']=$_type3_list;


            $row['time']=date('Y-m-d H:i',$row['time']);
            $row['start_time']=date('Y-m-d H:i',$row['start_time']);
            $row['end_time']=date('Y-m-d H:i',$row['end_time']);

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
            $type1_info=M('type')->find($_POST['type1']);
            $type2_info=M('type')->find($_POST['type2']);
            $type3_info=M('type')->find($_POST['type3']);
            $data['title']=$type1_info['title'].'=>'.$type2_info['title'].'=>'.$type3_info['title'];
            $data['time']=time();

            $id = M('Autoprice')->add($data);
            if($id){
                $row= D('Autoprice')->relation(true)->find($id);

                $row['time']=date('Y-m-d H:i',$row['time']);
                $row['start_time']=date('Y-m-d H:i',$row['start_time']);
                $row['end_time']=date('Y-m-d H:i',$row['end_time']);

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
            $type1_info=M('type')->find($_POST['type1']);
            $type2_info=M('type')->find($_POST['type2']);
            $type3_info=M('type')->find($_POST['type3']);
            $data['title']=$type1_info['title'].'=>'.$type2_info['title'].'=>'.$type3_info['title'];

            $res = M('Autoprice')->save($data);
            if($res){
                $id=$data['id'];
                $row= D('Autoprice')->relation(true)->find($id);

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
            $res=M('Autoprice')->where(array('id'=>$id))->delete();

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
                $data['data']["src"]='http://'.$_SERVER['HTTP_HOST'].'/Uploads/layui/'.$img;
            }

            echo json_encode($data);
        }
    }

}