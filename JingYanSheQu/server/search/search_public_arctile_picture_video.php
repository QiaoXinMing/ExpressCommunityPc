<?php
include '../config/connectionManager.php';
$id=$_POST['postInfo'];

$sql = "(SELECT a.arctile_id,a.arctile_classfiy, a.arctile_title, a.resource_url, a.arctile_content,a.arctile_looked, a.arctile_reply, a.arctile_forward,a.arctile_collection,a.arctile_publishTime,a.resource_type, p.personal_username FROM express_arctile_info a ,express_personal_info p where arctile_nav_id=' $id')union all (SELECT  pic.picture_id,pic.picture_classfiy,pic.picture_title,pic.resource_url,pic.picture_content,pic.picture_looked, pic.picture_reply, pic.picture_forward, pic.picture_collection, pic.picture_publishTime,pic.resource_type, p.personal_username FROM express_picture_info pic,express_personal_info p where picture_nav_id=' $id' )union all(SELECT v.video_id, v.video_classfiy, v.video_title,v.video_preview_pic,v.resource_url,v.video_looked, v.video_reply, v.video_forward, v.video_collection, v.video_publishTime, v.resource_type, p.personal_username FROM express_video_info v,express_personal_info p where video_nav_id=' $id')";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);
$jarr = array();
while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i=0;$i<$count;$i++){  
        unset($rows[$i]);//删除冗余数据  
    }
	if($rows["resource_type"] == "arctile"){
	  $rows["arctile_content"] = mb_substr(strip_tags($rows["arctile_content"]), 0, 170,'utf-8').'...';
		if($rows['resource_url'] !=='' ){
			$rows['resource_url'] = $imgUrl.$rows["personal_username"].'/'.explode('|',$rows['resource_url'])[0];
		}
	}
	if($rows["resource_type"] == "picture" && $rows["resource_url"] != ""){
		$rows["arctile_content"] = mb_substr(strip_tags($rows["arctile_content"]), 0, 170,'utf-8').'...';
	  $rows['resource_url'] = $imgUrl.$rows["personal_username"].'/'.explode('|',$rows['resource_url'])[0];
	}
    if($rows["resource_type"] == "video"){
      $rows['arctile_content'] = $videoUrl.$rows["personal_username"].'/'.explode('|',$rows['arctile_content'])[0];
	  $rows['resource_url'] = $imgUrl.$rows["personal_username"].'/'.explode('|',$rows['resource_url'])[0];
	}
	
    array_push($jarr,$rows);
}

echo json_encode($jarr);//将数组进行json编码

include '../config/closeConnection.php';
?>