<?php
if(isset($_POST['email'])) {
	
	// CHANGE THE TWO LINES BELOW
	$email_to = "joe@joecollicoat.com";
	
	$email_subject = "Joe Collicoat Web Enquiry";
	
	
	function died($error) {
		// your error code can go here
		echo "We're sorry, but there's errors found with the form you submitted.<br /><br />";
		echo $error."<br /><br />";
		echo "Please go back and fix these errors.<br /><br />";
		die();
	}
	
	// validation expected data exists
	if(!isset($_POST['firstname']) ||
		!isset($_POST['lastname']) ||
		!isset($_POST['email']) ||
		!isset($_POST['phone']) ||
		!isset($_POST['message'])) {
		died('We are sorry, but there appears to be a problem with the form you submitted.');		
	}
	
	$firstname = $_POST['firstname']; // required
	$lastname = $_POST['lastname']; // required
	$email = $_POST['email']; // required
	$phone = $_POST['phone']; // not required
	$message = $_POST['message']; // required
	
	$error_message = "";
	$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email)) {
  	$error_message .= 'The email address you entered does not appear to be valid.<br />';
  }
  if(strlen($error_message) > 0) {
  	died($error_message);
  }
	$email_message = "Form details below.\n\n";
	
	function clean_string($string) {
	  $bad = array("content-type","bcc:","to:","cc:","href");
	  return str_replace($bad,"",$string);
	}
	
	$email_message .= "First Name: ".clean_string($firstname)."\n";
	$email_message .= "Last Name: ".clean_string($lastname)."\n";
	$email_message .= "Email: ".clean_string($email)."\n";
	$email_message .= "Phone: ".clean_string($phone)."\n";
	$email_message .= "Message: \n \n".clean_string($message)."\n";
	
	
// create email headers
$headers = 'From: '.$email."\r\n".
'Reply-To: '.$email."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>

    <!-- place your own success html below -->

    <!DOCTYPE html>
    <html lang="en">

    <head>

        <meta charset="utf-8">
        <title>Joe Collicoat</title>

        <link rel="stylesheet" href="resetmeyer.css">
        <link rel="stylesheet" href="normalize.css">
        <link rel="stylesheet" href="style.css">

        <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">

        <script src="jquery-3.1.0.min.js"></script>
        <script src="javascript.js"></script>
        <script src="jquery.js"></script>

    </head>

    <body>

        <div style="margin-top:125px;">
            <p style="text-align:center;">
                Thanks for contacting me! I will be in touch soon.
                <br>
                <a href="index.html" style="text-decoration:none;">Go home.</a>
            </p>
        </div>

    </body>

    </html>

    <?php
}
die();
?>