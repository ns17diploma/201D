var fs = require('fs');
var jsf = require('jsonfile');
var filename = ('jsonfile.js');
var $ = require('jquery');
var jQuery = $;
var chunk = require('chunk');

$(function(){

	$('#error00').hide();
	$('#error01').hide();
	$('#error02').hide();
	$('#error03').hide();
	var $result = false	 

	$('#button').click(function(){
		checkValidate()
		check()
	 	if ($result === false) {
			console.log('ERROR')
			$('#error00').hide();	
		}
		else { 
			checkform();
			console.log("YES")
			$('#error00').show();
		}
	})

	$('#entrant_number').on('keyup',function(){
		let mn = $('#entrant_number').val();
		let ms = mn.toString();
		if (ms.length > 6) {
			var c = ms.substr((Number(ms.length)-6), 6);
			$('#entrant_number').val(c);
		} 
		else if (ms.length !== 6) {
			$('#error03').show()
			$result = false
		}
		else if (ms.length === 6) {
			$('#error03').hide()
			$result = true
		}
	})

	function checkform(){
		var obj = {
			Entrants_Number:$('#entrant_number').val(),
			Date_Of_Entry:$('#date_entry').val(),
			Name_Of_Entrant:$('#name_entrant').val(),
			Picture_Title:$('#picture_title').val(),
			Picture_Location:$('#picture_location').val(),
			Category_Code:$('#category_code').val(),
			Camera_Type:$('#camera_type').val()
		} 
		if (!fs.existsSync(filename)) {
    		jsf.writeFileSync(filename, [])
 		}
		var arr=jsf.readFileSync(filename);
		console.log(arr)
		arr.push(obj);
		jsf.writeFileSync(filename,arr, {spaces:2});
	};

	function check(){
		$('.input').each(function(){
			let $this = $(this)
			if ($this.val() === ""){
				$('#error01').show()
				$result = false
			}
			else{
				$('#error01').hide()
				$result = true
			}
			return $result
		})
	}
})

	function checkValidate(){
		let x = $('#entrant_number').val();
		let y = x.toString();
		let z = 0;

		for(var i = 0; i<y.length;i++){
			let l = 6- i;
			z += Number(y[i]) * l;
		}
		console.log(typeof y)
		console.log(z)
		if ((z % 11) !== 0 || y.length !== 6){
			$('#error02').show()
			console.log("NO")
			$result = false
		}
		else if ((z % 11) === 0 || y.length === 6){
			$('#error02').hide()
			console.log('YES')
			$result = true
		}
	}
