<?php
include '../config/connectionManager.php';

$sql = "SELECT v.video_id,v.video_classfiy ,v.video_title,v.video_time,v.video_content,v.video_looked ,v.video_reply ,v.video_forward,v.video_preview_pic,v.video_collection,v.video_collection,v.video_publishTime, p.personal_username FROM express_video_info v,express_personal_info p";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);
$jarr = array();
while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i=0;$i<$count;$i++){  
        unset($rows[$i]);//删除冗余数据
    }
	$rows['video_preview_pic'] = $imgUrl.$rows["personal_username"].'/'.explode('|',$rows['video_preview_pic'])[0];
    array_push($jarr,$rows);
}

echo json_encode($jarr);//将数组进行json编码

include '../config/closeConnection.php';
?>