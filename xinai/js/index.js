var jsf = require('jsonfile');
var filename = 'jsfile.json';	
var fs = require('fs')
var $ = require('jquery');

$ (function() {
	$('#error0').hide();
	$('#error00').hide();
	$('#error01').hide();
	$('#error02').hide();
	var $result = false

	//save button
	$('#save').click(function() {
		emptyError()
		modules11()
		if ($result === false || $('body *').hasClass('error')) {
			console.log('ERROR')
			$('#error00').hide();
		}
		else{
			submit();
			console.log("Success")
			$('#error00').show();
			$('#error0').hide();
		}
	})

	function emptyError() {
		//input error
		$('.input').each(function() {
			$this = $(this)
			if ($this.val() === "") {
				$this.addClass('error')
				$('#error0').show();
				$result = false	
			}
			else{
				$('body *').removeClass('error')
				$('#error0').hide();
				$result = true
			}
			return $result
		})
	}

	$('#number1').on('keyup',function() {
		let mn = $('#number1').val();
		let ms = mn.toString();
		if (ms.length > 6) {
			var c = ms.substr((Number(ms.length)-6),6);
			$('#number1').val(c);
		}
		else if(ms.length !== 6){
			$('#error02').show();
		}
		else if(ms.length === 6){
			$('#error02').hide();
		}
	})

	function modules11() {
		let number = 0;
		let mn = $('#number1').val();
		let ms = mn.toString();

		for (var i = 0; i < ms.length; i++) {
			let a = 6 - i;
			number += Number(ms[i]) * a;
		}
		if ((number % 11) !== 0 || ms.length !== 6) {
			$('#error01').show()
		    $result = false
		}
		else if ((number % 11) === 0 && ms.length === 6) {
			$('#error02').hide()
		  	$('#error01').hide()
		  	$result = true
		}
		return $result
	}

	function submit(){

		var obj = {
			Entrants_Number: $('#number1').val(),
			Date_of_Entry: $('#date').val(),
			Name_of_Entrant: $('#name').val(),
			Picture_Title: $('#title').val(),
			Picture_Location: $('#location').val(),
			Category_Code: $('#code').val(),
			Camare_Type: $('#type').val()
		}

		if (!fs.existsSync(filename)) {
    		jsf.writeFileSync(filename, [])
  		}		
		var arr = jsf.readFileSync(filename);
		arr.push(obj);
		jsf.writeFileSync(filename,arr,{spaces: 1, EOL:'\r\n'});
	}	
})