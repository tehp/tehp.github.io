$(document).ready(function() {

    var feed = new Instafeed({
        get: 'user',
        userId: '467087330',
        accessToken: '467087330.1677ed0.ae54062485a64d0888f58249c3e8b2bf',
        resolution: 'standard_resolution',
        limit: '18',
        //tagName: 'awesome',   (switch from user to tagged)
        template: '<div class="grid-item-img"><a href="{{link}}"><img src="{{image}}"/></a></div>'


    });
    feed.run();
});;
