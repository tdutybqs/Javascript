function buttonClick()
{
	var summ = 0;
	if (document.getElementById("x1").value == '' || document.getElementById("x2").value == ''){
		alert('значения x1 и x2 не должны быть пустыми!');
	} else {
		var x1 = parseInt(document.getElementById('x1').value);
		var x2 = parseInt(document.getElementById('x2').value);
		if (x1>x2){
			alert('X2 должен быть больше, чем X1!');
			document.getElementById('x1').value = ' ';
			document.getElementById('x2').value = ' ';
		} else if (Number.isNaN(x1) || Number.isNaN(x2)){
				alert('В поля x1 и x2 должны быть введены числовые значения!');
				} else {
					var resultDivFirst = document.getElementById('resultFirst'); 
					var resultDivSecond = document.getElementById('resultSecond');
					document.getElementById('resultFirst').innerHTML=' ';
					while(x1!==x2+1){
						summ = summ+x1;
						x1++;
					}
					resultDivFirst.append('Сумма чисел от x1 до x2 равна '+summ);
																	}
						}
			}