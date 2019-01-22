<?php
include '../config/connectionManager.php';
$info = $_POST['postInfo'];
$id = $info['id'];
$type = $info['type'];
$sql = "SELECT a.*,p.personal_username, p.personal_pic,r.* FROM express_arctile_picture_video_reply_info a, express_personal_info p ,express_arctile_picture_video_reply_reply_info r 
where a.arctile_id = '$id' and a.personal_id = p.personal_id and a.replay_type ='$type' or a.arctile_reply_id = r.arctile_reply_id";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);
$jarr = array();
while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i=0;$i<$count;$i++){  
        unset($rows[$i]);//删除冗余数据  
    }
	$rows["personal_pic"] =  $imgUrl.$rows["personal_username"].'/'.explode('|',$rows['personal_pic'])[0];
    array_push($jarr,$rows);
}
echo json_encode($jarr);


include '../config/closeConnection.php';
?>