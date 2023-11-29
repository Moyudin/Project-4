//for letters only
$.validator.addMethod("letters", function(value, element) {
    return this.optional(element) || value == value.match(/^[a-z0-9A-Z0-9\s-#&()]*$/);
});

// For only letters
$.validator.addMethod("onlyletters", function(value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z\s-()]*$/);
});

//for email only
$.validator.addMethod("emailtest", function(value, element) {
    return this.optional(element) || /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i.test(value);
});

$(document).ready(function(){
    $("form[name='registration']").validate({
       rules: {
        username: {
            required: true,
            minlength: 5,
            maxlength: 35,
            onlyletters: true,
        },
        password: {
            maxlength: 10,
            minlength: 10,
           required: true
        },
        emailid: {
            emailtest: true,
            required: true,
            email: true
        },
        test1:"required"
       },
       messages: {
        username: {
            required: "This Field is mandatory*",
            onlyletters: "Please use A-Z characters only",
            maxlength: "Please enter 35 Characters only",
        },
        emailid: {
            required: "Email field is required",
            email: "Please enter a valid Email id",
            emailtest: "Please enter a valid Email address"
        },
        password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 10 characters long"
        },
       }
    });
});