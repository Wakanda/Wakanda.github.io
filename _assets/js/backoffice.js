/** Start Source file "https://backoffice.wakanda.io/js/wakanda-form.js" */
jQuery.validator.addMethod("email",function(a,b){var c=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;return this.optional(b)||c.test(a)},"Please enter a valid email address.");
$('.success-bowak').hide();$('.error-bowak').hide();$('.error-bowak').html('');
$('.bowak-contact').validate();
(function info_user(selector) {
    $.getJSON('//freegeoip.net/json/?callback=?', function(data) {
        var needed = ['ip', 'country_code', 'time_zone', 'latitude', 'longitude'];
        $(selector, document).append('<input type="hidden" name="date" value="'+new Date()+'">');
        $.each(data, function(index, value) {
            if(needed.indexOf(index) >= 0)
            $(selector, document).append('<input type="hidden" name="'+index+'" value="'+value+'">');
        }); 
    });
})('.bowak-contact');


if($('#download-timing').length) {
    setInterval(function() {
        var count = parseInt($('#download-timing').html());
        if (count !== 0) {
            $('#download-timing').html(count - 1);
        }else{
            $('#download-timing').removeAttr('id');
            $('.bowak-contact').submit();
        }
    }, 1000);
}
/** End source file */


/** Start Donwload Enterprise */
    var frm = $('form#form-download-enterprise');
    frm.submit(function(ev) {
        if (grecaptcha.getResponse() == '') {
            $('#recaptcha-container .error').removeClass('hidden');
            return false;
        }else {
            $('#recaptcha-container .error').addClass('hidden');
            if (frm.valid()) {
                $.ajax({
                    type: frm.attr("method"),
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    url: frm.attr("action"),
                    data: frm.serialize(),
                    success: function(data) {
                        //$("#success-bowak").show();
                        $(".error-bowak", frm).hide();
                        download_enterprise_succes();
                    },
                    error: function(jqXHR, textStatus) {
                        $(".success-bowak", frm).hide();
                        $(".error-bowak", frm).html('An error handler when saving to our database, please try again !');
                        $(".error-bowak", frm).show();
                    }
                });
            }
        }
        ev.preventDefault();
        return false;
    });
/** End Donwload Enterprise */