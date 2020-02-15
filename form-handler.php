<?php
if (!empty($_POST) && empty($_POST['url']))
	{

		/* Settings */

		// Subject
		$subject = 'New message on your website!';
		// Email From (name)
		$from_name = "Max Kirpichev";
		// Email From (email)
		$from_email = "info@".$_SERVER["HTTP_HOST"];
		// Email To
		$to = "mail@mail.ru";
		
		/* Settings end */
		
		$headers = "Content-Type: text/html; charset=UTF-8\r\n";
		$headers .= "From: \"".$from_name."\" <".$from_email.">\r\n";
		$headers .= "Reply-To: \"".$from_name."\" <".$from_email.">\r\n";
		$message = $subject."<br>";

		// Email body
		
		foreach($_POST as $key => $value){
			$message .= "<b>".$key.":</b> ".$value.'<br />';
		}
		
		$res = mail($to, $subject, $message, $headers);
		
		echo 'ok';	
		
	}else{
		echo 'error';
	}
		
?>