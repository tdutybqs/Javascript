function buttonClick()
{
	var summ = 0;
	var summ2 = 1;
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
					goto:
  						for (var i = x1; i <= x2; i++) {
    						for (var j = x1; j < i; j++) {
      							if (i % j == 0) continue goto;
      						}
								resultDivFirst.append('Простое число: '+i+'\n\n');
						}
					}
					
																	}
						}

function ClearScreen(){
	document.getElementById('x1').value = ' ';
	document.getElementById('x2').value = ' ';
}