<?php
include '../config/connectionManager.php';
$id=$_POST['postInfo'];
$sql = "SELECT v.video_id, v.video_title,v.resource_url,v.video_time,v.video_collection,v.video_forward,v.personal_id,v.resource_type, p.personal_username, p.personal_pic,p.personal_qr, p.personal_attention, p.personal_attentioned FROM express_video_info v,express_personal_info p where video_id = '$id' and v.personal_id = p.personal_id";

mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);
$jarr = array();
while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i=0;$i<$count;$i++){  
        unset($rows[$i]);//删除冗余数据
    }
	$rows['personal_pic'] = $imgUrl.$rows["personal_username"].'/'.$rows["personal_pic"];
	$rows['resource_url'] = $videoUrl.$rows["personal_username"].'/'.explode('|',$rows['resource_url'])[0];
    array_push($jarr,$rows);
}

echo json_encode($jarr[0]);//将数组进行json编码

include '../config/closeConnection.php';
?>