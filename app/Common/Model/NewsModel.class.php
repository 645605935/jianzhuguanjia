<?php
namespace Common\Model;
use Think\Model\RelationModel;
class NewsModel extends RelationModel{
	protected $_link=array(
		'_type'=>array(
			'mapping_type'=>self::BELONGS_TO,
			'class_name'=>'Type',
			'foreign_key'=>'type',
			'as_fields' => 'title:_type',
		)
	);
}

?>