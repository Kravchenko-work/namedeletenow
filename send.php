<?php 
	if (trim(isset($_POST['name']))){
		$name = htmlentities($_POST['name']);
	} else {
		$name = "Имя не введены";
	}
	if (trim(isset($_POST['mail']))){
		$myMail = htmlentities($_POST['mail']);
	} else {
		$myMail = "Почта не введена";
	}
	if (trim(isset($_POST['tel']))){
		$tel = htmlentities($_POST['tel']);
	} else {
		$tel = "Телефон не введен";
	}
	if (trim(isset($_POST['text']))){
		$text = htmlentities($_POST['text']);
	} else {
		$text = "Информация не найдена";
	}
	if (trim(isset($_POST['date']))){
		$date = htmlentities($_POST['date']);
	} 	else {
		$date = "Дата рождения не введена";
	}

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require "phpmailer/src/PHPMailer.php";
	require "phpmailer/src/Exception.php";

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	$mail->setFrom('kravchienko_work@mail.ru');
	$mail->addAddress('kravchienko_slava@mail.ru');
	$mail->Subject = 'Тестовое задание с ecwid.to/cstmz'; 

	
	$mail->Body .= "<p>Нюанс по заданию: Отправка данных на почту осуществлялась с сайта, запущенного на локальном хостинге, соответственно данные не будут отправлены с сайта, который размещён на Github-хостинге<br>Ссылка на репозиторий: https://github.com/Kravchenko-work/namedeletenow.git<br>Ссылка на форму: https://kravchenko-work.github.io/namedeletenow/</p><br>";
	$mail->Body .= "<p>Здравствуйте. Меня зовут: $name (дата рождения: $date)</p>";
	$mail->Body .= "<br>$text<br>";
	$mail->Body .= "<p>Контакты: <br>Телефон: $tel <br>Почта: $myMail</p>";


	if (!$mail->send()){
		$message = "Error";
	} else {
		$message = "Данные успешно отправлены";
	}
	
	$response = ['message' => $message];
	echo json_encode($response);
 ?>

