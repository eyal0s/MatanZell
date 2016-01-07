<?php

$email = $_GET['mail'];

if($email){
$file = 'db.txt';
// Open the file to get existing content
$current = file_get_contents($file);
// Append a new person to the file

//echo $email;
$current .= $email . ' | ';
// Write the contents back to the file
file_put_contents($file, $current);

echo 'OK';
}else{echo 'BAD';}

?>
