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

$token = ''; // tg bot token 

// Получаем данные из тела запроса из JS
$dataJs = file_get_contents('php://input');

// декодируем из JSON и сохраняем в переменную PHP
$data = json_decode($dataJs);

// Проверяем, что данные получены и декодированы
if ($data === null || !isset($data[0], $data[1])) {
    http_response_code(400);
    echo 'Неверные данные';
    exit;
}

// Санитизация входных данных - преобразуем html-теги в текст
$userName =  htmlspecialchars($data[0] ?? '', ENT_QUOTES, 'UTF-8');
$userPhone = htmlspecialchars($data[1] ?? '', ENT_QUOTES, 'UTF-8');

// Список chat_id пользователей, которым нужно отправить сообщение в телеграм
$chatIds = [
    "639542300", // Первый пользователь 
    "5182223825", // Новый пользователь
];

// массив с результатами отправки каждому из пользователей
$results = [];

// Отправляем каждому пользователю
foreach ($chatIds as $chatId) {
    // задаём объект с данными, который будем отправлять в API telegram
    $params = [
        "chat_id" => $chatId, 
        "text" => "Заявку на сайте заполнил: \nИмя: <b>$userName</b>\nТелефон: <b>$userPhone</b>",
        "parse_mode" => "html", // режим отображения сообщения в чате тг
    ];

    // url нашего бота тг
    $url = "https://api.telegram.org/bot" . $token . "/sendMessage";

    // создаём новую cURL сессию
    $ch = curl_init();

    // отправляем данные тг боту методом POST
    curl_setopt_array($ch, [
        CURLOPT_URL => $url,
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true, // ответ HTTP-запроса получаем в виде строки
        CURLOPT_POSTFIELDS => $params,
        CURLOPT_HTTPHEADER => ['Content-Type: multipart/form-data'],
        CURLOPT_TIMEOUT => 50, // default - 10
    ]);

    // выполняем запрос и сохраняем ответ от сервера в $result 
    $result = curl_exec($ch);

    // получаем информацию о сеансе
    $info = curl_getinfo($ch);

    curl_close($ch); // закрываем cURL сессию

    // проверяем не было ли ошибки и  находятся ли код HTTP-ответа в диапазоне 200-299 (успешные ответы)
    if ($result === false || substr($info['http_code'], 0, 1) != '2') {
        $results[] = ['chat_id' => $chatId, 'error' => curl_error($ch)];
    } else {
        $results[] = ['chat_id' => $chatId, 'success' => true];
    }
}

// Возвращаем JSON-ответ
echo json_encode(['status' => 'ok', 'results' => $results]);


// todo:
// CORS на конкретный домен
// Вынести токен и chat_id в конфигурационные файлы
// Добавить лимит запросов для защиты от спама



//! Создаём телеграмм бота
/**
 * 1. Переходим в BotFather -> start -> вводим /newbot -> получаем сообщение с токеном
 * 2. Находим своего бота в тг и отправляем ему любое сообщение
 * 3. Переходим по адресу https://api.telegram.org/botYOUR_TOKEN/getUpdates
 * 4. В полученном ответе копируем значение из "id" - это chat_id
 * 5. Запросы будут приходить в чат с ботом (после настройки frontend и backend))
 *
 */
//! Создаём телеграмм бота

?>