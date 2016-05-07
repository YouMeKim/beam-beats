<?php
define("HOST", "cias.rit.edu");
define("USER", "beambeats");
define("PASSWORD", "YRyYei600h");
define("DATABASE", "beambeats");
define("FILEPATH", "assets/vis/creation/");

$email = $_POST['email'];
$name = $_POST['id'];
$data = $_POST['data'];
$sender = "yxk6281@rit.edu";

$file = "test.png";

$mysqli = mysqli_connect(HOST, USER, PASSWORD, DATABASE);

$query = "SELECT id FROM visualization WHERE name = '$name'";
if (!$result = $mysqli->query($query)) {
    echo ("Errormessage: " . $mysqli->error);
} else {
    $row = mysqli_fetch_assoc($result);
    $id = $row['id'];

    $query = "SELECT id FROM creation GROUP BY id DESC LIMIT 1";
    if (!$result = $mysqli->query($query)) {
        echo ("Errormessage: " . $mysqli->error);
    } else {
        $row = mysqli_fetch_assoc($result);
        $newId = $row['id'] + 1;
        $file = "BBC." . str_pad($newId, 5, "0", STR_PAD_LEFT) . ".png";

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
                $message = "<html><body><h1>Your Beam Beats Visualization (" . $name . ")</h1><img style='width: 500px; height: 500px; margin: 0px auto; background-color: black;' alt='visualization' src='http://beambeats.cias.rit.edu/visualization/assets/vis/creation/" . $file . "'></body></html>";
                $headers = "From: " . strip_tags($sender) . "\n";
                $headers .= "Reply-To: ". strip_tags($sender) . "\n";
                $headers .= "MIME-Version: 1.0\n";
                $headers .= "Content-Type: text/html; charset=ISO-8859-1\n";

                mail($to, $subject, $message, $headers);
            }
        }
    }
}
?>
