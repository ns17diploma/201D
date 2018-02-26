class ViewManager{

  constructor(){

  }
/**********************************************/
/*ERROR MESSAGE FUNCTION*/
error_message(input_id, message){
      let message_html = '<div class="ui pointing red label error_message">' +
      message +'</div>'
      status = false;
      $(input_id).after(message_html);
      $(input_id).closest('.field').addClass('error')
    }

/**********************************************/
/*ERROR EFFECT FUNCTION*/
remove_error_message(input_id){
      status = true;
      $('.error_message').remove()
      $(input_id).closest('.field').removeClass('error')
    }

/**********************************************/
/*CLEAR BUTTON FUNCTION*/
clear_button(){
      $('.input_save').val('')
      $('.error_message').remove()
      $('.field').removeClass('error')
  }

/**********************************************/
/*VALIDATE FAIL*/
validate_fail(message){
       let upper_message = `
        <div class="ui negative message error-message">
        <i class="close icon"></i>
        <div class="header">
          Register Form Submit Fail.
        </div>
        <p>Some Error is in Your Form Please Try Again</p>
        </div>
      `
       $('#message_box').html(upper_message)
    }

/**********************************************/
/*VALIDATE SUCCESS*/
validate_success(message){
       let upper_message = `
        <div class="ui negative message success">
        <i class="close icon"></i>
        <div class="header">
          Register Form Successful!.
        </div>
        <p>Your Form Register is Successful, Thank You</p>
        </div>
        `
        $('#message_box').html(upper_message)
    }
}
module.exports = ViewManager