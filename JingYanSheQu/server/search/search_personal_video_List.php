<?php
include '../config/connectionManager.php';
$id=$_POST['postInfo'];
$sql = "SELECT * FROM express_video_info pic,express_personal_info p where pic.personal_id = '$id' ";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);
$jarr = array();
while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i=0;$i<$count;$i++){  
        unset($rows[$i]);//删除冗余数据  
    }
	$rows['personal_pic'] = $imgUrl.$rows["personal_username"].'/'.explode('|',$rows['personal_pic'])[0];
	$rows['video_preview_pic'] = $imgUrl.$rows["personal_username"].'/'.explode('|',$rows['video_preview_pic'])[0];
	$rows['resource_url'] = $imgUrl.$rows["personal_username"].'/'.explode('|',$rows['resource_url'])[0];
    array_push($jarr,$rows);
}

echo json_encode($jarr);//将数组进行json编码

include '../config/closeConnection.php';
?>