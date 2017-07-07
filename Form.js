$(document).ready(function() {     
    $('#buttonClick').click(function(e) {
      e.preventDefault();
      if ($('#pwd').val() != $('#pwdConfirm').val()) {
  console.log($('#pwd').val())
    console.log('Error - please reenter')}
    else {
      $(this).attr('disabled','disabled'); // Switch to default grey
      $(this).html("Sending"); // Change text of button
      $.ajax({
        async: true,
        type: 'POST',
        url: "http://putsreq.com/pXCdPhkhgE0q3QjD0tjg",
        data: $('#commentForm #userInfo').serialize(),
        dataType: 'text',
        crossDomain: true,
        complete: function() {
          $("#submitInformation").removeAttr('disabled'); // Change back text of button
        },
        error: function(request, errorType, errorMessage) {
          $("#formStatus").text("Information entry failed. Error: " + errorType + " " + errorMessage);
        },
        success: function(response) {
          $("#formStatus").text("Information sent successfully.");
          $('#enterInformation').html("Enter Information");
        }
        });
      }
    });
 });

