$(document).ready(function() {

    var feed = new Instafeed({
        get: 'user',
        userId: '467087330',
        accessToken: '467087330.1677ed0.ae54062485a64d0888f58249c3e8b2bf',
        resolution: 'standard_resolution',
        limit: '3',
        template: '<div class="col-md-4"><a href="{{link}}"><img src="{{image}}" /></a></div>'


    });
    feed.run();
});;
