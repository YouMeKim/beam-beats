<?php
require_once('db/access.php');

$mysqli = mysqli_connect(HOST, USER, PASSWORD, DATABASE);
$query = "SELECT * FROM visualization ORDER BY datecreated DESC";

$result = $mysqli->query($query);

$json = array();

if ($result && $mysqli->affected_rows > 0) {
    while ($row = mysqli_fetch_assoc($result)){
       $json[] = $row;
    }
} else {
    echo $mysqli->error;
}

$result->close();
$mysqli->close();

header('Content-Type: application/json');
echo json_encode($json);

?>
