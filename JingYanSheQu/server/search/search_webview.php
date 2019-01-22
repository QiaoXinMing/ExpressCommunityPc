 <?php
include '../config/connectionManager.php';

$sql = "SELECT pageview FROM express_webview_info";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);
$jarr = array();
while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
    $count=count($rows);
    for($i=0;$i<$count;$i++){  
        unset($rows[$i]);//删除冗余数据  
    }
    array_push($jarr,$rows);
}


$num =  $jarr[0]['pageview'];
$num+=1;
$insertsql = "UPDATE express_webview_info SET pageview='$num' WHERE viewid = 1";
mysqli_query($link,$insertsql);
echo json_encode($num);
include '../config/closeConnection.php';
?>
  