var image = document.getElementById("myDiv").getElementsByTagName("img");
	
			function changeImage(event) {
 
			event = event || window.event;
			var targetElement = event.target || event.srcElement;
			if (targetElement.tagName == "IMG") 
			{
				document.getElementById("mainImage").src = targetElement.getAttribute("src");
			}
			}
			
			function changeText1(event) {
			
			document.getElementById("mainText").innerHTML = 'Ronaldo Heroics in World Cup';
			document.getElementById("para").innerHTML = "Any Football fan in the world simply cannot forget that day. During the Eventful World cup campaign in Russia, Christiano Ronaldo proved that He is still not done when he scored a Hat-trick against Spain. Normally Spain is considered as one of the best Defending teams in world Footbal, but not for Christiano though..Started with a penalty in the first 5 minutes to finish it off with a stunning free kick in Dying stages of the game, that free-kick reminded a moment in History when Ronaldo scored a similar free-kick aginst David James when he was wearing Manchester UTD colors.";
			}

			function changeText2(event) {
			
			document.getElementById("mainText").innerHTML = 'The frenchman did a Miracle';
			document.getElementById("para").innerHTML = "They had to wait for that day since 1998,, But that day Finally came when the France National Football team Won the 2018 FIFA World Cup defeating the phenomenal Croatian Golden Generation. The frenchman did not show much potential at the start of the Tournament but they built them selves up under Didier Deschamp who was the Man In charge for the Frenchman. Deschamp was a member of the World Cup Winning French squad in 1998 and is no man to deny when it comes to onfield tactics, Which are effective both Offensive and Defensive. The main player who won the spotlight was the 19 year old Kylian Mbappe who was also recognized as the rising player of the tournament.";
			} 

			function changeText3(event) {
			
			document.getElementById("mainText").innerHTML = '3 in a Row for Real Madrid';
			document.getElementById("para").innerHTML = "Spanish Football club Real Madrid won their 3rd UEFA Champions league in a row under Manager Zinedine Zidane. Real Madrid are considered as one of the most Elite clubs in europe and this was their 13th Champions league in the Clubs History. They beat LiverPool who was the favourites, but unfortunately could not meet the standards to beat the Spanish Giants. Liverpool goal keeper Lauris Karius was highly critisized for his Performance in the final but some others beleive that He was Delibirately injured by the Real Madrid captain Sergio Ramos which lead towards the Keeper being Concused.";
			}

			function changeText4(event) {
			
			document.getElementById("mainText").innerHTML = 'Ronaldo to Turin';
			document.getElementById("para").innerHTML = "One of the most Highlighted event of 2018 undoubtefully, Ronaldos move to Italian club Juventus. This news came by surprise because Christiano just won his 4th Champion League title with Real Madrid. He moved to Madrid in 2009 from Man.UTD on a record transfer fee and since then he has been the Driving force behind Real Madrids success ever since. The move happened mostly because of Clubs President Florentino Perez denying to increase Ronaldos wage and it was a huge blow to the Real Madrid team and the Real Madrid fans around the World. Ever since joining Ronaldo has already started concuring Italy. ";
			}

			function changeText5(event) {
			
			document.getElementById("mainText").innerHTML = 'Salah win the Golden Boot';
			document.getElementById("para").innerHTML = "Mohamed Salah is an Egyptian Football player who was a former player of Chelsea and Italian club Roma. He moved to Liverpool from Roma and ever since, his potentials have risen to whole new Level and his Hard working are paying of..Being the first Egyptian(African) player ever to win such an honor on English soil he is considered as one of the finest goal scorers in the Premier League. He recently won the Puscas award for a goal he scored in the Premier League.";
			} 