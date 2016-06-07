<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Message sended</title>
		<link rel="stylesheet" href="../css/phpstyle.css">
		<link href='https://fonts.googleapis.com/css?family=Titillium+Web:200,100' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Open+Sans:500,400,300,200' rel='stylesheet' type='text/css'>

	</head>
	<body>
	<?php

		$name = $_POST["name"];
		$email = $_POST["email"];
		$company = $_POST["company"];
		$description = $_POST["description"];
	?>
		<h1>Message was successfully sent.</h1>
		<section>
			<p>Name : <?php echo $name ?></p>
			<p>Email : <?php echo $email ?></p>
			<p>Company : <?php echo $company ?></p>
			<p>Description : <?php echo $description ?></p>
		</section>
	</body>
</html>