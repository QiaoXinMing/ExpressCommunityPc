<?php

include '../config/connectionManager.php';
$info = $_POST['postInfo'];
$type = $info['type'];
$infoId = $info['infoId'];
$userId = $info['userId'];
$time = $info['time'];
$num = null;
$sql = "insert into express_collection_info (collection_type,collection_type_id,collection_personal_id,collection_publishTime) values ('$type ','$infoId','$userId','$time')";
echo $sql;
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);

if(!$result){
  die("insert data failed:");
}
if($type == "picture"){
	$pictureSql = "SELECT p.picture_collection FROM express_picture_info v where picture_id = '$infoId ' ";
	
	mysqli_query($link , "set names utf8");
	
	$result = mysqli_query($link, $pictureSql);
	
	
	
	while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
	
	    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
	
	    for($i=0;$i<$count;$i++){  
	
	        unset($rows[$i]);//删除冗余数据
	
	    }
	
		$num = $rows['video_collection'];
	
	}
	
	$num +=1 ;
	
	
	
	$collection = "update express_picture_info set picture_collection = '$num' where picture_id = '$infoId' ";
	
	
	
	 mysqli_query($link , "set names utf8");
	
	 $res = mysqli_query($link, $collection);
}else if($type == 'video'){
$videoSql = "SELECT v.video_collection FROM express_video_info v where video_id = '$infoId ' ";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $videoSql);

while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i=0;$i<$count;$i++){  
        unset($rows[$i]);//删除冗余数据
    }
	$num = $rows['video_collection'];
}
$num +=1 ;

$collection = "update express_video_info set video_collection = '$num' where video_id = '$infoId' ";

 mysqli_query($link , "set names utf8");
 $res = mysqli_query($link, $collection);
}else{
  $videoSql = "SELECT a.arctile_collection FROM express_arctile_info a where arctile_id = '$infoId' ";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $videoSql);

while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i=0;$i<$count;$i++){  
        unset($rows[$i]);//删除冗余数据
    }
	$num = $rows['arctile_collection'];
}
$num +=1 ;

$collection = "update express_arctile_info set arctile_collection = '$num' where arctile_id = '$infoId' ";

 mysqli_query($link , "set names utf8");
 $res = mysqli_query($link, $collection);
}
if(!$res){
  die("insert failed:");
}else{
  echo "success  collection";
}
include '../config/closeConnection.php';
?>