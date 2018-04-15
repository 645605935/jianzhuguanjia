<?php
namespace Common\Model;
use Think\Model\RelationModel;
class AutopriceModel extends RelationModel{
	protected $_link=array(
		'_user'=>array(
			'mapping_type'=>self::BELONGS_TO,
			'class_name'=>'User',
			'foreign_key'=>'uid',
			'as_fields' => 'truename:_truename',
		),
		'_type1'=>array(
			'mapping_type'=>self::BELONGS_TO,
			'class_name'=>'Type',
			'foreign_key'=>'type1',
			'as_fields' => 'title:type1',
		),
		'_type2'=>array(
			'mapping_type'=>self::BELONGS_TO,
			'class_name'=>'Type',
			'foreign_key'=>'type2',
			'as_fields' => 'title:type2',
		),
		'_type3'=>array(
			'mapping_type'=>self::BELONGS_TO,
			'class_name'=>'Type',
			'foreign_key'=>'type3',
			'as_fields' => 'title:type3',
		)
	);
}

?>