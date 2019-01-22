<?php
include '../config/connectionManager.php';
$id = $_POST['postInfo'];

$sql = "SELECT c.* ,a.* ,p.*,v.*,u.* FROM express_collection_info c,express_picture_info p,express_video_info v,express_arctile_info a,express_personal_info u WHERE c.collection_type_id = a.arctile_id and c.collection_type = a.resource_type or c.collection_type_id = p.picture_id and c.collection_type = p.resource_type or c.collection_type_id = v.video_id and c.collection_type = v.resource_type and c.collection_personal_id = '$id'";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);
$jarr = array();

while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
	 
	if($rows["resource_type"] == "arctile"){
	  $rows["arctile_content"] = mb_substr(strip_tags($rows["arctile_content"]), 0, 170,'utf-8').'...';
		if($rows['resource_url']!== ''){
		  $rows['resource_url'] = $imgUrl.$rows["personal_username"].'/'.explode('|',$rows['resource_url'])[0];
		}
	}
	if($rows["resource_type"] == "picture" && $rows["resource_url"] != ""){
		$rows["arctile_content"] = mb_substr(strip_tags($rows["arctile_content"]), 0, 170,'utf-8').'...';
	  $rows['resource_url'] = $imgUrl.$rows["personal_username"].'/'.explode('|',$rows['resource_url'])[0];
	}
  if($rows["resource_type"] == "video"){
		$rows["arctile_content"] = mb_substr(strip_tags($rows["arctile_content"]), 0, 20,'utf-8').'...';
	   $rows['resource_url'] = $videoUrl.$rows["personal_username"].'/'.explode('|',$rows['resource_url'])[0];
	}
    array_push($jarr,$rows);
}

echo json_encode($jarr);//将数组进行json编码

include '../config/closeConnection.php';
?>