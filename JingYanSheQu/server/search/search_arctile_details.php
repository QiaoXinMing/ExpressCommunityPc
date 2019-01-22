<?php
include '../config/connectionManager.php';
$id= $_POST['postInfo'];
$sql = "SELECT a.*,p.personal_username, p.personal_pic,p.personal_qr, p.personal_attention, p.personal_attentioned FROM express_arctile_info a, express_personal_info p where arctile_id = '$id' and a.personal_id = p.personal_id";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);
$jarr = array();

while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
	$rows['resource_url'] = explode("|",$rows['resource_url']);
	$rows['personal_pic'] = $imgUrl.$rows["personal_username"].'/'.$rows["personal_pic"];
	$rows['arctile_content'] = explode("JingYanSheQu",$rows['arctile_content']);
	$count=count($rows['resource_url']);//不能在循环语句中，由于每次删除 row数组长度都减小 
	
    for($i=0;$i<$count-1;$i++){  
	   $rows['arctile_content'][$i] =  $rows['arctile_content'][$i]."<img src=".$imgUrl.$rows["personal_username"].'/'.$rows['resource_url'][$i].">";
    }
	array_push($jarr,$rows);
}


echo json_encode($jarr[0]);//将数组进行json编码
die;
$num =  $jarr[0]['arctile_looked'];
$num+=1;
$insertsql = "UPDATE express_arctile_info SET arctile_looked='$num' WHERE arctile_id = $id";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $insertsql);

include '../config/closeConnection.php';
?>