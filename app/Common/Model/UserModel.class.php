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
		'province'=>array(
			'mapping_type'=>self::BELONGS_TO,
			'class_name'=>'Province',
			'foreign_key'=>'company_province',
			'as_fields' => 'province:_province_name',
		),
		'city'=>array(
			'mapping_type'=>self::BELONGS_TO,
			'class_name'=>'City',
			'foreign_key'=>'company_city',
			'as_fields' => 'city:_city_name',
		)
	);

}