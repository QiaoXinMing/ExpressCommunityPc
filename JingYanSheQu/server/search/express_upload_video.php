<?php
include '../config/connectionManager.php';
$file = $_FILES;

  $result = '';
  $subType ='';
  $title ='';
  $videoNavId = '';
  $userId = '';
  $userName ='';
  $publishTime = '';
  $videoTime = '';
  $videoName = '';
  $videoTime ='';
  $type = '';
  $conStr = '';
  $file['tmp_name']='';
  $imgUrlPicture='';

if(!$file['videoInfo']['size']){
  echo "upload video failed";
}else{
  $subType = $_POST['subNavTitle'];
  $title = $_POST['title'];
  $videoNavId = $_POST['subNavId'];
  $userId = $_POST['userId'];
  $userName = $_POST['userName'];
  $publishTime = $_POST['publishTime'];
  $videoTime = $_POST['videoTime'];
  $videoName = $file['videoInfo']['name'];
  $videoTime = $_POST['videoTime'];
  $type = $_POST['type'];
  $path = "../../videos/".iconv("UTF-8","GBK",$userName).'/'.iconv("UTF-8","GBK",$videoName); 
	move_uploaded_file($file['videoInfo']['tmp_name'],$path); 
  $input = "";
  $output ="";
  $command ="/usr/local/ffmpeg/bin/ffmpeg -i {$input} -y -f image2 -t 0.05 -s 352*240 {$output}";
  shell_exec($command);
  $cmd = "/usr/local/ffmpeg/bin/ffprobe " . $imgUrlPicture . " -show_streams 2>/dev/null";
  shell_exec($cmd);
}

  //允许上传视频的格式  将视频转成3GP通用格式
$array_extention_interdite = array( '.drc','.dsm','.dsv','.dsa','.dss','.vob','.ifov','.d2v','.flv','.fli','.flc','.flic','.ivf','.mkv','.mpg', '.mpeg', '.mpe', '.m1v', '.m2v', '.mpv2','.mp2v', '.dat', '.ts', '.tp', '.tpr', '.pva', '.pss','.mp4', '.m4v', '.m4p', '.m4b', '.3gp', '.3gpp', '.3g2', '.3gp2','.ogm','.mov', '.qt', '.amr','.ratdvd','.rt', '.rp','.smi', '.smil','.rm', '.ram', '.rmvb', '.rpm','.roq','.swf','.smk', '.bik','.wmv', '.wmp', '.wm', '.asf','.avi','.asx', '.m3u', '.pls', '.wvx', '.wax', '.wmx', '.mpcpl');
 if($_POST){
    $sql = "insert into express_video_info (video_classfiy, video_title, video_content, resource_url,video_looked,video_reply,video_forward,video_collection,video_preview_pic,	picture_num,video_time, video_publishTime, video_nav_id, personal_id, resource_type ) values ('$subType','$title','$conStr','$videoName','0','0','0','0','','1','$videoTime','$publishTime','$videoNavId','$userId','$type')";  

    mysqli_query($link , "set names utf8");
    $result = mysqli_query($link, $sql);
 }
 
 if(!$result || !$_POST){
     die("insert data error");
  }

include '../config/closeConnection.php';
?>