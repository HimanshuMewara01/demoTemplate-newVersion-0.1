



// $(document).ready(function () {

  $(".portfolioForm").validate({
      rules: {
        portfolioName: {
            required: true,
            minlength: 4  // <-- removed underscore
        },
          portfolioEmail: {
              required: true,
              email: true
          },
          portfolioPhone: {
              required: true,
              minlength: 9,
              maxlength: 10
              
          },
          captchaThree: {
            required: true
        }
      },
      messages: {
        portfolioName: {
            required: "Enter recipient name",
            minlength: "Name should be at least {0} characters long" // <-- removed underscore
        },
    
          portfolioEmail: {
              required: "Please provide a valid email"
            
          },
          portfolioPhone: {
              required: "Please provide a valid phone number",
              maxlength: "Ph No. should be of 10 digit"
            
          },
          captchaThree: {
            required: "Please fill the captcha field"
        },
        },
      submitHandler: function (form) {
        if($("#quizThree").val() != $('#labelCaptchaThree').data('res'))
        { alert("Please Check your Captcha Value"); }
        else{ 
          $('#AjaxLoaderThree').show();
          $('.innerTextThree').hide();
      //   if (!grecaptcha.getResponse()) {
      //     alert('Please confirm captcha to proceed')
      // } else {
         
      //   var token = grecaptcha.getResponse();
          // alert('valid form');  
              var formData = {
      name: $("#portfolioName").val(),
      email: $("#portfolioEmail").val(),
      phone: $("#portfolioPhone").val(),
      captcha: $("#quizThree").val(),
      labelCaptcha: $('#labelCaptchaThree').data('res'),
      // grecaptcha: token,

    };
          $.ajax({
                  type: "POST",
                  url: "serviceDiscoveryForm.php",
                  data: formData,
                  dataType: "json",
                  // encode: true,
                  success: function (response) {
                    $('#AjaxLoaderThree').hide();
                    $('.innerTextThree').show();
                    // alert("sent");
                    console.log(response)
                    $(".portfolioForm .alert-success").slideToggle("slow").delay(2000).slideToggle("slow");
                },
                error: function (response) {
                    alert("something went wrong");
                }
                });
                // $(".portfolioForm .alert-success").slideToggle("slow").delay(2000).slideToggle("slow");
                if(formData.name != "" && formData.email != "" && formData.phone != ""){
                  $("input[type='text']").val("");
                  $("input[type='email']").val("");
                  // $("input[type='email']").val("");
                  // $(".portfolioForm .alert-success").slideToggle("slow").delay(2000).slideToggle("slow");
                  }
          return false;  // for demo
      }
    }
  });

// });

// $(document).ready(function () {

  $(".contactForm").validate({
      rules: {
        contactName: {
            required: true,
            minlength: 4  // <-- removed underscore
        },
          contactEmail: {
              required: true,
              email: true
          },
          contactPhone: {
              required: true,
          },
          "checkbox[]": {
            required: true,
            minlength: 1
          },
          captcha: {
            required: true
        }
      },
      messages: {
        contactName: {
            required: "Enter recipient name",
            minlength: "Name should be at least {0} characters long" // <-- removed underscore
        },
    
          contactEmail: {
              required: "Please provide a valid email",
             
            
          },
          contactPhone: {
              required: "Please provide a valid phone number"
            
          },
          "checkbox[]": "Please select at least one checkbox",
        },      
        captcha: {
          required: "Please fill the captcha field"
      },
      submitHandler: function (form) { 
        if($("#quiz").val() != $('#labelCaptcha').data('res'))
        { alert("Please Check your Captcha Value"); }
        else{
          // alert('valid form'); 
          $('#AjaxLoaderFour').show();
          $('.innerTextFour').hide();
          var array = []
var checkboxes = document.querySelectorAll('input[name=servicecheckbox]:checked')

for (var i = 0; i < checkboxes.length; i++) {
  array.push(checkboxes[i].value)
} 
              var formData = {
      name: $("#contactName").val(),
      email: $("#contactEmail").val(),
      phone: $("#contactPhone").val(),
      captcha: $("#quiz").val(),
      labelCaptcha: $('#labelCaptcha').data('res'),
      // grecaptcha: token, 
      array: array
    };
  //   if (grecaptcha.getResponse() == ""){
  //     alert("You can't proceed , please confirm you are not a bot!");
  // } else {
            $.ajax({
                  type: "POST",
                  url: "contactForm.php",
                  data: formData,
                  dataType: "json",
                  // encode: true,
                  success: function (response) {
                    $('#AjaxLoaderFour').hide();
                    $('.innerTextFour').show();
                    // alert("sent");
                    console.log(response)
                    $(".contactForm .alert-success").slideToggle("slow").delay(2000).slideToggle("slow");
                },
                error: function (response) {
                    alert("something went wrong");
                }
                });
              
                // $(".portfolioForm .alert-success").slideToggle("slow").delay(2000).slideToggle("slow");
                if(formData.name != "" && formData.email != "" && formData.phone != "" ){
                  $("input[type='text']").val("");
                  $("input[type='email']").val("");
                  // $("input[type='checkbox']").val("unchecked");
                  $('#checkboxOne').attr('checked', false); // Unchecks it
                  $("#checkboxTwo").prop("checked", false);
                  $("#checkboxThree").prop("checked", false);
                  $("#checkboxFour").prop("checked", false);
                  // $(".contactForm .alert-success").slideToggle("slow").delay(2000).slideToggle("slow");
                  }
          return false;  // for demo
      }
  //     alert("Thank you");
    }


    
  });

// });

// $(document).ready(function () {

  $(".popupForm").validate({
    rules: {
      popupName: {
          required: true,
          minlength: 4  // <-- removed underscore
      },
        popupEmail: {
            required: true,
            email: true
        },
        popupPhone: {
            required: true,
            
        },
        how_soon_do_you_want_to_hire: {
            required: true
        }
    },
    messages: {
      popupName: {
          required: "Enter recipient name",
          minlength: "Name should be at least {0} characters long" // <-- removed underscore
      },
  
        popupEmail: {
            required: "Please provide a valid email"
          
        },
        popupPhone: {
            required: "Please provide a valid phone number"
          
        },
        how_soon_do_you_want_to_hire: {
          required: "Please select a input"
      },
      you_need_support_with: {
          required: "Please select a input"
      },
        message: {
          required: "Please fill the field"
      }
      },
    submitHandler: function (form) { 
        // alert('valid form');  
            var formData = {
    name: $("#popupName").val(),
    email: $("#popupEmail").val(),
    phone: $("#popupPhone").val(),
    howSoon: $("#how_soon_do_you_want_to_hire").val(),
    support: $("#you_need_support_with").val(),
    message: $("#message").val(),

  };
        $.ajax({
                type: "POST",
                url: "popupForm.php",
                data: formData,
                dataType: "json",
                encode: true,
              }).done(function (data) {
                console.log(data);
              });
              // $(".portfolioForm .alert-success").slideToggle("slow").delay(2000).slideToggle("slow");
              if(formData.name != "" && formData.email != "" && formData.phone != ""){
                $("input[type='text']").val("");
                $("input[type='email']").val("");
                $("input[type='phone']").val("");
                $(".popupForm .alert-success").slideToggle("slow").delay(2000).slideToggle("slow");
                }
        return false;  // for demo
    }
});

// });

// $(document).ready(function () {

  $(".homeDetailForm").validate({
    rules: {
      homeName: {
          required: true,
          minlength: 4  // <-- removed underscore
      },
        homePhoneNumber: {
            required: true,
            minlength: 9,
            maxlength: 10
            
        },
        homeEmail: {
          required: true,
          email: true
      },
        homeStartProject: {
            required: true
        },
        homeMessage: {
            required: true
        },
        captcha: {
            required: true
        }
    },
    messages: {
      homeName: {
          required: "Enter recipient name",
          minlength: "Name should be at least {0} characters long" // <-- removed underscore
      },
      homePhoneNumber: {
        required: "Please provide a valid phone number"
      
    },
        homeEmail: {
            required: "Please provide a valid email"
          
        },
        homeStartProject: {
          required: "Please select a input"
      },
        homeMessage: {
          required: "Please fill the field"
      },
        captcha: {
          required: "Please fill the captcha field"
      }
      },
    
    submitHandler: function (form) { 
      // alert('valid form');  
      if($("#quiz").val() != $('#labelCaptcha').data('res'))
      { alert("Please Check your Captcha Value"); }
      else{
          $('.innerTextOne').hide();
          $('#AjaxLoaderOne').show();
            var formData = {
    name: $("#homeName").val(),
    email: $("#homeEmail").val(),
    phone: $("#homePhoneNumber").val(),
    startProject: $("#homeStartProject").val(),
    message: $("#homeMessage").val(),
    captcha: $("#quiz").val(),
    labelCaptcha: $('#labelCaptcha').data('res'),
  };
        $.ajax({
                type: "POST",
                url: "homeForm.php",
                data: formData,
                dataType: "json",
                // encode: true,
                success: function (response) {
                  $('#AjaxLoaderOne').hide();
                  $('.innerTextOne').show();
                  // alert("sent");
                  console.log(response)
                  $(".homeDetailForm .alert-success").slideToggle("slow").delay(2000).slideToggle("slow");
              },
              error: function (response) {
                  alert("something went wrong");
              }
              
                
              });
              if(formData.name != "" && formData.email != "" && formData.phone != ""){
                $("input[type='text']").val("");
                $("input[type='email']").val("");
                $("input[type='phone']").val("");
                // $(".homeDetailForm .alert-success").slideToggle("slow").delay(2000).slideToggle("slow");
                }
        return false;  // for demo
  
    }
  }

});

// });
// $(document).ready(function () {

  $(".servicesPopUpForm").validate({
    rules: {
      homeName: {
          required: true,
          minlength: 4  // <-- removed underscore
      },
        homePhoneNumber: {
            required: true,
            minlength: 9,
            maxlength: 10
            
        },
        homeEmail: {
          required: true,
          email: true
      },
        homeStartProject: {
            required: true
        },
        homeProjectSupport: {
            required: true
        },
        homeMessage: {
            required: true
        },
        captcha: {
          required: true
      }
    },
    messages: {
      homeName: {
          required: "Enter recipient name",
          minlength: "Name should be at least {0} characters long" // <-- removed underscore
      },
      homePhoneNumber: {
        required: "Please provide a valid phone number"
      
    },
        homeEmail: {
            required: "Please provide a valid email"
          
        },
        homeStartProject: {
          required: "Please select a input"
      },
        homeProjectSupport: {
          required: "Please select a input"
      },
        homeMessage: {
          required: "Please fill the field"
      },
      captcha: {
        required: "Please fill the captcha field"
    }
      },
    submitHandler: function (form) { 
        // alert('valid form');  
        // alert('valid form');  
        if($("#quiz").val() != $('#labelCaptcha').data('res'))
        { alert("Please Check your Captcha Value"); }
        else{
          $('#AjaxLoaderTwo').show();
            $('.innerTextTwo').hide();
            var formData = {
    name: $("#homeName").val(),
    email: $("#homeEmail").val(),
    phone: $("#homePhoneNumber").val(),
    startProject: $("#homeStartProject").val(),
    projectSupport: $("#homeProjectSupport").val(),
    message: $("#homeMessage").val(),
    captcha: $("#quiz").val(),
    labelCaptcha: $('#labelCaptcha').data('res'),

  };
        $.ajax({
                type: "POST",
                url: "servicesPopUpForm.php",
                data: formData,
                dataType: "json",
                // encode: true,
                success: function (response) {
                  $('#AjaxLoaderTwo').hide();
                  $('.innerTextTwo').show();
                  // alert("sent");
                  console.log(response)
                  $(".servicesPopUpForm .alert-success").slideToggle("slow").delay(2000).slideToggle("slow");
              },
              error: function (response) {
                  alert("something went wrong");
              }
              });
                
            
              if(formData.name != "" && formData.email != "" && formData.phone != ""){
                $("input[type='text']").val("");
                $("input[type='email']").val("");
                $("input[type='phone']").val("");
                // $(".homeDetailForm .alert-success").slideToggle("slow").delay(2000).slideToggle("slow");
                }
        return false;  // for demo
  
    }
  }
});

// });





