<?php
namespace Common\Model;
use Think\Model\RelationModel;

class TenderModel extends RelationModel{
	protected $_link=array(
		'_user'=>array(
			'mapping_type'=>self::BELONGS_TO,
			'class_name'=>'User',
			'foreign_key'=>'uid',
			'as_fields' => 'truename:_truename',
		)
	);
}

?>