<?php

include '../config/connectionManager.php';
$info = $_POST['postInfo'];
$type = $info["type"];
$username = $info["username"];
$password = $info["password"];
$regTime = $info["registerTime"];



if($type == "username"){
  $sql = "INSERT INTO express_personal_info(personal_email_name, personal_phoneNum, personal_username,personal_password,personal_pic,personal_qr,personal_introduction, personal_attention,personal_attentioned,personal_arctile,personal_picture,personal_video,personal_register_time,personal_jyb,personal_meber_id) VALUES (
'','','$username','$password','','','个人简介信息','0','0','0','0','0','$regTime','0','2'
); ";
}
if($type == "email"){
   $sql = "insert into express_personal_info (personal_email_name,personal_password,personal_register_time,personal_meber_id) values ('$username','$password','个人简介信息','$regTime','2'); ";
}
if($type == "phone"){
   $sql = "insert into express_personal_info (personal_phoneNum,personal_password,personal_register_time,personal_meber_id) values ('$username','$password','个人简介信息','$regTime','2'); ";
}
echo $sql;

mysqli_query($link , "set names utf8");
mysqli_query($link, $sql);


  $img = "../../images/".$username;
  $video = "../../videos/".$username;

 mkdir(iconv("UTF-8", "gbk", $img),0777,true);
 mkdir(iconv("UTF-8", "gbk", $video),0777,true);
    

echo "success";

include '../config/closeConnection.php';
?>