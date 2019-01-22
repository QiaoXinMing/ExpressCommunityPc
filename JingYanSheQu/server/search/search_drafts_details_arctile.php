<?php
include '../config/connectionManager.php';
$id= $_POST['postInfo'];
$sql = "SELECT a.*,p.personal_username, p.personal_pic,p.personal_qr, p.personal_attention, p.personal_attentioned FROM express_arctile_info a, express_personal_info p where arctile_id = '$id' and a.personal_id = p.personal_id and resource_type='drafts'";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);
$jarr = array();
while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i=0;$i<$count;$i++){  
        unset($rows[$i]);//删除冗余数据  
    }
	$rows['personal_pic'] = $imgUrl.$rows["personal_username"].'/'.$rows["personal_pic"];
    array_push($jarr,$rows);
}

echo json_encode($jarr[0]);//将数组进行json编码

include '../config/closeConnection.php';
?>