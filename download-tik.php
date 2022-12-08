<?php

$media = $_GET['media'];
$filename = "Downloaderi_".rand().".".substr($media, strpos($media, "/") + 1);
$link = base64_decode($_GET['token']);

// $file_url = 'https://v16m.tiktokcdn.com/5c014c0890a3f0c90d7c7e6415be9f9a/5f909282/video/tos/alisg/tos-alisg-pv-0037c001/d318da68057e4a50bab9c92b38c4ebcb/?a=1180&br=8762&bt=4381&cr=0&cs=0&cv=1&dr=0&ds=6&er=&l=202010211356180102341060156201FCF5&lr=&mime_type=video_mp4&qs=13&rc=ajZnN2U7ZmlndzMzOTczM0Apd3RsM2V3Nzx0ZTMzZDc6eWdxbmYtX3ExNm5fLS1eMTRzc2QwYTFfNWBjYXEtLTMxLS06Yw%3D%3D&vl=&vr=';           // http://www.somedomain.com/test.mp4
header('Content-Type: ' . $media); 
header("Content-disposition: attachment; filename=\"" . $filename. "\""); 
header("Content-Length: ".filesize($link));
$headers = get_headers($link);
foreach( $headers as $header )
{
    header( trim($header), TRUE );
}
readfile($link);
// $file = file_get_contents($link);

// header('Content-length: '. $length);