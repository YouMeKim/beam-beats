<?php
    define("HOST", "cias.rit.edu");
    define("USER", "beambeats");
    define("PASSWORD", "YRyYei600h");
    define("DATABASE", "beambeats");

    $mysqli = mysqli_connect(HOST, USER, PASSWORD, DATABASE);
    $query = "SELECT LAST_INSERTED_ID() AS id FROM visualization";
    $result = $mysqli->query($query);
    $id = $result[0]['id'];

    foreach ($_POST as $key=>$value) {
        $all = $_POST['all'];
        file_put_contents('all.png', base64_decode($all));
        $pur = $_POST['pur'];
        file_put_contents('pur.png', base64_decode($pur));
        $red = $_POST['red'];
        file_put_contents('red.png', base64_decode($red));
        $yel = $_POST['yel'];
        file_put_contents('yel.png', base64_decode($yel));
        $blu = $_POST['blu'];
        file_put_contents('blu.png', base64_decode($blu));
    }
?>
