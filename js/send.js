    $("input[name=phone]").intlTelInput({
       initialCountry: "ua",
       nationalMode: false,
       formatOnDisplay: true,
       utilsScript: "libs/jquery.form-sender/utils.js",
       preferredCountries: ['ua', 'ru', 'by'],
    });
    var _emailStyle = {
        header: {
            background_color: "f3f3f3",
            color: "3579eb"
        },
        body: {
            background_color: "f3f3f3",
            color: "000000"
        },
        footer: {
            background_color: "f3f3f3",
            color: "3579eb"
        }
    };
    FormSender.initSettings({
        dir: "libs/jquery.form-sender/",
        clearFields: false
    });
     var loading = function() {
        $("#ThankModal .modal-title").html("<h1>Обработка...</h1>");
        $('#ThankModal').modal("show");
    }
     FormSender.registerForm({
        id: "order-form",
        emailStyle: _emailStyle,
        onSuccess: function(json) {
            $("#ThankModal .modal-title").html("<h1>Отправлено!</h1>");
            $("#ThankModal .modal-text").html("<p>Ваша заявка успешно отправлена.</p>");
            function hideSuccess() {
              $('#ThankModal').modal('hide');
            }
        setTimeout(hideSuccess, 2000);
        },
        onError: function(json) {
            $("#ThankModal .modal-title").html("<h1>Ошибка!</h1>");
            $("#ThankModal .modal-text").html("<p>Произошла ошибка при отправке заявки. Пожалуйста, попробуйте отправить заявку еще раз.</p>");
        },
        onWait: function() {
            loading();
        }
    });
    FormSender.registerForm({
        id: "order-form2",
        emailStyle: _emailStyle,
        onSuccess: function(json) {
            $("#ThankModal .modal-title").html("<h1>Отправлено!</h1>");
            $("#ThankModal .modal-text").html("<p>Ваша заявка успешно отправлена.</p>");
            function hideSuccess() {
              $('#ThankModal').modal('hide');
            }
        setTimeout(hideSuccess, 2000);
        },
        onError: function(json) {
            $("#ThankModal .modal-title").html("<h1>Ошибка!</h1>");
            $("#ThankModal .modal-text").html("<p>Произошла ошибка при отправке заявки. Пожалуйста, попробуйте отправить заявку еще раз.</p>");
        },
        onWait: function() {
            loading();
        }
    });
    FormSender.registerForm({
        id: "order-form3",
        emailStyle: _emailStyle,
         onSuccess: function(json) {
            $("#ThankModal .modal-title").html("<h1>Отправлено!</h1>");
            $("#ThankModal .modal-text").html("<p>Ваша заявка успешно отправлена.</p>");
            function hideSuccess() {
              $('#ThankModal').modal('hide');
            }
        setTimeout(hideSuccess, 2000);
        },
        onError: function(json) {
            $("#ThankModal .modal-title").html("<h1>Ошибка!</h1>");
            $("#ThankModal .modal-text").html("<p>Произошла ошибка при отправке заявки. Пожалуйста, попробуйте отправить заявку еще раз.</p>");
        },
        onWait: function() {
            loading();
        }
    });
    $('input[name=phone]').keyup(function() {
        if ($(this).intlTelInput("isValidNumber")) {
            $(this).removeClass("input-invalid");
            $(this).addClass("input-valid");
        } else {
            $(this).removeClass("input-valid");
            $(this).addClass("input-invalid");
        }
    });