
<!DOCTYPE html>
<html>
<head>
	<link href='https://fonts.googleapis.com/css?family=Exo:400,700,200' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="style.css">
	<title>TWS - Potvrdenie formulára</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
</head>
<body>
<section class=uvod>
<header>
<a href="index.html"><img src="images/logoSPSE.png" alt="SPŠE" id="logo"></a>
<h1>Tvorba webových stránok</h1>
</header><!-- /header -->

<nav>

<a href="#" id="menu-icon"></a>

	<ul>
		<li><a href="index.html" title="Domov">Domov</a></li>
		<li><a href="galeria.html" title="Gáleria">Galéria</a></li>
		<li><a href="kontakt.html" title="Kontakt">Kontakt</a></li>
	</ul>

	<ul>
		<li><a href="kontakt.html"><img src="images/sk.png" alt="jazyk sk"></a></li>
		<li><a href="kontakteng.html"><img src="images/us.png" alt="jazyk eng"></a></li>
	</ul>
</nav>
</section>

<section class=obsah>
<aside>
<h2>Oznamy</h2>
<h3>TWS</h3>
<p>Hodiny z tohto predmetu sa uskutočnia v stredu a vo štvrtok v miestnosti PZ v budove Strednej priemyselnej školy elektrotechnickej v Prešove.</p>

<h3>Test</h3>
<p>Test z predmetu Tvorba webových stránok sa uskutoční po prebratí tematického celku Základné značky v HTML v mesiaci november.</p>

<h3>Zadanie</h3>
<p>Zadanie z predmetu TWS bude mať za cieľ precvičiť prakticky preberanú problematiku, pričom každý študent si vytvorí vlastnú webovú stránku podľa zadaných kritérií.</p>
</aside>

<section class=main>
	<h2>Kontakt</h2>
	<p>
	<?php
$title = "Kontakt zo stránky tws.webuda.com"; 
$mess = $_POST["sprava"];
$to = "martin.broda@gmail.com";
$from = $_POST["email"];
$mailheaders = "Content-type:text/plain; charset=utf-8\r\n";
$mailheaders .= "From: $from\r\n";
$send = mail($to, $title, $mess, $mailheaders);
echo "Formulár bol úspešne odoslaný."
?>
</p>
	
			
</section>
</section>

<footer>
	<p>&copyTvorba webových stránok. 2015 </p>
</footer>

</body>
</html>

