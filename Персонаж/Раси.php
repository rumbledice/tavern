<?php
	$db_host = 'localhost'; // хост бази даних
	$db_name = 'dnd'; // назва бази даних
	$db_user = 'rumbledice'; // користувач бази даних
	$db_pass = 'rumbledice'; // пароль користувача

	try {
	    $db = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8", $db_user, $db_pass);
	} catch (PDOException $e) {
	    echo "Помилка підключення до бази даних: " . $e->getMessage();
	}

	$info = [];

	if ($query = $db->query('SELECT * FROM ras')) {
		$info = $query->fetchAll(PDO::FETCH_ASSOC);
	} else {
		print_r($db->errorInfo());
}

?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Раси</title>
	<link  rel="icon" href="../img/logo.png">
	<link rel="stylesheet" type="text/css" href="../css/main.css">
</head>
<body>
	<div class="nzd">
		<a href="../index.html"><img src="../img/дім.png" class="nzd-btn" alt=""></a>
	</div>
	<header>
		<div class="menu-btn">
			<span></span>
			<span></span>
			<span></span>
		</div>
	</header>
	<div class="menu">
		<nav>
			<div class="bodhome">
		   		<a href="../index.html"><img class="logo" src="../img/logo.ico" alt="logo"></a>
		   		<div>
		   			<h2>Таверна "Гримлячі Кістки"</h2> 
		   			<br> 
		   			<span>Онлайн довідник з D&D 5e</span>
		   		</div>
			</div>
			<div class="bodhome">
				<div>
					<ul>
						<li><h4>Персонаж</h4></li>
						<li><a href="../Персонаж/Раси.html">Раси</a></li>
						<li><a href="../Персонаж/Класи.html">Класи</a></li>
						<li><a href="../Персонаж/Риси.html">Риси</a></li>
						<li><a href="../Персонаж/Предісторії.html">Предісторії</a></li>
						<li><a href="../Персонаж/Закляття.html">Закляття</a></li>
				   </ul>
				</div>
				<div>
					<ul>
						<li><h4>Речі</h4></li>
						<li><a href="../Речі/Зброя.html">Зброя</a></li>
						<li><a href="../Речі/Обладунки.html">Обладунки</a></li>
						<li><a href="../Речі/Спорядження.html">Спорядження</a></li>
						<li><a href="../Речі/Магічні предмети.html">Магічні предмети</a></li>
				   </ul>
				</div>
			</div>
			<div class="bodhome">
				<div>
					<ul>
						<li><h4>Майстерня </h4></li>
						<li><a href="../Майстерня/Ширма.html">Ширма</a></li>
						<li><a href="../Майстерня/Бестіарій.html">Бестіарій</a></li>
						<li><a href="../pdf/аркуш.pdf">Аркуш персонажа</a></li>
						<li><a href="https://roll20.net/">Roll20</a></li>
						<li><a href="https://rolladvantage.com/tokenstamp/">Розробка токенів <br>Tokenstamp</a></li>
						<li><a href="https://inkarnate.com/maps/">Мапи Inkarnate</a></li>
						<li><a href="https://azgaar.github.io/Fantasy-Map-Generator/">Мапи Аzgaar</a></li>
						<li><a href="https://www.redblobgames.com/maps/mapgen4/">Мапи Mapgen4 from <br>Red Blob Games</a></li>
						<li><a href="https://watabou.github.io/index.html">Мапи Watabou</a></li>
						<li><a href="https://homebrewery.naturalcrit.com/">Оформення  Naturalcrit</a></li>
				   </ul>
				</div>
				<div>
					<ul>
						<li><h4>Ми та наші друзі </h4></li>
						<li><a href="https://www.youtube.com/channel/UCilttdHSg1t5Y3Kk7j3frhg">YouTube</a></li>
						<li><a href="https://t.me/rumbledice">Чатик</a></li>
						<li><a href="https://t.me/rumble_dice">Telegram</a></li>
						<li><a href="https://discord.gg/ygTFYRvu6v">Discord</a></li>
				   </ul>
				</div>
			</div>
		</nav>
		</div>

		<div class="content">
			<!--div class="container">
             <div class="tabs">
	               <div class="concon" id="content-1">
	                 <div>
	                 	<h2>
	                 		Раси
	                 	</h2>
	                 	<span>
	                 		Races
	                 	</span>
	                 </div>

									<div>
										
									</div>


	               </div>
	               <div class="concon" id="content-2">
	                <details open>
									    <summary>
									    	<span>Details</span>
									    	<hr>
									    </summary>
									    Something small enough to escape casual notice.
									</details>
	               </div>
	               <div class="concon" id="content-3">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-4">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-5">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-6">
	                 Содержимое
	               </div>
	               <div class="concon" id="content-7">
	                 Содержимое
	               </div>
	               <div class="concon" id="content-8">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-9">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-10">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-11">
	                 Содержимое
	               </div>
	               <div class="concon" id="content-12">
	                 Содержимое
	               </div>
	               <div class="concon" id="content-13">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-14">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-15">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-16">
	                 Содержимое
	               </div>
	               <div class="concon" id="content-17">
	                 Содержимое
	               </div>
	               <div class="concon" id="content-18">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-19">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-20">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-21">
	                 Содержимое
	               </div>
	               <div class="concon" id="content-22">
	                 Содержимое
	               </div>
	               <div class="concon" id="content-23">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-24">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-25">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-26">
	                 Содержимое
	               </div>
	               <div class="concon" id="content-27">
	                 Содержимое
	               </div>
	               <div class="concon" id="content-28">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-29">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-30">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-31">
	                 Содержимое
	               </div>
	               <div class="concon" id="content-32">
	                 Содержимое
	               </div>
	               <div class="concon" id="content-33">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-34">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-35">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-36">
	                 Содержимое
	               </div>
	               <div class="concon" id="content-37">
	                 Содержимое
	               </div>
	               <div class="concon" id="content-38">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-39">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-40">
	                 Содержимое
	               </div> 
	               <div class="concon" id="content-41">
	                 Содержимое
	               </div>
	               <div class="concon" id="content-42">
	                 Содержимое
	               </div>
	               <div class="concon" id="content-43">
	               	Содержимое
	               </div>
         
               <div class="tabs__links">
                 <a href="#content-1">Ааракокра</a>
                 <a href="#content-2">Аасімар</a>
                 <a href="#content-3">Багбір</a>
                 <a href="#content-4">Ведалкен</a>
                 <a href="#content-5">Вердан</a>
                 <a href="#content-6">Відроджений</a>
                 <a href="#content-7">Гібрид симиків</a>
                 <a href="#content-8">Гіт</a>
                 <a href="#content-9">Гном</a>
                 <a href="#content-10">Гоблін</a>
                 <a href="#content-11">Голіаф</a>
                 <a href="#content-12">Дампір</a>
                 <a href="#content-13">Дворф</a>
                 <a href="#content-14">Дженазі</a>
                 <a href="#content-15">Драконороджений</a>
                 <a href="#content-16">Ельф</a>
                 <a href="#content-17">Зайчани</a>
                 <a href="#content-18">Калаштар</a>
                 <a href="#content-19">Кенку</a>
                 <a href="#content-20">Кентавр</a>
                 <a href="#content-21">Кобольд</a>
                 <a href="#content-22">Кований</a>
                 <a href="#content-23">Леонін</a>
                 <a href="#content-24">Локата</a>
                 <a href="#content-25">Локсодон</a>
                 <a href="#content-26">Людина</a>
                 <a href="#content-27">Людоящір</a>
                 <a href="#content-28">Мінотавр</a>
                 <a href="#content-29">Напівельф</a>
                 <a href="#content-30">Напіворк</a>
                 <a href="#content-31">Напіврослик</a>
                 <a href="#content-32">Орк</a>
                 <a href="#content-33">Перемінний</a>
                 <a href="#content-34">Порчекровні</a>
                 <a href="#content-35">Совлін</a>
                 <a href="#content-36">Табаксі</a>
                 <a href="#content-37">Тифлінг</a>
                 <a href="#content-38">Тортл</a>
                 <a href="#content-39">Тритон</a>
                 <a href="#content-40">Фірболг</a>
                 <a href="#content-41">Хобгоблін</a>
                 <a href="#content-42">Шифтер</a>
                 <a href="#content-43">Юань-ті</a>
               </div>
            </div>
         </div-->

					<?php foreach ($info as $data): ?>
   	
				<a class="popup-link" href="Раси/<?= str_replace(' ', '', $data['num']) ?>.html">
					<div class="searchable cardspell popup_link spell" style="background-image: url(../img/<?= str_replace(' ', '', $data['num']) ?>_crt.png);   background-size: cover;   background-repeat: no-repeat;  background-position: left top;">
						<div class="cardt">
							<p class="cardnam">	<?= str_replace(' ', '', $data['nums']) ?>	 </p>
							<p class="carding">	<?= str_replace(' ', '', $data['num']) ?>	 </p >
						</div>
					</div>
				</a>
   	<?php endforeach; ?>
		</div>



		<footer>
			<div class="bodhomeft">
				<div>
					<a href="https://t.me/rumble_dice_bot">Зворотній зв'язок</a>
				</div>
				<div>
					<span>Ми у соц мережах</span> 
					  
					<a href="https://t.me/rumbledice"><img class="log" src="../img/logotg.png" alt=""></a>
					  
					<a href="https://t.me/rumble_dice"><img class="log" src="../img/logotg.png" alt=""></a>
					  
						<a href="https://www.youtube.com/channel/UCilttdHSg1t5Y3Kk7j3frhg"><img class="log" src="../img/logoyt.png" alt=""></a>
					  
						<a href="https://discord.gg/ygTFYRvu6v"><img class="log"src="../img/logods.png" alt=""></a>
				</div>
			</div>
			<div>
				<span  class="disclaimer">
						Матеріали на нашому веб-сайті надаються безкоштовно та лише в ознайомлювальних цілях некомерційного характеру, а також не виключають необхідність купівлі офіційних металів.
						
						<br>

						Dungeons&Dragons, D&D, їх логотип, усі персонажі та оригінальні назви є власністю Wizards of the Coast LLC у США та інших країнах. © Wizards
				</span>
			</div>
		</footer>
	<script src="../js/main.js"></script>
</body>
</html>