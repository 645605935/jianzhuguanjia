<?php
namespace Admin\Controller;
use Common\Controller\AuthController;

class ConfigController extends AuthController {
    
    public function _initialize() {
        parent::_initialize();
        global $user;
        $user=session('auth');
        $this->user=$user;
        $this->cur_c='Config';
    }
    
    public function setting(){
        global $user;
        $this->user=$user;

        $config=cacheConfig();
        if(IS_POST){
            $d=D('Config');
            $data=$d->create();
            if($_FILES['logo']['size']>0){
                $img=eUpload(1,$_FILES['logo'],'config');
                $data['logo']   =$img['url'];
            }else{
                unset($data['logo']);
            }

            if($_FILES['logo_admin']['size']>0){
                $img=eUpload(1,$_FILES['logo_admin'],'config');
                $data['logo_admin']   =$img['url'];
            }else{
                unset($data['logo_admin']);
            }

            if($_FILES['ad_img']['size']>0){
                $img=eUpload(1,$_FILES['ad_img'],'config');
                $data['ad_img']   =$img['url'];
            }else{
                unset($data['ad_img']);
            }

            if($_FILES['wxpay_img']['size']>0){
                $img=eUpload(1,$_FILES['wxpay_img'],'config');
                $data['wxpay_img']   =$img['url'];
            }else{
                unset($data['wxpay_img']);
            }

            if($_FILES['alipay_img']['size']>0){
                $img=eUpload(1,$_FILES['alipay_img'],'config');
                $data['alipay_img']   =$img['url'];
            }else{
                unset($data['alipay_img']);
            }


            if($d->save($data)){
                cacheConfig(0);
                $this->success('修改成功');
            }else{
                $this->error('修改失败');
            }
        }else{
            $this->assign('config',$config);


            $this->assign('cur_c','Config');
            $this->assign('cur_v','setting');
            $this->cur_v='Config-setting';
            $this->display();
        }
    }





}