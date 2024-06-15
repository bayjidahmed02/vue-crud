<?php
header('content-type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");



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
} else if ($action === 'create') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $result = $conn->query("INSERT INTO `users` (`name`,`email`,`phone`) VALUES ('$name','$email','$phone')");
    if ($result) {
        $response['msg'] = 'Data Added Successfully';
    } else {
        $response['msg'] = 'Something error';
    }
} else if ($action === 'delete') {
    $id = $_GET['id'];

    $result = $conn->query("DELETE FROM users WHERE id = $id");
    if ($result) {
        $response['msg'] = 'Data Deleted Successfully';
    } else {
        $response['msg'] = 'Something error';
    }
} else if ($action == 'update') {

    $id = $_GET['id'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $result = $conn->query("UPDATE `users` SET `name`='$name',`email`='$email',`phone`='$phone' WHERE `id`=$id");
    if ($result) {
        $response['msg'] = 'Data Updated Successfully';
    } else {
        $response['msg'] = 'Something error';
    }
}


echo json_encode($response);
