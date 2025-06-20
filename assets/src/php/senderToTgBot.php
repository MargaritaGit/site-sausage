<?php
// Разрешить запросы с любого origin (небезопасно для продакшена)
header("Access-Control-Allow-Origin: *");
// Или разрешить только с localhost
// header("Access-Control-Allow-Origin: http://localhost:1234");

// Разрешить конкретные методы
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

// Разрешить конкретные заголовки
header("Access-Control-Allow-Headers: Content-Type");

// Установка правильного Content-Type
header('Content-Type: text/html; charset=UTF-8');

$token = '';

// Получаем данные из тела запроса
$dataJs = file_get_contents('php://input');
$data = json_decode($dataJs);

// Проверяем, что данные получены и декодированы
if ($data === null || !isset($data[0], $data[1])) {
    http_response_code(400);
    echo 'Неверные данные';
    exit;
}

$userName = $data[0];
$userPhone = $data[1];

$params = [
    "chat_id" => "639542300",
    "text" => "Заявку на сайте заполнил: \nИмя: <b>$userName</b>\nТелефон: <b>$userPhone</b>",
    "parse_mode" => "html",
];

$url = "https://api.telegram.org/bot" . $token . "/sendMessage";
$ch = curl_init();

curl_setopt_array($ch, [
    CURLOPT_URL => $url,
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POSTFIELDS => $params,
    CURLOPT_HTTPHEADER => ['Content-Type: multipart/form-data'],
    CURLOPT_TIMEOUT => 10,
]);

$result = curl_exec($ch);
$info = curl_getinfo($ch);

if ($result === false || substr($info['http_code'], 0, 1) != '2') {
    http_response_code(500);
    echo 'Ошибка curl: ' . curl_error($ch);
} else {
    echo $result;
}

curl_close($ch);
?>