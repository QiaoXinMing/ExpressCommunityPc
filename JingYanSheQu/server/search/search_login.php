<?php
include '../config/connectionManager.php';
$username = $_POST['postInfo'];
$sql = "SELECT * FROM express_personal_info WHERE personal_username = '$username' ";
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
echo json_encode($jarr);
/*
vue登陆判断
https://www.jianshu.com/p/1210a281b40f
*/

include '../config/closeConnection.php';
?>