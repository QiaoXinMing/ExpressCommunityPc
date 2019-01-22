<?php
include '../config/connectionManager.php';

$sql = "SELECT id,title,url,resource_url FROM express_nav_info";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);
$jarr = array();
while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i=0;$i<$count;$i++){
        unset($rows[$i]);//删除冗余数据  
    }
    array_push($jarr,$rows);
}

echo json_encode($jarr);//将数组进行json编码
include '../config/closeConnection.php';
?>