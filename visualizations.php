<?php
/*
 * Query beambeats database and return array of JSON objects
 * Returns data from visualization table
 * Creations are not included
 */
require_once('db/access.php');

$mysqli = mysqli_connect(HOST, USER, PASSWORD, DATABASE);
$query = "SELECT * FROM visualization ORDER BY datecreated DESC";

$result = $mysqli->query($query);

$json = array();

if ($result && $mysqli->affected_rows > 0) {
    // iterate through all visualizations and return JSON object
    while ($row = mysqli_fetch_assoc($result)){
       $json[] = $row;
    }
} else {
    echo $mysqli->error;
}

$result->close();
$mysqli->close();

// return JSON objects
header('Content-Type: application/json');
echo json_encode($json);

?>
