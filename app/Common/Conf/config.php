<?php
return array(

	'DOMAIN'=>$_SERVER['SERVER_NAME'],
	'DOMAIN_URL'=>'http://'.$_SERVER['HTTP_HOST'].substr($_SERVER['PHP_SELF'],0,strrpos($_SERVER['PHP_SELF'],'/')+1),
	'URL_HTML_SUFFIX'=>'html',	//伪静态后缀
	'URL_MODEL'  => 3,		    //URL模式：0 :普通模式 1 :PATHINFO 2 :REWRITE 3 :兼容模式
	'URL_PATHINFO_DEPR'=>'/',

	/********************************************伪静态路径配置**************************************/
	'URL_CASE_INSENSITIVE' =>true,// 默认false 表示URL区分大小写 true则表示不区分大小写

	//tp升级
	'LIST_ROWS'=>100,//后台数据每页显示记录数
	'VIP_LIST_ROWS'=>10,  
	'DB_TYPE'   => 'mysql', 	// 数据库类型

	'DB_HOST'   => '103.224.83.152', // 服务器地址
	'DB_NAME'   => 'jianzhuguanjia',// 数据库名
	'DB_USER'   => 'jianzhuguanjia',		// 用户名
	'DB_PWD'    => 'jianzhuguanjia', 			// 密码
	'DB_PORT'   => '3306', 		// 端口
	'DB_PREFIX' => 'ez_', 		// 数据库表前缀
	'DEFAULT_MODULE'=>'Home', 

	/* nm数据库1 配置 */
	'DB_CONFIG1'  =>array(
    	'DB_TYPE' 	=> 'mysql', 
    	'DB_HOST' 	=> 'db..net',
    	'DB_NAME'   => 'baidulab_wx',	
    	'DB_USER' 	=> '', 
   		'DB_PWD' 	=> 'testuser01',
    	'DB_PORT'   => '3306',
        'DB_PREFIX' => 'tp_',
	),


	/* SESSION 和 COOKIE 配置 */
	'SESSION_PREFIX'=>'ez_',
	'COOKIE_PATH'=> '/',
	'DB_BACKUP'=>  '/',
	'COOKIE_PREFIX'=>'ez_',

	/* 模版 配置 */
	'TMPL_PARSE_STRING'  =>array(
    	'__PUBLIC__' 	=> __ROOT__ .'/Public', 	// 更改默认的/Public 替换规则
    	'__MOBILE__' 	=> __ROOT__ .'/Public/Mobile', 	// 更改默认的/Public 替换规则
   		'__JS__' 		=> __ROOT__ .'/Public/js',// 增加新的JS类库路径替换规则
    	'__UPLOAD__' 	=> __ROOT__ .'/Uploads', 	// 增加新的上传路径替换规则
    	'__STATIC__' => __ROOT__ . '/Public/static',
        '__ADDONS__' => __ROOT__ . '/Addons',
        '__IMG__'    => __ROOT__ . '/Public/' . MODULE_NAME . '/images',
        '__CSS__'    => __ROOT__ . '/Public/' . MODULE_NAME . '/css',
        '__JS__'     => __ROOT__ . '/Public/' . MODULE_NAME . '/js',
	),

	/* 加密 配置 */
	'DATA_AUTH_KEY'=>'lkjhgfdsa', //默认数据加密KEY
	'INVITE_CODE_KEY'=>'6515916',//默认邀请码加密KEY
	'ACCOUNT_SIGN_KEY'=>'sss2617727',//
	'ACCOUNT_TOKEN_KEY'=>'ttt2617727',//

	/* 分页相关配置 */
	'VAR_PAGE'        =>  'p',
	'PAGE'=>array(
		'theme'=>'%upPage% %linkPage% %downPage% %ajax%'
	),

	/* 自动加载相关配置 */
	'TAGLIB_PRE_LOAD'    =>    '',

	/* 权限相关配置 */
	'USER_AUTH_ON' => true,
	'USER_AUTH_TYPE' => 2,
	'USER_AUTH_KEY' => 'authId',
	'ADMIN_AUTH_KEY' => 'administrator',
	'USER_AUTH_MODEL' => 'User',
	'AUTH_PWD_ENCODER' => 'md5',
	'USER_AUTH_GATEWAY' => '/Admin/Login/index',
	'NOT_AUTH_MODULE' => 'Login,Public',
	'REQUIRE_AUTH_MODULE' => '',
	'NOT_AUTH_ACTION' => '',
	'REQUIRE_AUTH_ACTION' => '',
	'GUEST_AUTH_ON' => false,
	'GUEST_AUTH_ID' => 0,
	'RBAC_ROLE_TABLE' => 'ez_role',
	'RBAC_USER_TABLE' => 'ez_role_user',
	'RBAC_ACCESS_TABLE' => 'ez_access',
	'RBAC_NODE_TABLE' => 'ez_node',
	'SPECIAL_USER' => 'admin',


	//阿里OSS配置
	//https://baijunyao.com/article/68
    'ALIOSS_CONFIG'          => array(
        'KEY_ID'             => 'LTAIXRc7hr6QkgCM', // 阿里云oss key_id
        'KEY_SECRET'         => 'Mmt3QK2Kp005IpWGduA00ejN0bEeOD', // 阿里云oss key_secret
        'END_POINT'          => 'oss-cn-beijing.aliyuncs.com', // 阿里云oss endpoint
        'BUCKET'             => 'zhangtengrui'  // bucken 名称
    ),



    //腾讯QQ登录配置
	'THINK_SDK_QQ' => array(
		'APP_KEY' => '101403635', //应用注册成功后分配的 APP ID
		'APP_SECRET' => '87b6d5cdb642cf804cd6b7ff2091a3eb', //应用注册成功后分配的KEY
		'CALLBACK' => 'http://ek.zhangtengrui.com/index.php?s=/Home/Index/callback.html&type=qq',
	),

);

?>

