

/** Start Fixed Menu **/
var menu = $('.main-nav');
var origOffsetY = menu.offset().top;

function scroll() {
    var origOffsetY = menu.offset().top;
    //console.log('window'); console.log($(window).scrollTop());
    //console.log('origOffsetY'); console.log(origOffsetY);
    if ($(window).scrollTop() >= origOffsetY && origOffsetY>0) {
        $('.fixed-top').addClass('sticky');
    } else {
        $('.fixed-top').removeClass('sticky');
    }
}
document.onscroll = scroll;

$('#navbarmenu-toggle').click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});
/** End Fixed Menu **/

$('#section-feature-highlights a[href^="#"]').click(function(){
	var the_id = $(this).attr("href");

	$('html, body').animate({
		scrollTop:$(the_id).offset().top - 40
	}, 'slow');
	return false;
});


/*
 * Download Community Edition links configuration
 */

var versionCommunityLink = { 
    stable: "1.1.4",
    preview: "2.0.1"
};

var baseCommunityLink = "https://github.com/Wakanda/wakanda-digital-app-factory/releases/download/";

function partialCommunityLink(stableOrPreview, allOrServer) { 
    return baseCommunityLink+"v"+versionCommunityLink[stableOrPreview]+"/wakanda-community-"+allOrServer+"_"+versionCommunityLink[stableOrPreview]+"_";
}

function communityLinks(stableOrPreview) {
    return {
        macOS: partialCommunityLink(stableOrPreview,"all")+"x64.dmg",
        win32: partialCommunityLink(stableOrPreview,"all")+"x86.msi",
        win64: partialCommunityLink(stableOrPreview,"all")+"x64.msi",
        linux32: partialCommunityLink(stableOrPreview,"server")+"i386.deb",
        linux64: partialCommunityLink(stableOrPreview,"server")+"amd64.deb"
    }
}

/*
 * Headline typing effect configuration
 */

$(function() {
    var options = {
      stringsElement: $('#typed-strings'),
      startDelay: 1500,
      backDelay: 1000,
      typeSpeed: 80
    }
    $(".typed-text").typed(options);
});

/*
 * Download button utils function
 */

var platformLinkCollection = {
    community : communityLinks("stable"),
    communityPreview : communityLinks("preview")
};

var downloadLabel = "";
var communityDownloadLink = "";

function getPlatform() {
    var OS = "";
    if (/Windows|Win32|WOW64|Win64/.test(navigator.userAgent)) {
        OS = "win64"
        if (/Win32/.test(navigator.appVersion + navigator.userAgent)) {
            OS = "win32";
        }
    } else if (/Mac/.test(navigator.userAgent)) {
        OS = "macOS";
    } else if (/Linux|X11/.test(navigator.userAgent)) {
        OS = "linux64";
        if (/i686|i386/.test(navigator.appVersion + navigator.userAgent)) {
            OS = "linux32";
        }
    }
    return OS;
}

var platformNames = {
    macOS: "macOS",
    win64: "Windows (64 bits)",
    win32: "Windows (32 bits)",
    linux32: "Linux 32bits (Server only)",
    linux64: "Linux 64bits (Server only)",
};

var platformDisplayedNames = {
    macOS: "macOS",
    win64: "Windows",
    win32: "Windows",
    linux32: "Linux",
    linux64: "Linux",
};

/**
 * Download button main logic
 */

var stableLinks = communityLinks("stable");
var previewLinks = communityLinks("preview");
var platform = getPlatform();
var entrepriseLink = {
    macOS: "//bo.wakanda.io/productionchannel/1.1.4/mac/wakanda-enterprise-all_1.1.4_x64.dmg",
    win64: "//bo.wakanda.io/productionchannel/1.1.4/windows/wakanda-enterprise-all_1.1.4_x64.msi",
    win32: "//bo.wakanda.io/productionchannel/1.1.4/windows/wakanda-enterprise-all_1.1.4_x86.msi",
    linux32: "//bo.wakanda.io/productionchannel/1.1.4/linux/wakanda-enterprise-server_1.1.4_i386.deb",
    linux64: "//bo.wakanda.io/productionchannel/1.1.4/linux/wakanda-enterprise-server_1.1.4_amd64.deb"
};


$(".platform-name").append(platformDisplayedNames[getPlatform()]);
$("#version-stable").append(versionCommunityLink.stable);
//$("#version-preview").append(versionCommunityLink.preview);
$("#community-dl").attr('href', stableLinks[platform]);
$(".community-dl").each(function()  { $(this).attr('href', stableLinks[platform]) });

for (var key in platformNames) {
    document.createElement("td", document.createElement)
    $( "#all-downloads" ).append(
        "<tr> \
            <td class=\"os\">"+platformNames[key]+"</td> \
            <td><a class=\"fa fa-download stable\" href=\""+stableLinks[key]+"\"></a></td> \
            " + //<td><a class=\"fa fa-download preview\" href=\""+previewLinks[key]+"\"></a></td> \
        "</tr>"
    );
};

/**
 * Home page
 */
if($("#community-download form").length) {

    $("option[data-detected='"+platform+"']" ).attr('selected', 'selected');
    //$("select, input:checkbox, input:radio, input:file", "#community-download").uniform();
    $.validator.addMethod('email', function (value, element) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return this.optional(element) || filter.test(value);
    }, "adresse mail invalide");

    $("#community-download form").validate({
        rules:{
            "EMAIL":{
                required:true,
                email: true
            }
        },
        errorPlacement: function (error, element) {
            if (element.attr("type") == "checkbox") {
                console.log('eeee');
                //error.insertAfter($(element).parent());
                $(element).parent().append(error);
            }else{
                error.insertAfter($(element));
            }
        }
    });
    $("#community-download form").submit(function() {
        if (grecaptcha.getResponse() == '') {
            $('#recaptcha-container .error').removeClass('hidden');
            return false;
        }else {
            $('#recaptcha-container .error').addClass('hidden');
        }
        if($(this).valid()) {
            var selectedPlateform = $( "#mce-OS option:selected", this).attr("data-detected");
            var link = entrepriseLink[selectedPlateform];
            $('#download-community').attr('href', link);
            $('#download-community')[0].click();
        }
    });

}
/**
 * Pricing Page
 */
$(".show-support").click(function(){
    var target = '#'+$(this).attr('data-target');
    if($(target).hasClass('hidden')){
        $(target).removeClass('hidden');
        $('i', this).addClass('rotated');
    }else {
        $(target).addClass('hidden');
        $('i', this).removeClass('rotated');
    }
});
$('button.feature').click(function(){
    var target = '#'+$(this).attr('data-target');
    if($(target).hasClass('hidden')){
        $(target).removeClass('hidden');
        $('.word', this).text('Hide');
    }else {
        $(target).addClass('hidden');
        $('.word', this).text('Show');
    }
});
$('#basic .support .btn ').click(function() {
        $(this).addClass("on").siblings(".btn").removeClass("on");
        var texte = $(this).text();
        var price = $(this).attr("attr-price");
        $('#basic .txt-support.'+texte).addClass("on").siblings(".txt-support").removeClass("on");
        $("#basic .txt-price span").text(price);
});
// DL
$('.cloud .support .btn ').click(function() {
    $(this).addClass("on").siblings(".btn").removeClass("on");
    var texte = $(this).text();
    priceSupportCloud =  parseInt($('.cloud-support button.on ').attr("attr-price"),10);
    var price = parseInt($(this).attr("attr-price"),10);
    $('.cloud .txt-support.'+texte).addClass("on").siblings(".txt-support").removeClass("on");
    var sum = priceSupportCloud  +  price  ;
    $(".cloud .txt-price span").text(sum);
});
//Pricing cloud
$('.cloud-support button ').click(function() {
    $(this).addClass("on").siblings(".btn").removeClass("on");
    var priceEvtCloud =  parseInt($('.cloud .support .btn.on ').attr("attr-price"),10);
    var priceCloud = parseInt($(this).attr("attr-price"),10);
    var somme = priceEvtCloud + priceCloud ;
    $(".cloud .txt-price span").text(somme );
});

/*** ================== Start Marketplace Script ================== ***/
var $container;
var filters = {};
var stored_data = [];
$(function(){
    if($('.marketplace').length) {
        markete_init();
    }
});

/**
 * Initialize markete function
 */
function markete_init() {
    // Add flip animation to consultant
     $(".flipcard").flip({
       axis: 'x',
      trigger: 'hover',
       speed:800
      });

    // Create stored filter for each tabs
    $('#market-tab a').each(function(){
        var tab = $(this).attr('href').replace('#', '');
        stored_data[tab] = {'qsRegex': false, comboFilter: false};
    });

    // Apply filtre for active tab
    apply_filter($('.nav-link.active').attr('href').replace('#', ''));

    // Apply filter on tab change
    $('#market-tab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show');
        apply_filter($(this).attr('href').replace('#', ''));
    });
}

function apply_filter(tab) {
    $container = $('#filtered_items_'+tab);
    var qsRegex;
    var comboFilter;
    
    // Initialize filter
    var $filter = $container.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows',
        filter: function() {
            var $this = $(this);
            var searchResult = stored_data[tab].qsRegex ? $this.text().match( stored_data[tab].qsRegex ) : true;
            var buttonResult = stored_data[tab].comboFilter ? $this.is( stored_data[tab].comboFilter ) : true;
            return searchResult && buttonResult;
        }
    });

    // do stuff when checkbox / select change
    $('#options_'+tab).on( 'change', function( jQEvent ) {
        var $element = $( jQEvent.target );

        if($element.is(":checkbox")) {
            manageElement( $element, 'checkbox' );
        }
        else if ( $element.is( "select" ) ) {
            manageElement( $element, 'select' );
        }
        
        stored_data[tab].comboFilter = getComboFilter( filters );

        $container.isotope();

    });

    // Apply search
    var $quicksearch = $('#quicksearch_'+tab).keyup( debounce( function() {
        stored_data[tab].qsRegex = new RegExp( $quicksearch.val(), 'gi' );
        $container.isotope();
    }) );

    // Inialize country dropdown
    if(tab == 'consultant') {
        init_country();
    }
}

/**
 * Set timeout after keyup
 */
function debounce( fn, threshold ) {
  var timeout;
  return function debounced() {
    if ( timeout ) {
      clearTimeout( timeout );
    }
    function delayed() {
      fn();
      timeout = null;
    }
    setTimeout( delayed, threshold || 100 );
  };
}

/**
 * Grouped filter for isotope
 */
function getComboFilter( filters ) {
    var i = 0;
    var comboFilters = [];
    var message = [];

    for ( var prop in filters ) {
        message.push( filters[ prop ].join(' ') );
        var filterGroup = filters[ prop ];
        // skip to next filter group if it doesn't have any values
        if ( !filterGroup.length ) {
        continue;
        }
        if ( i === 0 ) {
        // copy to new array
        comboFilters = filterGroup.slice(0);
        } else {
        var filterSelectors = [];
        // copy to fresh array
        var groupCombo = comboFilters.slice(0); // [ A, B ]
        // merge filter Groups
        for (var k=0, len3 = filterGroup.length; k < len3; k++) {
            for (var j=0, len2 = groupCombo.length; j < len2; j++) {
            filterSelectors.push( groupCombo[j] + filterGroup[k] ); // [ 1, 2 ]
            }

        }
        // apply filter selectors to combo filters for next group
        comboFilters = filterSelectors;
        }
        i++;
    }

    var comboFilter = comboFilters.join(', ');
    return comboFilter;
}

/**
 * Add filter element to grouped case
 */
function manageElement( $el, $type ) {
    var element = $el[0];

    var group = $el.parents('.option-set').attr('data-group');
    // create array for filter group, if not there yet
    var filterGroup = filters[ group ];
    if ( !filterGroup ) {
        filterGroup = filters[ group ] = [];
    }

    if($type == 'checkbox') {
        var isAll = $el.hasClass('all');
        // reset filter group if the all box was checked
        if ( isAll ) {
            delete filters[ group ];
            if ( !element.checked ) {
            element.checked = 'checked';
            }
        }
        // index of
        var index = $.inArray( element.value, filterGroup );

        if ( element.checked ) {
            var selector = isAll ? 'input' : 'input.all';
            $el.siblings( selector ).removeAttr('checked');


            if ( !isAll && index === -1 ) {
            // add filter to group
            filters[ group ].push( element.value );
            }

        } else if ( !isAll ) {
            // remove filter from group
            filters[ group ].splice( index, 1 );
            // if unchecked the last box, check the all
            if ( !$el.siblings('[checked]').length ) {
            $el.siblings('input.all').attr('checked', 'checked');
            }
        }
    }
    else if($type == 'select') {
        var values = $(element).val().map(function(a) { return "." + a; });
        filters[ group ] =  values;
    }
}


/**
 * Inialize country
 */
function init_country() {
    $("[name='country']").select2({
        placeholder: "Type the first letters",
        templateResult: formatCountry,
        data: isoCountries,
        maximumSelectionLength: 1,
    });
}

/**
 * Add icon country on dropdown
 */
function formatCountry (country) {
    if (!country.id) { return country.text; }
    var $country = $(
    '<span class="flag-icon flag-icon-'+ country.id.toLowerCase() +' flag-icon-squared"></span>' +
    '<span class="flag-text">'+ country.text+"</span>"
    );
    return $country;
};

/*** ================== End Marketplace Script ================== ***/



/*** ================== Start What we do Script ================== ***/

if($('.what-we-do').length) {

    // on click show detail
    $(".show-detail").click(function(){
        var element = $(this).parent().find('.details');
        if ($(element).css('display') == 'none' ){
            $(element ).slideDown( "slow" );
            $('i', this).addClass('rotated');
        }else {
            $(element ).slideUp( "slow" );
            $('i', this).removeClass('rotated');
        }
        return false;
    });

    // on charge page caclule sum price
    (function init_price() {
        $( ".block-comp" ).each(function() {
            calculate(this);
        })
    })();

    // on click container caclule sum price
    $(document).on( "click", "[data-price-container]", function () {
        calculate($(this).closest( ".block-comp" ));
    } );

    // on change price element caclule sum price
    $(document).on( "click", "[data-price]", function () {
        var parent = $(this).closest( ".tab-pane" ).attr('id');
        calculate($('#'+parent).closest( ".block-comp" ));
    } );

    // calculate price function
    function calculate(data_price_container) {
        var sum = 0;
        $('[data-price-container]', data_price_container).each(function() {
            if($(this).hasClass('active')){
                sum += parseFloat($(this).attr('data-price-container'));
                var id = $(this).attr('href');
                console.log('ID'); console.log(id);
                if(id) {
                    $('[data-price]', id).each(function() {
                        if($(this).hasClass('active') || $(this).is(':checked')) {
                            sum += parseFloat($(this).attr('data-price'));
                        }
                        else if($(this).is('select')){
                            sum += parseFloat($(this).val());
                        }
                    });
                }
            }
        });
        $('.comp-footer .price strong', data_price_container).html('$' + sum);
    }

    // display target element
    $(document).on('click', '[data-target]', function(){
        var id = $(this).attr('data-target');
        var parent = $(this).closest( "[data-target-container]" );
        $('[data-target-cible]', parent).each(function(){
            if(!$(this).hasClass('hidden')) {
                $(this).addClass('hidden');
            }
        })
        $('#'+id, parent).removeClass('hidden');
    });

    // on change tab change plan
    $(document).on('click', '.block-comp .nav-link', function(){
        var parent = $(this).closest( ".details" ).parent();
        var id = $(this).attr('href');
        $('.show-detail strong', parent).text($(this).text());
        $('.show-detail sup', parent).text($(id + ' input[type="radio"]:checked').val());
    });
    $(document).on('change', 'input[type="radio"]', function() {
        var parent = $(this).closest( ".details" ).parent();
        $('.show-detail sup', parent).text($(this).val());
    });
}

/*** ================== End What we do Script ================== ***/