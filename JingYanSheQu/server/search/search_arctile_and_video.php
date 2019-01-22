<?php
include '../config/connectionManager.php';
$sql = "( select a.arctile_id, a.arctile_title, a.arctile_content, a.resource_url, a.arctile_looked, a.arctile_reply, a.personal_id, a.resource_type, p.personal_id, p.personal_username from express_arctile_info a, express_personal_info p where a.resource_url !='' and resource_type='arctile' and a.personal_id = p.personal_id order by a.arctile_looked + a.arctile_reply + a.arctile_forward desc LIMIT 4 ) union all ( select v.video_id, v.video_title, v.video_content, v.resource_url, v.video_looked, v.video_reply, v.personal_id, v.resource_type, p.personal_id, p.personal_username from express_video_info v, express_personal_info p where v.resource_url !='' and v.personal_id = p.personal_id order by v.video_looked + v.video_reply + v.video_forward desc LIMIT 4 )";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);
$temp = array();
$SelectionTopicsList = array();
$index = 0;
while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
	$index++;
    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i=0;$i<$count;$i++){
        unset($rows[$i]);//删除冗余数据  
    }
	if($index < 5){
		if($rows['resource_type'] == "arctile"){
			$rows['resource_url'] = $imgUrl.$rows["personal_username"].'/'.explode('|',$rows['resource_url'])[0];
		}else if($rows['resource_type'] == "video"){
			$rows['resource_url'] = $videoUrl.$rows["personal_username"].'/'.explode('|',$rows['resource_url'])[0];
		}	  
	}else{
	  if($rows['resource_type'] == "arctile"){
	  	$rows['resource_url'] = $imgUrl.$rows["personal_username"].'/'.explode('|',$rows['resource_url'])[0];
	  }else if($rows['resource_type'] == "video"){
	  	$rows['resource_url'] = $videoUrl.$rows["personal_username"].'/'.explode('|',$rows['resource_url'])[0];
	  }
	}
	$rows["arctile_content"] = mb_substr(strip_tags($rows["arctile_content"]), 0, 35,'utf-8').'...';
    array_push($temp,$rows);
}
array_push($SelectionTopicsList,$temp[0]);
array_push($SelectionTopicsList,$temp[4]);
array_push($SelectionTopicsList,$temp[5]);
array_push($SelectionTopicsList,$temp[1]);
array_push($SelectionTopicsList,$temp[2]);
array_push($SelectionTopicsList,$temp[6]);
array_push($SelectionTopicsList,$temp[7]);
array_push($SelectionTopicsList,$temp[3]);

echo json_encode($SelectionTopicsList);

include '../config/closeConnection.php';
?>