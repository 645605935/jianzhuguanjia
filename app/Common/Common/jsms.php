<?php
    //极光推送【短信验证码】

    //发送验证码
    function send_code($phone){
        Vendor('Jsms.JSMS');

        $appKey = '41c3266d1a8953464dd025c3';
        $masterSecret = '7e0e7797b7a9616208c8d60f';
        $phone = $phone;

        // 禁用 SSL 证书的验证，
        $client = new \JiGuang\JSMS($appKey, $masterSecret, [ 'ssl_verify' => false ]);

        $response = $client->sendCode($phone, 1);
        return $response;
    }

    //发送模板短信
    function send_message($phone){
        Vendor('Jsms.JSMS');

        $appKey = '41c3266d1a8953464dd025c3';
        $masterSecret = '7e0e7797b7a9616208c8d60f';
        $phone = $phone;

        # 这里的 $temp_id 和 $temp_para 的值需要到 "极光控制台 -> 短信验证码 -> 模板管理" 里面获取
        $temp_id = '6666';
        $temp_para = ['test' => 'jiguang'];

        $client = new \JiGuang\JSMS($appKey, $masterSecret, [ 'ssl_verify' => false ]);
        $response = $client->sendMessage($phone, $temp_id, $temp_para);

        print_r($response);
    }

    //发送语音短信验证码
    function send_voice_code($phone){
        Vendor('Jsms.JSMS');

        $appKey = 'xxxx';
        $masterSecret = 'xxxx';
        $phone = 'xxxxxxxxxxx';

        $client = new \JiGuang\JSMS($appKey, $masterSecret, [ 'ssl_verify' => false ]);
        $response = $client->sendVoiceCode($phone);

        print_r($response);
    }




    //验证
    function check_code($msg_id, $code){
        Vendor('Jsms.JSMS');

        $appKey = '41c3266d1a8953464dd025c3';
        $masterSecret = '7e0e7797b7a9616208c8d60f';
        $msg_id = $msg_id;
        $code = $code;

        $client = new \JiGuang\JSMS($appKey, $masterSecret, [ 'ssl_verify' => false ]);
        $response = $client->checkCode($msg_id, $code);

        return $response;
    }

  

    