<?php 
namespace Common\Model;
use Think\Model\RelationModel;

class UserModel extends RelationModel{
	//定义关联关系
	protected $_link=array(
		'auth_group'=>array(
			'mapping_type'=>self::BELONGS_TO,
			'class_name'=>'AuthGroup',
			'foreign_key'=>'gid',
			'as_fields' => 'title:_auth_group_title,id:_auth_group_id',
		),
		'_company_service_province'=>array(
			'mapping_type'=>self::BELONGS_TO,
			'class_name'=>'Province',
			'foreign_key'=>'company_service_province',
			'as_fields' => 'province:company_service_province',
		),
		'_company_service_city'=>array(
			'mapping_type'=>self::BELONGS_TO,
			'class_name'=>'City',
			'foreign_key'=>'company_service_city',
			'as_fields' => 'city:company_service_city',
		),
		'_company_size'=>array(
			'mapping_type'=>self::BELONGS_TO,
			'class_name'=>'Type',
			'foreign_key'=>'company_size',
			'as_fields' => 'title:company_size',
		),
		'_company_yewufanwei'=>array(
			'mapping_type'=>self::BELONGS_TO,
			'class_name'=>'Type',
			'foreign_key'=>'company_yewufanwei',
			'as_fields' => 'title:company_yewufanwei',
		)
		
	);

}