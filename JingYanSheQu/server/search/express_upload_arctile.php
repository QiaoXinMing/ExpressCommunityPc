<?php
include '../config/connectionManager.php';
	
$info = $_POST['postInfo'];
$type = $info['type'];
$primayNav = $info['primayNav'];
$subNavTitle = $info['subNavTitle'];
$arctileNavId = $info['subNavId'];
$title = $info['title'];
$container = $info['container'];
$userId = $info['userId'];
$userName = $info['userName'];
$publishTime = $info['publishTime'];
$imgStr = "";
$numPicture = 0;
$numId = null;


if($info['imgArrListInfo']){
	$arrImgList = array();
	$path = "../../images/".$userName.'/';
	$numPicture = count($info['imgArrListInfo']);
	for($i=0 ;$i<$numPicture;$i++){
		$imageName = "JingYanSheQu_".$userName."_".$i."_".date('Y-m-d').".".$info['imgArrListInfo'][$i]['type'];
	
	if (!is_dir($path)){ //判断目录是否存在 不存在就创建
	mkdir(iconv("utf-8","gbk",$path),777,true);
	}
	array_push($arrImgList,$imageName);
	$r = file_put_contents($path.$imageName, base64_decode(explode(',',$info['imgArrListInfo'][$i]['img'])[1]));//返回的是字节数
	if (!$r) {
			echo "create image file failed";
	}
	$imgStr.=$arrImgList[$i].'|';	//数组每个元素加上|
	}
}

$sql = "insert into express_arctile_info (arctile_classfiy,arctile_title,arctile_content,express_preview_time,resource_url,picture_num,arctile_looked,arctile_reply,arctile_forward,arctile_collection,arctile_publishTime,arctile_nav_id,personal_id,resource_type) values('$subNavTitle','$title','$container','00:00:00','$imgStr','$numPicture','0','0','0','0','$publishTime','$arctileNavId','$userId','$type')";
mysqli_query($link , "set names utf8");
mysqli_query($link, $sql);

$sq = "SELECT @@IDENTITY as id";
mysqli_query($link , "set names utf8");
$res = mysqli_query($link, $sq);

while ($rows=mysqli_fetch_array($res,MYSQL_ASSOC)){
   $count=count($rows);
   $numId = $rows['id'];
}
echo $numId;
 
include '../config/closeConnection.php';
?>