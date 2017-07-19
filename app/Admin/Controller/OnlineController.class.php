<?php
namespace Admin\Controller;
use Common\Controller\AuthController;

class OnlineController extends AuthController {
    
    public function _initialize() {
        parent::_initialize();
        global $user;
        $user=session('auth');
        $this->user=$user;
        $this->cur_c='Tender';

        if($_POST){
            $this->_POST=$_POST;
        }
    }

    public function index(){
        global $user;

        $this->cur_v='Online-index';
        $this->display();
    }

   

}