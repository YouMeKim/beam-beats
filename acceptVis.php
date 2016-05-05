<?php
    define("HOST", "cias.rit.edu");
    define("USER", "beambeats");
    define("PASSWORD", "YRyYei600h");
    define("DATABASE", "beambeats");

    $mysqli = mysqli_connect(HOST, USER, PASSWORD, DATABASE);
    $query = "SELECT id FROM visualization GROUP BY id DESC LIMIT 1";
    if (!$result = $mysqli->query($query)) {
        echo ("Errormessage: " . $mysqli->error);
    } else {
        $row = mysqli_fetch_assoc($result);
        $newId = $row['id'] + 1;
        $newName = "BB." . str_pad($newId, 5, "0", STR_PAD_LEFT);
        $allName = $newName . "all.png";
        $purName = $newName . "pur.png";
        $redName = $newName . "red.png";
        $yelName = $newName . "yel.png";
        $bluName = $newName . "blu.png";
        echo $newId . "<br>" . $newName . "<br>" . $allName . "<br>" . $purName . "<br>" . $redName . "<br>" . $yelName . "<br>" . $bluName;
        $query = "INSERT INTO visualization
                    (name, imageall, imagepur, imagered, imageyel, imageblu, datecreated)
                    VALUES ('$newName', '$allName', '$purName', '$redName', '$yelName', '$bluName', NOW())";
        if (!$mysqli->query($query)) {
            echo ("Errormessage: " . $mysqli->error);
        }
    }

    foreach ($_POST as $key=>$value) {
        $all = $_POST['all'];
        file_put_contents($allName, base64_decode($all));
        $pur = $_POST['pur'];
        file_put_contents($purName, base64_decode($pur));
        $red = $_POST['red'];
        file_put_contents($redName, base64_decode($red));
        $yel = $_POST['yel'];
        file_put_contents($yelName, base64_decode($yel));
        $blu = $_POST['blu'];
        file_put_contents($bluName, base64_decode($blu));
    }
?>
