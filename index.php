<?php
// Соединение с базой данных
$servername = "localhost"; // Имя сервера
$username = "localhost1"; // Имя пользователя базы данных
$password = "ALIHAN_sapar"; // Пароль пользователя базы данных
$dbname = "p-340663_localhost1"; // Имя базы данных

// Создание соединения
$conn = new mysqli($localhost, $localhost1, $ALIHAN_sapar, $p-340663_localhost1);

// Проверка соединения
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Проверка, была ли отправлена форма
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получение данных из формы
    $name = $_POST['name'];
    $number = $_POST['НОМЕР'];
    $message = $_POST['message'];

    // Подготовка и выполнение SQL запроса для вставки данных в базу данных
    $sql = "INSERT INTO your_table_name (name, number, message) VALUES ('$name', '$number', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Запись успешно добавлена в базу данных";
    } else {
        echo "Ошибка: " . $sql . "<br>" . $conn->error;
    }
}

// Закрытие соединения с базой данных
$conn->close();
?>
