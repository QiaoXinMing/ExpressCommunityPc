<?php
include '../config/connectionManager.php';
$info=$_POST["postInfo"];
 
$id = $info['id'];
$type = $info['type'];
if($type=="arctile"){
	$sql = "delete FROM express_arctile_info WHERE arctile_id='$id'  and resource_type='$type' ";
}else if($type=="picture"){
	$sql = "delete FROM express_picture_info WHERE picture_id='$id' ";
}else if($type=="question"){
	$sql = "delete FROM express_question_answer_info WHERE arctile_id='$id' ";
}else if($type=="answer"){
	$sql = "delete FROM express_question_answer_info WHERE arctile_id='$id' ";
}else if($type=="message"){
	$sql = "delete FROM express_personal_message WHERE arctile_reply_id='$id' ";
}else if($type=="drafts"){
	$sql = "delete FROM express_arctile_info WHERE arctile_id='$id' and resource_type='$type' ";
}else if($type=="video"){
	$sql = "delete FROM express_video_info WHERE video_id='$id' ";
}else{
    $sql = "delete FROM express_collection_info WHERE express_collection_id='$id' ";	
}

mysqli_query($link , "set names utf8");
mysqli_query($link, $sql);

include '../config/closeConnection.php';
?>