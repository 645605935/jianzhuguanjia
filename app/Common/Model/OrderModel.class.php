<?php
namespace Common\Model;
use Think\Model\RelationModel;
class OrderModel extends RelationModel{
	protected $_link=array(
		'_type_1'=>array(
			'mapping_type'=>self::BELONGS_TO,
			'class_name'=>'Type',
			'foreign_key'=>'type_1',
			'as_fields' => 'title:type_1',
		),
		'_type_2'=>array(
			'mapping_type'=>self::BELONGS_TO,
			'class_name'=>'Type',
			'foreign_key'=>'type_2',
			'as_fields' => 'title:type_2',
		),
		'_type_3'=>array(
			'mapping_type'=>self::BELONGS_TO,
			'class_name'=>'Type',
			'foreign_key'=>'type_3',
			'as_fields' => 'title:type_3',
		)
	);
}

?>