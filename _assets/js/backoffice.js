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
    if($('#mce-phone-country', frm).length>0) {
        //$("#mce-PHONE").intlTelInput();
        var countryData_all = $.fn.intlTelInput.getCountryData(),
        telInput = $("#mce-phone-country", frm),
        addressField = $("#mce-COUNTRY", frm);
    
    // set it's initial value
    var initialCountry = telInput.intlTelInput("getSelectedCountryData").iso2;
    addressField.val(initialCountry);
    telInput.intlTelInput({
        initialCountry: "auto",
        hiddenInput: "PHONE",
        geoIpLookup: function(callback) {
            $.getJSON('//freegeoip.net/json/?callback=?', function(data) {
                var country_code = data['country_code'] ? data['country_code'] : "";
                callback(country_code);
            
            });
        }});
    // listen to the telephone input for changes
    telInput.on("countrychange", function(e, countryData) {
        addressField.val(countryData.name);
    });
    
    }
    frm.submit(function(ev) {
        var errorMsg = $("#error-msg",frm), recaptchaMsg = $('.recaptcha-container .error', frm);
        var error_valiation = true;
        frm.valid();
        var recaptcha = $(".g-recaptcha-response", frm).val();
        if (recaptcha === "") {
            recaptchaMsg.removeClass('hidden');
            error_valiation = false;
        } else {
            recaptchaMsg.addClass('hidden');
        }
        if ($.trim(telInput.val())) {
            if (!telInput.intlTelInput("isValidNumber")) {
                telInput.addClass("error");
                errorMsg.removeClass("hidden");
                errorMsg.show();
                error_valiation = false;
            } else {
                errorMsg.addClass("hidden");
                errorMsg.hide();
            }
        }
        if (frm.valid() && error_valiation) {
            errorMsg.addClass("hidden");
            recaptchaMsg.addClass('hidden');
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
        ev.preventDefault();
        return false;
    });
/** End Donwload Enterprise */


var frm_whitepaper = $('form#bowak-contact-15');
frm_whitepaper.submit(function(ev) {
    if (frm_whitepaper.valid()) {
        $.ajax({
            type: frm_whitepaper.attr("method"),
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            url: frm_whitepaper.attr("action"),
            data: frm_whitepaper.serialize(),
            success: function(data) {
                $(".success-bowak").show();
                $(".error-bowak").hide();
                window.location.href = "https://gallery.mailchimp.com/f0f5ce5be3ec91715eb87cf9c/files/Wakanda_WP_mobileapps.pdf";
            },
            error: function(jqXHR, textStatus) {
                $(".success-bowak").hide();
                $(".error-bowak", frm_whitepaper).html('An error handler when saving to our database, please try again !');
                $(".error-bowak").show();
            }
        });
    }
    ev.preventDefault();
    return false;
});


/** Start Donwload Community */
    var frm_community = $('form#form-download-community');
    if($('#mce-phone-country', frm_community).length>0) {
        //$("#mce-PHONE").intlTelInput();
        var countryData_all = $.fn.intlTelInput.getCountryData(),
        telInput = $("#mce-phone-country",frm_community),
        addressField = $("#mce-COUNTRY", frm_community);
    
    // set it's initial value
    var initialCountry = telInput.intlTelInput("getSelectedCountryData").iso2;
    addressField.val(initialCountry);
    telInput.intlTelInput({
        initialCountry: "auto",
        hiddenInput: "PHONE",
        geoIpLookup: function(callback) {
            $.getJSON('//freegeoip.net/json/?callback=?', function(data) {
                var country_code = data['country_code'] ? data['country_code'] : "";
                callback(country_code);
            
            });
        }});
    // listen to the telephone input for changes
    telInput.on("countrychange", function(e, countryData) {
        addressField.val(countryData.name);
    });
    
    }
    frm_community.submit(function(ev) {
        var errorMsg = $("#error-msg",frm_community), recaptchaMsg = $('.recaptcha-container .error',frm_community);
        var error_valiation = true;
        frm_community.valid();
        var recaptcha = $(".g-recaptcha-response", frm_community).val();
        if (recaptcha === "") {
            recaptchaMsg.removeClass('hidden');
            error_valiation = false;
        } else {
            recaptchaMsg.addClass('hidden');
        }
        if ($.trim(telInput.val())) {
            if (!telInput.intlTelInput("isValidNumber")) {
                telInput.addClass("error");
                errorMsg.removeClass("hidden");
                errorMsg.show();
                error_valiation = false;
            } else {
                errorMsg.addClass("hidden");
                errorMsg.hide();
            }
        }
        if (frm_community.valid() && error_valiation) {
            errorMsg.addClass("hidden");
            recaptchaMsg.addClass('hidden');
            $.ajax({
                type: frm_community.attr("method"),
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                },
                url: frm_community.attr("action"),
                data: frm_community.serialize(),
                success: function(data) {
                    //$("#success-bowak").show();
                    $(".error-bowak", frm_community).hide();
                    download_community_success();
                },
                error: function(jqXHR, textStatus) {
                    $(".success-bowak", frm_community).hide();
                    $(".error-bowak", frm_community).html('An error handler when saving to our database, please try again !');
                    $(".error-bowak", frm_community).show();
                }
            });
        }
        ev.preventDefault();
        return false;
    });
/** End Donwload Enterprise */

var CaptchaCallback = function() {
    $('.g-recaptcha').each(function(index, el) {
        grecaptcha.render(el, {'sitekey' : '6LfIKS0UAAAAAG_sZHYdguIJvv1sNvpRC7YPiXeK'});
    });
};