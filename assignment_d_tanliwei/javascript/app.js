var fs = require('fs');

var $ = require('jquery');
const JsonFileManager = require('./OOP_Manager/JsonFileManager');
const ViewManager = require('./OOP_Manager/ViewManager');
const Member = require('./OOP_Manager/Member');
const Validator = require('./OOP_Manager/Validator');

$(function(){
  const vm = new ViewManager()
  const jfm = new JsonFileManager()
  const member = new Member()
  const validator = new Validator()
  
/**********************************************/  
/*CLEAR BUTTON*/

$('#clear_button').on('click', function(){
      vm.clear_button()
    })

/**********************************************/
/*SAVE BUTTON*/

  $('#save_button').click(function(){
    
/**********************************************/
/*VALIDATE VALUE*/  

        validator.DateEntry(obj)
        validator.EntrantNumber(obj)
        validator.NameEntrant(obj)
        validator.PictureTitle(obj)
        validator.PictureLocation(obj)

/**********************************************/
/*ERROR MESSAGE*/

      if ($('.field').hasClass('error')) {
       vm.validate_fail()

/**********************************************/
/*SUCCESS MESSAGE*/

      } else {
        vm.validate_success()
        
/**********************************************/
/*GET INFORMATION VALUE*/

            var obj = new Member (
            $('#entrant_number').val(),
            $('#name_entrant').val(),
            $('#picture_title').val(),
            $('#picture_location').val(),
            $('#date_entry').val(),
            $('#category').val(),
            $('#camare_type ').val(),
            
         );
        vm.clear_button()
        jfm.saveMembers(obj.transformObj());
    }
  })
})

 
