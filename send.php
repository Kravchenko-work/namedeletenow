<?php 
$name = htmlspecialchars($_POST['name']);
$name = urldecode($name);
$name = trim($name);
if (mail("kravchienko_slava@mail.ru", "Тема письма", "Тело письма", "test@mail.ru")){
	echo "yes";
}
else {
	echo "no";
}
 ?>

