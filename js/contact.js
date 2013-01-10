$(function() {
  // Validate the contact form
  $('#contactform').validate({
    // Specify what the errors should look like
    // when they are dynamically added to the form
    errorElement: "label",
    wrapper: "td",
    errorPlacement: function(error, element) {
      error.insertBefore( element.parent().parent() );
      error.wrap("<tr class='error'></tr>");
      $("<td></td>").insertBefore(error);
    },
 
    // Add requirements to each of the fields
    rules: {
      nome: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      mensagem: {
        required: true,
        minlength: 10
      }
    },
 
    // Specify what error messages to display
    // when the user does something horrid
    messages: {
      name: {
        required: "Por favor preencha com o seu nome.",
        minlength: jQuery.format("São necessários pelo menos {0} caracteres.")
      },
      email: {
        required: "Por favor preencha com o seu email.",
        email: "Utilize um email válido."
      },
      mensagem: {
        required: "Por favor preencha com a sua mensagem.",
        minlength: jQuery.format("São necessários pelo menos {0} caracteres.")
      }
    },
 
    // Use Ajax to send everything to processForm.php
    submitHandler: function(form) {
      $("#send").attr("value", "Sending...");
      $(form).ajaxSubmit({
        target: "#response",
        success: function(responseText, statusText, xhr, $form) {
          $(form).slideUp("fast");
          $("#response").html(responseText).hide().slideDown("fast");
        }
      });
      return false;
    }
  });
});
