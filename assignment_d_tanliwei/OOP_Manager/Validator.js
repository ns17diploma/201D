////REQUIRE SOURCE

const $ = require('jquery')
const ViewManager = require('./ViewManager')
const vm = new ViewManager()
class Validator {

/*********************************************/
/**DATE OF GAMES YEARS NOT MORE THAN 5 DIGITS**/
DateEntry(obj){

  if ($('#date_entry').val().length > 10 ) {
        vm.error_message('#date_entry', 'Incorrect Date of Join Format');
      }else{
        vm.remove_error_message('#date_entry');
      }
    }
EntrantNumber(obj){
      var modulus_eleven = 0;
      for(var i = 0; i<$('#entrant_number').val().length; i++){
        let x = 6 - i;
        modulus_eleven += $('#entrant_number').val()[i] * x;
      }
      ///
      if ($('#entrant_number').val().length !== 6) {
        vm.error_message('#entrant_number', 'Entrant Number is not 6 digits');
      }else{
        if (modulus_eleven % 11 !== 0) {
          vm.error_message('#entrant_number', 'Entrant Number is not a valid modulus 11 number');
        }else{
          vm.remove_error_message('#entrant_number');
        }
       
      }
    }
  
    ////
NameEntrant(obj){
      if ($('#name_entrant').val() === "" ) {
        vm.error_message('#name_entrant', 'Incorrect Name of Entrant Format');
      }else{
        vm.remove_error_message('#name_entrant');
      }
}

PictureTitle(obj){
      if ($('#picture_title').val() === "" ) {
        vm.error_message('#picture_title', 'Incorrect Picture Title Format');
      }else{
        vm.remove_error_message('#picture_title');
      }
    }

PictureLocation(obj){

      if ($('#picture_location').val() === "" ) {
        vm.error_message('#picture_location', 'Incorrect Picture Location Format');
      }else{
        vm.remove_error_message('#picture_location');
      }
    }
  }
module.exports = Validator