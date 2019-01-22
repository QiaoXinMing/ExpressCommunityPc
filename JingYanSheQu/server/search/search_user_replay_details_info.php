<?php

include '../config/connectionManager.php';
$info = $_POST['postInfo'];

$type = $info["type"];
$username = $info["username"];
$id = $info["arctileId"];
$time = $info["time"];
$like = $info["like"];
$container = $info["container"];
$userId = $info["userId"];

$sql = "INSERT INTO express_arctile_picture_video_reply_reply_info (`personal_id`, `arctile_reply_id`, `arctile_reply_username`, `arctile_replay_content`, `arctile_reply_publishTime`, `arctile_like_num`, `replay_type`) VALUES ('$userId','$id','$username','$container','$time','$like','$type')";

mysqli_query($link , "set names utf8");
mysqli_query($link, $sql);
echo "success";

include '../config/closeConnection.php';
?>