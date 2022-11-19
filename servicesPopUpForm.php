<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

// if($_POST['captcha'] === $_POST["labelCaptcha"]){
//    echo '<script>alert("Fill the correct captcha")</script>';
// }else{

// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['startProject'])     ||
   empty($_POST['projectSupport'])     ||
   empty($_POST['message'])     ||
   empty($_POST['captcha'])     ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
        //echo "No arguments Provided!";
        echo 0;
   }else{
   
      $name = strip_tags(htmlspecialchars($_POST['name'])); 
      $email_address = strip_tags(htmlspecialchars($_POST['email']));
      $phone = strip_tags(htmlspecialchars($_POST['phone']));
      $how_soon_do_you_want_to_start = strip_tags(htmlspecialchars($_POST['startProject']));
      $you_need_support_with = strip_tags(htmlspecialchars($_POST['projectSupport']));
      $message = strip_tags(htmlspecialchars($_POST['message']));
     
try {
   //Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
    //Server settings
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'server1.kookyuat.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = TRUE;                                   //Enable SMTP authentication
    $mail->Username   = 'testinfo@kookyuat.com';                     //SMTP username
    $mail->Password   = 'testinfo@123';                               //SMTP password
    $mail->SMTPSecure = "tls";            //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom("testinfo@kookyuat.com", "Kookyinfomedia");
   //  $mail->addAddress("deepak.kooky.web@gmail.com", "Sender Display Name");     //Add a recipient
    $mail->addAddress("ravindra@kookyinfomedia.com", "Sender Display Name");     //Add a recipient
    $mail->addCC("kookyinfomedia@gmail.com", "Some CC Name");

    $body =" <p> Name: $name <br/> Email: $email_address <br/> Phone: $phone <br/>How soon you want to start: $how_soon_do_you_want_to_start <br/>You need support with: $you_need_support_with <br/>Message: $message</p> ";

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Services PopUP Contact Form: ';
    $mail->Body    = $body;
    $mail->AltBody = strip_tags($body);

    $mail->send();
    // echo 'Message has been sent';
    $message =  'Message has been sent';
    echo json_encode(['code'=>200, 'message'=>$message]);
} catch (Exception $e) {
    // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    $message =   "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    http_response_code(500);
    echo json_encode(['code'=>500, 'Message'=>$message]);
} 

   }
// }






       
     

?>