<?php
include '../config/connectionManager.php';

$sql = "select a.arctile_id, a.arctile_title, a.arctile_content from express_arctile_info a order by arctile_looked desc LIMIT 4";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);
$hotData = array();
while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i=0;$i<$count;$i++){  
        unset($rows[$i]);//删除冗余数据  
    }
    $rows["arctile_content"] = mb_substr(strip_tags($rows["arctile_content"]), 0, 62,'utf-8').'...';
    array_push($hotData,$rows);
}
 echo json_encode($hotData);

include '../config/closeConnection.php';
?>