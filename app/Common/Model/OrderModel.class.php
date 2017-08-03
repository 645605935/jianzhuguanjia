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
		),
		'_province'=>array(
			'mapping_type'=>self::BELONGS_TO,
			'class_name'=>'Province',
			'foreign_key'=>'province',
			'as_fields' => 'province:province',
		),
		'_city'=>array(
			'mapping_type'=>self::BELONGS_TO,
			'class_name'=>'City',
			'foreign_key'=>'city',
			'as_fields' => 'city:city',
		)
	);
}

?>