jQuery(function() {
    var password = jQuery('.password-input');
    var rePassword = jQuery('.rePassword-input');
    var risultato = jQuery('.risultato');
    jQuery(password && rePassword).keydown(function() {
        jQuery('.submit').removeClass('disabled');
    })
        jQuery('.submit').click(function() {
          if (password.val() !== rePassword.val()) {
              jQuery(risultato).text('Password differenti');
          }else{
              jQuery(risultato).text('Password uguali');
          }
    })
  });