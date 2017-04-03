

/** Start Fixed Menu **/
var menu = $('.io-header-container');
var origOffsetY = menu.offset().top;

function scroll() {
    var origOffsetY = menu.offset().top;
    console.log('window'); console.log($(window).scrollTop());
    console.log('origOffsetY'); console.log(origOffsetY);
    if ($(window).scrollTop() >= origOffsetY && origOffsetY>0) {
        $('.io-header-container').addClass('sticky');
    } else {
        $('.io-header-container').removeClass('sticky');
    }
}
document.onscroll = scroll;

$('#navbarmenu-toggle').click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});
/** End Fixed Menu **/

$(document).ready(function(){

    // Navigation Menu
    $('li.parentActive .menu').show();
    $('li.menu-expanded > a').click(function () {
        var found = $(this).parent().find('.menu').eq(0);
        if (found.length > 0) {
            if (!$(this).parent().hasClass('parentActive')) {
                $('li.menu-expanded .menu').filter(':visible').slideUp('slow');
                $('.parentActive').removeClass('parentActive');
                found.stop(true, true).slideDown('slow');
                $(this).parent().addClass('parentActive');
            } else {
                found.stop(true, true).slideUp('slow');
                $(this).parent().removeClass('parentActive');
            }
        }
        return false;
    });


    if($('.feedback').length) {
        var $feedback = $('.feedback');
        $('button', $feedback).click(function(){
           $feedback.addClass('hidden'); 
           $('.disqus_thread').removeClass('hidden'); 
        });
    }

    window.scroll(function () {
        var $blah = $(".main-nav"),
        $window = $(window),
        offset = $blah.offset();
        if($window.width() >= 992) {
            if ($window.scrollTop() > offset.top) {
                $blah.stop().animate({
                    top: '120'
                });
            } else {
                $blah.stop().animate({
                    top: '180'
                });
            }
        }
    });

    


    $(document).on('change', '#guide-switcher', function() {
        window.location.href = $(this).find(":selected").attr('data-href');
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
        win64: "Windows",
        win32: "Windows (32 bits)",
        linux64: "Linux",
        linux32: "Linux (32 bits)"
    };

    /**
     * Download button main logic
     */

    var stableLinks = communityLinks("stable");
    var previewLinks = communityLinks("preview");
    var platform = getPlatform();

    $(".platform-name").append(platformNames[getPlatform()]);
    $("#version-stable").append(versionCommunityLink.stable);
    $("#version-preview").append(versionCommunityLink.preview);
    $("#community-dl").attr('href', stableLinks[platform]);

    for (var key in platformNames) {
        document.createElement("td", document.createElement)
        $( "#all-downloads" ).append(
            "<tr> \
                <td class=\"os\">"+platformNames[key]+"</td> \
                <td><a class=\"fa fa-download stable\" href=\""+stableLinks[key]+"\"></a></td> \
                <td><a class=\"fa fa-download preview\" href=\""+previewLinks[key]+"\"></a></td> \
            </tr>"
        );
    };



});