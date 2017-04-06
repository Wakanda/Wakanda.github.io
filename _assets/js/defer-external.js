$(function() {
    var fonts = 'https://fonts.googleapis.com/css?family=Roboto:100,400,300,500,500italic,700,700italic';
    if (document.createStyleSheet) document.createStyleSheet(fonts);
    else $("head").append($("<link rel='stylesheet' href='"+ fonts +"' type='text/css' media='screen' />"));
    var font_awsome = 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css';
    if (document.createStyleSheet) document.createStyleSheet(font_awsome);
    else $("head").append($("<link rel='stylesheet' href='"+ font_awsome +"' type='text/css' media='screen' />"));
});