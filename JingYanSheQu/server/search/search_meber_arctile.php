<?php
include '../config/connectionManager.php';

$sql = "SELECT a.arctile_title,a.arctile_content,a.arctile_publishTime,p.personal_pic,p.personal_username FROM express_arctile_info a,express_personal_info p WHERE a.personal_id = p.personal_id and p.personal_meber_id = 2 order by a.arctile_publishTime desc LIMIT 1";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);
$meberList = array();
while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i=0;$i<$count;$i++){  
        unset($rows[$i]);//删除冗余数据  
    }
	$rows['personal_pic'] = $imgUrl.$rows["personal_username"].'/'.explode('|',$rows['personal_pic'])[0];
	$rows["arctile_content"] = mb_substr(strip_tags($rows["arctile_content"]), 0, 25,'utf-8').'...';
    array_push($meberList,$rows);
}

echo json_encode($meberList);//将数组进行json编码

include '../config/closeConnection.php';
?>