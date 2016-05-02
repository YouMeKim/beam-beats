<?php
$email = $_POST['email'];
$id = $_POST['id'];
$sender = "yxk6281@rit.edu";

echo "Sending email to " . $email . " with visualization id: " . $id;

$to = $email;
$subject = "Beam Beats - Your Visualization";
$message = "<html><body><h1>Your Beam Beats Visualization (" . $id . ")</h1><img style='width: 500px; height: 500px; margin: 0px auto; background-color: black;' alt='visualization' src='http://beambeats.cias.rit.edu/visualization/assets/vis/" . $id . ".png'></body></html>";
$headers = "From: " . strip_tags($sender) . "\n";
$headers .= "Reply-To: ". strip_tags($sender) . "\n";
$headers .= "MIME-Version: 1.0\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\n";

mail($to, $subject, $message, $headers);
?>
