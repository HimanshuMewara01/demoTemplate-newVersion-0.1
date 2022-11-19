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
   empty($_POST['captcha'])     ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
        //echo "No arguments Provided!";
        echo 0;
   }else{
   
      $name = strip_tags(htmlspecialchars($_POST['name'])); 
      $email_address = strip_tags(htmlspecialchars($_POST['email']));
      $phone = strip_tags(htmlspecialchars($_POST['phone']));
      $services = $_POST['array'];
      $content="";
      foreach($services as  $service){
         $content.="Services looking for: $service <br>";
      }
     

     
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

    $body =" <p> Name: $name <br/> Email: $email_address <br/>Phone: $phone <br/> $content </p> ";

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Contact Page Contact Form: ';
    $mail->Body    = $body;
    $mail->AltBody = strip_tags($body);

    $mail->send();
    $message =  'Message has been sent';
    echo json_encode(['code'=>200, 'message'=>$message]);
 
   //  echo 'Message has been sent';
} catch (Exception $e) {
   //  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
   $message =   "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
   http_response_code(500);
   echo json_encode(['code'=>500, 'Message'=>$message]);
} 

   // }
}








// // Check for empty fields
// if(empty($_POST['name'])      ||
//    empty($_POST['email'])     ||
//    empty($_POST['phoneNumber'])     ||
//    !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
//    {
//         //echo "No arguments Provided!";
//         echo 0;
//    }else{
   
//       $name = strip_tags(htmlspecialchars($_POST['name'])); 
//       $email_address = strip_tags(htmlspecialchars($_POST['email']));
//       $phone = strip_tags(htmlspecialchars($_POST['phoneNumber']));
//       $message = strip_tags(htmlspecialchars($_POST['message']));
   
//       // Create the email and send the message
//       $to = 'tanwarsumit.kooky@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
//       $email_subject = "Website Contact Form:  $name";
//       $email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
//       $headers = "From: noreply@e4engineering.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
//       $headers .= "Reply-To: $email_address";   
//       //mail($to,$email_subject,$email_body,$headers);
//       echo 1;
//    }         
?>