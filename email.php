<?php
define("HOST", "cias.rit.edu");
define("USER", "beambeats");
define("PASSWORD", "YRyYei600h");
define("DATABASE", "beambeats");
define("FILEPATH", "assets/vis/");

$email = $_POST['email'];
$id = $_POST['id'];
$data = $_POST['data'];
$sender = "yxk6281@rit.edu";

$file = "test.png";
file_put_contents(FILEPATH . "creation/" . $file, base64_decode($data));

$mysqli = mysqli_connect(HOST, USER, PASSWORD, DATABASE);
$query = "INSERT INTO creation (originalid, image, datecreated) VALUES (1, '$file', NOW())";

if (!$result = $mysqli->query($query)) {
    echo ("Errormessage: " . $mysqli->error);
} else {
    $to = $email;
    $subject = "Beam Beats - Your Visualization";
    $message = "<html><body><h1>Your Beam Beats Visualization (" . $id . ")</h1><img style='width: 500px; height: 500px; margin: 0px auto; background-color: black;' alt='visualization' src='http://beambeats.cias.rit.edu/visualization/assets/vis/" . $id . ".png'></body></html>";
    $headers = "From: " . strip_tags($sender) . "\n";
    $headers .= "Reply-To: ". strip_tags($sender) . "\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\n";

    mail($to, $subject, $message, $headers);
}

?>
