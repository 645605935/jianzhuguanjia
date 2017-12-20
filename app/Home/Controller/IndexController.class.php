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
        $province=M('Province')->select();

        // 右侧分类
        $daiban_type=M('Type')->where(array('pid'=>1275))->select();

        // 右侧分类
        $safe_type_1=M('Type')->where(array('pid'=>1377))->select();//办理类型
        $safe_type_2=M('Type')->where(array('pid'=>1378))->select();//资质情况
        $safe_type_3=M('Type')->where(array('pid'=>1379))->select();//人员情况


        //金牌中介
        $zhongjie_list=D('User')->where(array('gid'=>33))->order('recommend desc')->limit(10)->relation(true)->select();
        foreach ($zhongjie_list as $key => $value) {
            $str='';
            $arr=[];
            if($value['company_types']){
                $temp=explode('#', $value['company_types']);
                foreach ($temp as $k => $v) {
                    $row=M('Type')->find($v);
                    $arr[]=$row['title'];
                }
            }
            $str=implode('，', $arr);
            $zhongjie_list[$key]['company_types']=$str;
        }

        //焦点图
        $focus_list=M('Focus')->where(array('type'=>1398))->limit(5)->select();

        // 最新申请服务
        $order_list=D('Order')->limit(5)->relation(true)->order('time desc')->select();
        foreach ($order_list as $key => $value) {
            $order_list[$key]['time']=date('m月d日', $value['time']);
            $order_list[$key]['phone']=hidtel($value['phone']);
        }


        // 最新申请服务
        $voice_list=D('Voice')->limit(15)->relation(true)->select();

        //资质代办服务类型
        $type_list=M('Type')->where(array('pid'=>1275))->select();


        //行业新闻
        $news_list=M('Type')->where(array('pid'=>1350))->select();
        foreach ($news_list as $key => $value) {
            $temp=M('News')->where(array('type'=>$value['id']))->limit(5)->select();
            foreach ($temp as $k => $v) {
                $temp[$k]['time']=date('m-d', $v['time']);
            }
            $news_list[$key]['_child']=$temp;
        }



        //总承包资质
        $zizhi_1_list=M('Article')->where(array('type'=>1390))->limit(11)->select();

        //专业承包资质
        $zizhi_2_list=M('Article')->where(array('type'=>1391))->limit(8)->select();

        //更多资质
        $zizhi_3_list=M('Article')->where(array('type'=>1392))->limit(7)->select();

        //常用网站
        $friendlink_list_1=M('Friendlink')->where(array('type'=>1394))->select();
        $friendlink_list_2=M('Friendlink')->where(array('type'=>1395))->select();
        $friendlink_list_3=M('Friendlink')->where(array('type'=>1396))->select();


        $this->province=$province;
        $this->daiban_type=$daiban_type;
        $this->safe_type_1=$safe_type_1;
        $this->safe_type_2=$safe_type_2;
        $this->safe_type_3=$safe_type_3;
        $this->zhongjie_list=$zhongjie_list;
        $this->focus_list=$focus_list;
        $this->order_list=$order_list;
        $this->voice_list=$voice_list;
        $this->type_list=$type_list;
        $this->news_list=$news_list;
        $this->zizhi_1_list=$zizhi_1_list;
        $this->zizhi_2_list=$zizhi_2_list;
        $this->zizhi_3_list=$zizhi_3_list;
        $this->friendlink_list_1=$friendlink_list_1;
        $this->friendlink_list_2=$friendlink_list_2;
        $this->friendlink_list_3=$friendlink_list_3;
        $this->index="首页";
        $this->display();
    }

    public function change_province(){
        global $user;

        $provinceid=$_GET['provinceid'];

        if($provinceid){
            $_SESSION['cur_province_info']=M('Province')->where(array('provinceid'=>$_GET['provinceid']))->find();
            $this->redirect('Home/Index/index');
        }
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

    public function gongsizhuce(){
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

    public function anzheng(){
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

        $where=array();
        $province=M('Province')->select();
        // if($_GET['fit_1']){
        //     $where['company_yewufanwei']=$_GET['fit_1'];
        // }
        // if($_GET['fit_2']){
        //     $where['company_types']=array('like',"%".$_GET['fit_2']."%");
        // }
        if($_GET['fit_3']){
            $city=M('City')->where(array('fatherid'=>$_GET['fit_3']))->select();
            $where['company_service_province']=$_GET['fit_3'];

            $this->fit_3_info=M('Province')->where(array('provinceid'=>$_GET['fit_3']))->find();
        }
        if($_GET['fit_4']){
            $where['company_service_city']=$_GET['fit_4'];

            $this->fit_4_info=M('City')->where(array('cityid'=>$_GET['fit_4']))->find();
        }

        $type_1=M('Type')->where(array('pid'=>1273))->select();
        if($_GET['fit_1']){
            $type_2=M('Type')->where(array('pid'=>$_GET['fit_1']))->select();

            $this->fit_1_info=M('Type')->find($_GET['fit_1']);
        }

        if($_GET['fit_2']){
            $this->fit_2_info=M('Type')->find($_GET['fit_2']);
        }
        

        // 右侧分类
        $right_type_1=M('Type')->where(array('pid'=>1275))->select();

        $where['gid']=33;
        // $where['company_service_province']=$_SESSION['cur_province_info']['provinceid'];
        $count      = M('User')->where($where)->count();
        $Page       = new \Common\Extend\Page($count,8);
        $nowPage = isset($_GET['p'])?$_GET['p']:1;
        $list=D('User')->page($nowPage.','.$Page->listRows)->where($where)->relation(true)->select();
        foreach ($list as $key => $value) {
            if($value['company_types']){
                $temp=explode('#', $value['company_types']);
                foreach ($temp as $k => $v) {
                    $row=M('Type')->find($v);
                    $arr[]=$row;
                }
            }
            $list[$key]['_company_types']=$arr;
            $list[$key]['_contact_phone']=hidtel($value['contact_phone']);
        }
// echo D('User')->getlastsql();die;
        $this->page=$Page->show();
        $this->list=$list;
        // dump($list);die;

        $this->type_1=$type_1;
        $this->type_2=$type_2;
        $this->province=$province;
        $this->city=$city;
        $this->count=$count;
        $this->right_type_1=$right_type_1;
        $this->display();
    }

    public function safe(){
        global $user;

        $where=array();
        $province=M('Province')->select();
        // if($_GET['fit_1']){
        //     $where['company_yewufanwei']=$_GET['fit_1'];
        // }
        // if($_GET['fit_2']){
        //     $where['company_types']=array('like',"%".$_GET['fit_2']."%");
        // }
        // 
        if($_GET['fit_1']){
            $this->fit_1_info=M('Type')->find($_GET['fit_1']);
        }
        if($_GET['fit_3']){
            $city=M('City')->where(array('fatherid'=>$_GET['fit_3']))->select();
            $where['company_service_province']=$_GET['fit_3'];

            $this->fit_3_info=M('Province')->where(array('provinceid'=>$_GET['fit_3']))->find();
        }
        if($_GET['fit_4']){
            $where['company_service_city']=$_GET['fit_4'];

            $this->fit_4_info=M('City')->where(array('cityid'=>$_GET['fit_4']))->find();
        }

        $type=M('Type')->where(array('pid'=>1377))->select();

        // 右侧分类
        $right_type_1=M('Type')->where(array('pid'=>1377))->select();//办理类型
        $right_type_2=M('Type')->where(array('pid'=>1378))->select();//资质情况
        $right_type_3=M('Type')->where(array('pid'=>1379))->select();//人员情况


        $where['gid']=33;
        // $where['company_service_province']=$_SESSION['cur_province_info']['provinceid'];
        $count      = M('User')->where($where)->count();
        $Page       = new \Common\Extend\Page($count,8);
        $nowPage = isset($_GET['p'])?$_GET['p']:1;
        $list=D('User')->page($nowPage.','.$Page->listRows)->where($where)->relation(true)->select();
        foreach ($list as $key => $value) {
            if($value['company_types']){
                $temp=explode('#', $value['company_types']);
                foreach ($temp as $k => $v) {
                    $row=M('Type')->find($v);
                    $arr[]=$row;
                }
            }
            $list[$key]['_company_types']=$arr;
            $list[$key]['_contact_phone']=hidtel($value['contact_phone']);
        }

        $this->page=$Page->show();
        $this->list=$list;


        $this->type=$type;
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
            $data['order_no']='JZGJ'.time()."_".$user['id'];

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
        $where=array();
        $where['type']=$_GET['type'];
        
        $count      = M('News')->where($where)->count();
        $Page       = new \Common\Extend\Page($count,6);
        $nowPage = isset($_GET['p'])?$_GET['p']:1;
        $list=M('News')->page($nowPage.','.$Page->listRows)->where($where)->select();
        foreach ($list as $key => $value) {
            $list[$key]['time']=date('Y-m-d',$value['time']);
        }


        $this->page=$Page->show();
        $this->list=$list;
        $this->display();
    }

    public function news_relevant(){
        $where=array();
        $where['tags']=array('like', "%".$_GET['tags']."%");
        
        $count      = M('News')->where($where)->count();
        $Page       = new \Common\Extend\Page($count,6);
        $nowPage = isset($_GET['p'])?$_GET['p']:1;
        $list=D('News')->page($nowPage.','.$Page->listRows)->where($where)->relation(true)->select();
        foreach ($list as $key => $value) {
            $list[$key]['time']=date('Y-m-d',$value['time']);

            $tags_arr=explode('_', $value['tags']);
            foreach ($tags_arr as $k => $v) {
                $list[$key]['_child'][]=M('Type')->find($v);
            }
        }


        $this->tags_info=M('Type')->find($_GET['tags']);

        $this->page=$Page->show();
        $this->list=$list;
        $this->display();
    }


    public function news_detail(){
        $id=$_GET['id'];
        if($id){
            $row=M('News')->find($id);
            $row['time']=date('Y-m-d H:i:s', $row['time']);

            $this->row=$row;
            $this->display();
        }
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
        global $user;

        //四类
        $list_1=M('Type')->where(array('pid'=>1347))->select();
        foreach ($list_1 as $key => $value) {
            $list_1[$key]['_child']=M('Article')->where(array('type'=>$value['id']))->select();
        }
        //三资质
        $list_2=M('Type')->where(array('pid'=>1349))->select();
        foreach ($list_2 as $key => $value) {
            $list_2[$key]['_child']=M('Article')->where(array('type'=>$value['id']))->select();
        }

        $this->list_1=$list_1;
        $this->list_2=$list_2;

        //热名标签
        $this->hot_tags=M('Type')->where(array('pid'=>1404))->select();

        //热名城市
        $this->hot_province=M('Province')->limit(16)->select();

        
       
        // 右侧分类
        $province=M('Province')->select();
        $right_type_1=M('Type')->where(array('pid'=>1275))->select();
        $this->province=$province;
        $this->right_type_1=$right_type_1;
        $this->display();
    }

    public function baike_detail(){
        $type=M('Type')->where(array('pid'=>array('in',array('1347','1349'))))->select();
        foreach ($type as $key => $value) {
            $type[$key]['_child']=M('Article')->where(array('type'=>$value['id']))->select();
        }

        $id=$_GET['id'];
        if($id){
            $row=M('Article')->find($id);
            $row['time']=date('Y-m-d H:i:s', $row['time']);
        }

        //上一篇，下一篇
        $prev=M('Article')->where(array('type'=>$row['type'], 'id'=>array('gt', $row['id'])))->find();
        $next=M('Article')->where(array('type'=>$row['type'], 'id'=>array('lt', $row['id'])))->find();
        
        //相关文章
        $list=M('Article')->where(array('type'=>$row['type']))->select();

        $this->row=$row;
        $this->list=$list;
        $this->prev=$prev;
        $this->next=$next;
        $this->type=$type;
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