<?php

include '../config/connectionManager.php';
$info = $_POST['postInfo'];
$type = $info["type"];
$id = $info["id"];
$time = $info["time"];
$like = $info["like"];
$title = $info["title"];
$container = $info["container"];
$userId = $info["userId"];

$sql = "insert into express_arctile_picture_video_reply_info (replay_type,arctile_title,arctile_content,arctile_publishTime,arctile_id,arctile_like,personal_id) values ('$type','$title','$container','$time','$id','$like','$userId')";

mysqli_query($link , "set names utf8");
mysqli_query($link, $sql);
echo $sql;

echo "success";

include '../config/closeConnection.php';
?>