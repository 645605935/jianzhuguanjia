<?php
namespace Common\Model;
use Think\Model\RelationModel;
class TeamModel extends RelationModel{
	protected $_link=array(
		'_user'=>array(
			'mapping_type'=>self::BELONGS_TO,
			'class_name'=>'User',
			'foreign_key'=>'uid',
			'as_fields' => 'truename:truename',
		),
		'_chongyejingyan'=>array(
			'mapping_type'=>self::BELONGS_TO,
			'class_name'=>'Type',
			'foreign_key'=>'chongyejingyan',
			'as_fields' => 'title:chongyejingyan',
		)
	);
}

?>