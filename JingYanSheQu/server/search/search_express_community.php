<?php
include '../config/connectionManager.php';
$info = $_POST['postInfo'];
$sql = "SELECT * FROM express_arctile_info WHERE arctile_title like '%$info%' ";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);
$arctileList = array();
while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i=0;$i<$count;$i++){  
        unset($rows[$i]);//删除冗余数据  
    }
	if($rows["resource_url"] != ""){
      $rows["resource_url"] =  $imgUrl.$rows["personal_username"].'/'.explode('|',$rows['resource_url'])[0];
	}
	$rows["arctile_content"] = mb_substr(strip_tags($rows["arctile_content"]), 0, 170,'utf-8').'...';
	
    array_push($arctileList,$rows);
}

echo json_encode($arctileList);//将数组进行json编码


include '../config/closeConnection.php';
?>