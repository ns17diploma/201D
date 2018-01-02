
var jsf = require ('jsonfile');
var filename ='jsonfile.json'
var fs = require('fs')
var $ = require('jquery');

function error() {

	$('#error0').hide();
	$('#error01').hide();
	$('#error02').hide();
	$('#error03').hide();
	

}

$(function(){
	error()
	function write(){
		var obj = {
			Number: $('#number').val(),
			Number_of_Entrant: $('#name_of_entrant').val(),
			Picture_Title: $('#picture_title').val(),
			Picture_Location: $('#picture_location').val(),
			Date_of_Entry: $('#date_of_entry').val(),
			Category_Code: $('#category_code').val(),
			Camera_Type: $('#camera_type').val()
		}

		if (!fs.existsSync(filename)) {
    	jsf.writeFileSync(filename, [])
    	}
		var arr = jsf.readFileSync(filename);
		arr.push(obj);
		jsf.writeFileSync(filename,arr,{spaces:1});	
	}

	$('#error0').hide();
	$('#error01').hide();
	$('#error02').hide();
	$('#error03').hide();
	

	$('#save').click(function(){
		// $('#error0').show();

		modules();
		
		if ($result === false /*|| $('body *').hasClass('error')*/) {
		$('#error01').hide();
		$('#error02').hide();
		$('#error03').hide();
		$('#error0').show();	

		}

		else {
		write();
		$('#success').show();
		} 
	})

	var result = true;

/**************************************/

	$('#number').on('keyup',function(){
		let mn = $('#number').val();
		let ms = mn.toString();
		if (ms.length > 6) {
			var c = ms.substr((Number(ms.length)-6), 6);
			$('#number').val(c);
		} 
		else if (ms.length !== 6) {
			$('#error02').show();
			$result = false
		}
		else if (ms.length === 6) {
			$('#error02').hide();
			$result = true
		}
	})

	function modules() {
		let number = 0;
		let mn = $('#number').val();
		let ms = mn.toString();
		for(var i = 0; i< ms.length; i++){
		    let x = 6 - i;
		    number += Number(ms[i]) * x;
		}

		if ((number % 11) !== 0 || ms.length !== 6) {
		    $('#error03').show()
		    $result = false
		}
		
		else if ((number % 11) === 0 && ms.length === 6) {
		  	$('#error03').hide()	
		  	$result = true
		}

		return $result
	}


});
