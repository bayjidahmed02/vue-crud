<?php
// header('content-type: application/json');
header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");



$conn = mysqli_connect('localhost', 'root', '', 'vue');
if ($conn->connect_errno) {
    die('cannot connect!');
}
$action = 'read';
if (isset($_GET['action'])) {
    $action = $_GET['action'];
}
$response = [];
if ($action === 'read') {
    $users = [];
    $result = $conn->query("SELECT *  FROM users");
    while ($row = $result->fetch_assoc()) {
        array_push($users, $row);
    }
    $response['users'] = $users;
}






echo json_encode($response);
