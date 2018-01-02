let jsf = require('jsonfile');
    let file = 'jsfile.json';
    var $ = require('jquery');
    score = 0;
   

    //Membership Number
    //check membership data
    $('.errormassage0').hide();
    $('.errormassage1').hide();
    $('.modulus').hide();
    $('#check').on('keyup',function(){

        for(a = 7; a < 10000; ++a)
        var x = this.value;
        var status = false;
        var y = x.toString();


      let totalmn = 0;
      for(var i = 0; i < x.length ; i++){
        let b = 6 - i;
        totalmn += x[i] * b;


       if ((totalmn % 11) == 0) {
          status = true;
          $('.modulus').hide();
          $('#errornumber').removeClass('error');
        }else{
          status = false;
          $('.modulus').show();
          $('#errornumber').addClass('error');
        }
      }
      
        var input_e = x.replace(/[^0-9\.]/g,'');
        if (input_e = input_e){
          status = true;
          $('.errormassage0').hide();;
          $('#errornumber').removeClass('error');
        }else{
          status = false;
          $('.errormassage0').show();
          $('#errornumber').addClass('error'); 
        }

        if (y.length > 6){
        var z = y.substr((Number(y.length)-a), 6);
        document.getElementById('check').value = z;
        }

        if (y.length < 6){
        status = false;
          $('.errormassage1').show();
          $('#errornumber').addClass('error');
        }else{
          status = true;
          $('.errormassage1').hide();;
          $('#errornumber').removeClass('error');
        }

        
      }) 


    //Name of Entrant
    $('.errormassage2').hide();
    $('#entrant').on('keyup',function(){
      if($(this).val() === ""){
        status = false;
        $('#errorentrant').addClass('error');
        $('.errormassage2').show();
      }else{
        status = true;
        $('#errorentrant').removeClass('error');
        $('.errormassage2').hide();
      }
    })


    //Picture Title
    $('.errormassage3').hide();
    $('#title').on('keyup',function(){
      if($(this).val() === ""){
        status = false;
        $('#errortitle').addClass('error');
        $('.errormassage3').show();
      }else{
        status = true;
        $('#errortitle').removeClass('error');
        $('.errormassage3').hide();
      }
    })

    //Picture Location
     $('.errormassage4').hide();
    $('#location').on('keyup',function(){
      if($(this).val() === ""){
        status = false;
        $('#errorlocation').addClass('error');
        $('.errormassage4').show();
     }else{
        status = true;
        $('#errorlocation').removeClass('error');
        $('.errormassage4').hide();
     }
    })

    //date of birth
    $('.errormassage5').hide();
    var elem = $("#date");
    if(elem) elem.val(elem.val().substr(0,10));
    $('#date').on('keyup', function(){
      if (elem.val().length > 10){
        elem.val(elem.val().substr(0, 10));
        status = false;
        $('#errorentry').addClass('error');
        $('.errormassage5').show();
      }else{
        status = true;
        $('#errorentry').removeClass('error');
        $('.errormassage5').hide();
      }           
    });

    

    //cancel
     $('.cancel').on('click',function(){
      location.reload();
    })

    //save button
    $('.inputcheck').hide();
    $('.save').on('click',function(){
    	vilidate();
      if($('.field').hasClass('error') || $('.common').val() === ""){
        $('.inputcheck').show();
      }else{
        $('.inputcheck').hide();

        var obj = {
          Entrant_Number:$('.input_number').val(),
          Name_of_Entrant:$('.input_entrant').val(),
          Picture_Title:$('.input_title').val(),
          Picture_Location:$('.input_location').val(),
          Date_of_Entry:$('.input_date').val(),
          Category_Code:$('.input_code').val(),
          Camera_Type:$('.input_type').val()
        }

        var arr = jsf.readFileSync(file);
        arr.push(obj);
        jsf.writeFile('jsfile.json',arr, function (err){

      	// Get the modal
      	var modal = document.getElementById('myModal');

      	// Get the button that opens the modal
      	var btn = document.getElementById("myBtn");

      	// Get the <span> element that closes the modal
      	var span = document.getElementsByClassName("close")[0];

      	// When the user clicks on the button, open the modal 
      	modal.style.display = "block";
      	

      	// When the user clicks on <span> (x), close the modal
      	span.onclick = function() {
      	    modal.style.display = "none";
      	}



      	// When the user clicks anywhere outside of the modal, close it
      	window.onclick = function(event) {
      	    if (event.target == modal) {
      	        modal.style.display = "none";
      	    }
      	}
		
        });
      }
    })

   
 

    function vilidate()
    {
      if ($('common').each()) {
      if ($('.common').val() === "" || $('.common1').val() === "" ){
        status = false;
        $('.inputcheck').show();
      	}else{
        	status = true;
        	$('.inputcheck').hide();
      	}
      }
    	return status;
  	}
	
