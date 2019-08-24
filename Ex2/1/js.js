function buttonClick()
{
		var x1 = parseInt(document.getElementById('x1').value);
		var x2 = parseInt(document.getElementById('x2').value);
			if (Number.isNaN(x1) || Number.isNaN(x2)){
				alert('В поля x1 и x2 должны быть введены числовые значения!');
				} else {
					var resultDivFirst = document.getElementById('resultFirst'); 
					var resultDivSecond = document.getElementById('resultSecond');
					document.getElementById('resultFirst').innerHTML=' ';
					resultDivFirst.append('x1 + x2 = '+(x1+x2));
																	}
						}