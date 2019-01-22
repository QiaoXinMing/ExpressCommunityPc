<?php
include '../config/connectionManager.php';

$sql = "select p.picture_title, p.resource_url, p.picture_content, per.personal_id , per.personal_username from express_picture_info p , express_personal_info per where p.picture_nav_id ='12' order by p.picture_looked desc LIMIT 5";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);
$funnyBannerList = array();
while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i=0;$i<$count;$i++){  
        unset($rows[$i]);//删除冗余数据  
    }
	
	$rows["resource_url"] =  $imgUrl.$rows["personal_username"].'/'.explode('|',$rows['resource_url'])[0];
	if($rows["picture_content"] !== ""){
      $rows["picture_content"] = mb_substr(strip_tags($rows["picture_content"]), 0, 35,'utf-8').'...';   
	}
	
    array_push($funnyBannerList,$rows);
}

echo json_encode($funnyBannerList);//将数组进行json编码


include '../config/closeConnection.php';
?>