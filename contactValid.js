  // contact validation
  $(document).ready(function () {

    // console.log("this is validation");

    const name = document.getElementById('name')
    // const lastName = document.getElementById('lastName')
    const email = document.getElementById('email')
    const phoneNumber = document.getElementById('phoneNumber')
    const message = document.getElementById('message')
    let validname = false;
    // let validlastName = false;
    let validemail = false;
    let validphoneNumber = false;

    $('#failure').hide();
    $('#success').hide();


    // console.log(name,email,phoneNumber);

    name.addEventListener('blur', () => {
        console.log("name is blurred")
        //validate name
        let regex = /^[a-zA-Z]([0-9a-zA-Z\s+]){2,15}$/;
        let str = name.value;
        console.log(regex, str);
        if (regex.test(str)) {
            console.log('Your name is valid');
            name.classList.remove('is-invalid');
            validname = true;
        } else {
            console.log('Your name is not valid');
            name.classList.add('is-invalid');
            validname = false;
        }
    })

    email.addEventListener('blur', () => {
        console.log("email is blurred")

        //validate email
        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){1,7}$/;
        let str = email.value;
        console.log(regex, str);
        if (regex.test(str)) {
            console.log('Your email is valid');
            email.classList.remove('is-invalid');
            validemail = true;
        } else {
            console.log('Your email is not valid');
            email.classList.add('is-invalid');
            validemail = false;
        }
    })
    phoneNumber.addEventListener('blur', () => {
        console.log("phoneNumber is blurred")

        //validate phoneNumber
        let regex = /^([0-9]){10}$/;
        let str = phoneNumber.value;
        console.log(regex, str);
        if (regex.test(str)) {
            console.log('Your phoneNumber is valid');
            phoneNumber.classList.remove('is-invalid');
            validphoneNumber = true;
        } else {
            console.log('Your phoneNumber is not valid');
            phoneNumber.classList.add('is-invalid');
            validphoneNumber = false;
        }
    })

    let submit = document.getElementById('contactSubmit');
   submit.addEventListener('click', (e) => {
        e.preventDefault();


        console.log(validname, validemail, validphoneNumber);

        console.log('You clicked on submit');
        //submit your form here
        if (validname && validemail && validphoneNumber) {
            let failure = document.getElementById('failure');
            console.log('name,email,phonenumber are valid . Submitting the form');
            let success = document.getElementById('success');
            success.classList.add('show');
            const inputs = document.querySelectorAll('#name, #email, #phoneNumber, #message');
            var form_data=$("form").serializeArray();
            $.post('contactForm.php',form_data,function(response){
                $('#contact_msg').empty();
                if (response==1) {
                    inputs.forEach(input => {
                        input.value = '';
                    });
                    $('#success').show();
                    $('#btnPopup').click(function () {
                        $('#success').hide();
                        console.log("Popup closed");
                    });
                    
                } else {
                    console.log("fail");
                    let failure = document.getElementById('failure');
                    failure.classList.add('show');
                    $('#success').hide();
                    $('#failure').show();
                    $('#btnPopdown').click(function () {
                        $('#failure').hide();
                        console.log("Popdown closed");
                    });
                }
            });

        } else {
            console.log(' One of  name,email,phonenumber are not valid . Hence not submitting the form.Please correct them.');
            let failure = document.getElementById('failure');
            failure.classList.add('show');

            $('#success').hide();
            $('#failure').show();
            $('#btnPopdown').click(function () {
                $('#failure').hide();
                console.log("Popdown closed");
            });

        }


    });

});