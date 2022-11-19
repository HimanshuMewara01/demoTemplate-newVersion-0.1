<?php

// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
        //echo "No arguments Provided!";
        echo 0;
   }else{
   
      $name = strip_tags(htmlspecialchars($_POST['name'])); 
      $email_address = strip_tags(htmlspecialchars($_POST['email']));
      $phone = strip_tags(htmlspecialchars($_POST['phone']));
     
   
      // Create the email and send the message
      $to = 'tanwarsumit.kooky@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
      $email_subject = "Website Portfolio Contact Form:  $name";
      $email_body = "You have received a new message from your portfolio contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone.No.: $phone\n\n";
      $headers = "From: noreply@e4engineering.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
      $headers .= "Reply-To: $email_address";   
      
      echo mail($to,$email_subject,$email_body,$headers);
      echo 1;
      echo $name;
      echo $email_address;
      echo $phone;
   }         
     

?>