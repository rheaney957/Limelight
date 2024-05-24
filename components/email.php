<?php

$DEST_EMAIL = "info@shine.net";
$contactsubmitted = false;
$name = $_REQUEST["name"];
$email = $_REQUEST["email"];
$message = $_REQUEST["comments"];

if (!empty($_REQUEST["name"]) || ! empty($_REQUEST["email"]))
{
  $msgbody = "Name: $name\n";
  $msgbody .= "Email: $email\n";

  $msgbody .= "Message: $message";

  mail($DEST_EMAIL, "info@shine.net contact form", $msgbody, "From: $name <$email>\n\r");
  $contactsubmitted = true;
}
?>