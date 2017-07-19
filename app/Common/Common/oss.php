<?php
    /**
     * 实例化阿里云oos
     * @return object 实例化得到的对象
     */
    function new_oss(){
        vendor('Alioss.autoload');
        $config=C('ALIOSS_CONFIG');
        $oss=new \OSS\OssClient($config['KEY_ID'],$config['KEY_SECRET'],$config['END_POINT']);
        return $oss;
    }
    /**
     * 上传文件到oss并删除本地文件
     * @param  string $path 文件路径
     * @return bollear      是否上传
     */
    function oss_upload($path){

        // 获取配置项
        $bucket=C('ALIOSS_CONFIG.BUCKET');

        // 先统一去除左侧的.或者/ 再添加./
        $oss_path=ltrim($path,'./');
        $path='./'.$oss_path;

        if (file_exists($path)) {
            // echo 1 ;die;
            // 实例化oss类
            $oss=new_oss();
            // 上传到oss
            $oss->uploadFile($bucket,$oss_path,$path);
            // 如需上传到oss后 自动删除本地的文件 则删除下面的注释
            // unlink($path);
            return true;
        }
        return false;
    }