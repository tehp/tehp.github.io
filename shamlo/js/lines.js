$(document).ready(function() {
    $('#videos-btn').addClass('ul');
    $('#music-videos-btn').addClass('ul');


    $("#videos-btn").click(function() {
        $('#videos-btn').addClass('ul');
        $('#images-btn').removeClass('ul');
        $('#about-btn').removeClass('ul');
    });
    $("#images-btn").click(function() {
        $('#videos-btn').removeClass('ul');
        $('#images-btn').addClass('ul');
        $('#about-btn').removeClass('ul');
    });
    $("#about-btn").click(function() {
        $('#videos-btn').removeClass('ul');
        $('#images-btn').removeClass('ul');
        $('#about-btn').addClass('ul');
    });


    $("#music-videos-btn").click(function() {
        $('#music-videos-btn').addClass('ul');
        $('#shows-btn').removeClass('ul');
        $('#travel-btn').removeClass('ul');
    });

    $("#shows-btn").click(function() {
        $('#music-videos-btn').removeClass('ul');
        $('#shows-btn').addClass('ul');
        $('#travel-btn').removeClass('ul');
    });

    $("#travel-btn").click(function() {
        $('#music-videos-btn').removeClass('ul');
        $('#shows-btn').removeClass('ul');
        $('#travel-btn').addClass('ul');
    });


});
