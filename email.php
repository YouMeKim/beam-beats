<?php
define("HOST", "cias.rit.edu");
define("USER", "beambeats");
define("PASSWORD", "YRyYei600h");
define("DATABASE", "beambeats");
define("FILEPATH", "assets/vis/creation/");

$email = $_POST['email'];
$name = $_POST['id'];
$data = $_POST['data'];
$sender = "bandthelazers@gmail.com";

$file = "sample.png";

$mysqli = mysqli_connect(HOST, USER, PASSWORD, DATABASE);

$query = "SELECT id FROM visualization WHERE name = '$name'";
if (!$result = $mysqli->query($query)) {
    echo ("Errormessage: " . $mysqli->error);
} else {
    $row = mysqli_fetch_assoc($result);
    $id = $row['id'];
    $newId = 1;

    $query = "SELECT id FROM creation GROUP BY id DESC LIMIT 1";
    if (!$result = $mysqli->query($query)) {
        echo ("Errormessage: " . $mysqli->error);
    } else {
        $row = mysqli_fetch_assoc($result);
        $newId = $row['id'] + 1;
    }

    $file = "BBC." . str_pad($newId, 5, "0", STR_PAD_LEFT) . ".png";

    $data = str_replace('data:image/png;base64,', '', $data);

    file_put_contents(FILEPATH . $file, base64_decode($data));

    $query = "INSERT INTO creation (originalid, image, datecreated) VALUES ($id, '$file', NOW())";

    if (!$result = $mysqli->query($query)) {
        echo ("Errormessage: " . $mysqli->error);
    } else {
        $query = "INSERT INTO history(creationid, datesent, email) VALUES ('$newId', NOW(), '$email')";

        if (!$result = $mysqli->query($query)) {
            echo ("Errormessage: " . $mysqli->error);
        } else {
            $to = $email;
            $subject = "Beam Beats - Your Visualization";
            $message = "<html><body><div style='width: 100%; background-color: #232331;'><center><img style='width: 108px; height: 90px; margin-top: 50px;' alt='Beam Beats' src='http://beambeats.cias.rit.edu/visualization/assets/img/BBLogoMini.png'></center><h1 style='margin: 100px 0px; font-size: 30px; color: #ffffff; text-align: center;'>THANKS FOR ROCKING OUT WITH US</h1><center><img style='width: 700px; margin-bottom: 30px;' alt='visualization' src='http://beambeats.cias.rit.edu/visualization/assets/vis/creation/$file'></center><h1 style='color: #ffffff; text-align: center;'>READY FOR AN ENCORE?</h1><h2 style='color: #ffffff; text-decoration: none; text-align: center;'>beambeats.cias.rit.edu/visualization/</h2><p style='color: #ffffff; text-align: center;'>a project by:</p><center><img style='width: 100px; height: 100px; margin-bottom: 30px;' alt='bl' src='http://beambeats.cias.rit.edu/visualization/assets/img/swatch-bl.png'></center></div></body></html>";
            $headers = "From: " . strip_tags($sender) . "\n";
            $headers .= "Reply-To: ". strip_tags($sender) . "\n";
            $headers .= "MIME-Version: 1.0\n";
            $headers .= "Content-Type: text/html; charset=ISO-8859-1\n";

            mail($to, $subject, $message, $headers);
        }
    }
}
?>
