<?php
include '../config/connectionManager.php';

$id = $_POST['postInfo'];
$sql = "SELECT pic.picture_id ,pic.picture_classfiy ,pic.picture_title,pic.picture_content ,pic.resource_url ,pic.picture_looked ,pic.picture_reply ,pic.picture_forward,pic.picture_collection,pic.picture_collection ,pic.picture_publishTime,p.personal_id,p.personal_username, p.personal_pic,p.personal_qr, p.personal_attention, p.personal_attentioned FROM express_picture_info pic,express_personal_info p where pic.picture_id = '$id' and p.personal_id = pic.personal_id";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);
$jarr = array();
$picList = array();
$conArr = array();
while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i=0;$i<$count;$i++){  
        unset($rows[$i]);//删除冗余数据  
    }
	for($i = 0; $i < count(explode('|',$rows['resource_url']))-1 ;$i++){
		array_push($conArr,explode('JingYanSheQu',$rows["picture_content"])[$i+1]);
		array_push($picList,$imgUrl.$rows["personal_username"].'/'.explode('|',$rows['resource_url'])[$i]);
	}
	$rows["picture_content"] = $conArr;
	$rows["personal_pic"] = $imgUrl.$rows["personal_username"].'/'.$rows["personal_pic"];
    $rows['resource_url'] = $picList;
    array_push($jarr,$rows);
}

 echo json_encode($jarr[0]);//将数组进行json编码

include '../config/closeConnection.php';
?>