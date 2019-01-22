<?php
include '../config/connectionManager.php';

$sql = "SELECT p.picture_id,p.picture_title ,p.resource_url,per.personal_username FROM express_picture_info p ,express_personal_info per order by picture_forward desc limit 9";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);
$InvitationPictureList = array();
while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i=0;$i<$count;$i++){  
        unset($rows[$i]);//删除冗余数据  
    }
    $rows['resource_url'] = $imgUrl.$rows["personal_username"].'/'.explode('|',$rows['resource_url'])[0];
    array_push($InvitationPictureList,$rows);
}

echo json_encode($InvitationPictureList);//将数组进行json编码

include '../config/closeConnection.php';
?>