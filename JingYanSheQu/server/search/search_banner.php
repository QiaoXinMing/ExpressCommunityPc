<?php
include '../config/connectionManager.php';

$sql = "SELECT title,resource_url FROM express_nav_info where title='经验社区网站banner图信息'";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);
$eg = array();
$bannerList = array();
$navArray = array();
while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
	$count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小 
      for($i=0;$i<count(explode('|',$rows['resource_url']))-1;$i++){
	    array_push($navArray,$imgUrl.'webSite/'.explode('|',$rows['resource_url'])[$i]);
	  }
}

echo json_encode($navArray);

include '../config/closeConnection.php';
?>