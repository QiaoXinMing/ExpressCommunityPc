<?php
include '../config/connectionManager.php';
 
$info = $_POST['postInfo'];
$type = $info['type'];
$subType = $info['subNavTitle'];
$pictureNavId = $info['subNavId'];
$title = $info['title'];
$num = $info['num'];
$userId = $info['userId'];
$userName = $info['userName'];
$publishTime = $info['publishTime'];
$pictureList = $info['uploadImages'];
$path = "../../images/".$userName.'/';
$imgStr = "";
$conStr = "";

echo $userName;  // 证明前端传过来的数据在PHP接收的时候是乱码的这个问题怎么整呢  

for($i = 0; $i < count($pictureList) ;$i++){
  $imageName = "JingYanSheQu_".$userName."_".$i."_".date('Y-m-d').".".$pictureList[$i]['picType'];
  if (strstr($pictureList[$i]['pictureSrc'],",")){
	$pictureList[$i]['pictureSrc'] = explode(',',$pictureList[$i]['pictureSrc']);
	$pictureList[$i]['pictureSrc'] = $pictureList[$i]['pictureSrc'][1];
   }
	  
   if (!is_dir(iconv("utf-8","gbk",$path))){ //判断目录是否存在 不存在就创建
		mkdir(iconv("utf-8","gbk",$path),777,true);
   }else{
	$r = file_put_contents(iconv("utf-8","gbk",$path.$imageName), base64_decode($pictureList[$i]['pictureSrc']));//返回的是字节数   	
	}

   $r = file_put_contents(iconv("utf-8","gbk",$path.$imageName), base64_decode($pictureList[$i]['pictureSrc']));//返回的是字节数   

	if (!$r) {
       echo "create image faild";
	}
	$imgStr.=$imageName.'|';	//图片名字加上|
	$conStr.=$pictureList[$i]['description'].'|';	//图片内容加上|
}

//获取的是指定的数组元素所以一个值
$sql = "insert into express_picture_info (picture_classfiy,picture_title,picture_num,picture_content,resource_url,picture_publishTime,express_preview_time,picture_nav_id,personal_id,resource_type)
values('$subType','$title','$num','$conStr','$imgStr','$publishTime','','$pictureNavId','$userId','$type'); ";

mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);

if(!$result){
  die("failed");
}

include '../config/closeConnection.php';
?>