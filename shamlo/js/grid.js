$(document).ready(function() {

  var feed = new Instafeed({
    get: 'user',
    userId: '1545331378',
    sortBy: 'most-liked',
    accessToken: '1545331378.1677ed0.569d51abe4654b1485e73ea762c68498',
    resolution: 'standard_resolution',
    limit: '100',
    template: '<div class="hidden-sm hidden-md hidden-xs col-xs-3"><a href="{{link}}"><img class="image" src="{{image}}"/></a></div><div class="hidden-sm hidden-lg hidden-xs col-xs-4"><a href="{{link}}"><img class="image" src="{{image}}"/></a></div><div class="hidden-lg hidden-md hidden-xs col-xs-6"><a href="{{link}}"><img class="image" src="{{image}}"/></a></div><div class="hidden-lg hidden-md hidden-sm col-xs-12"><a href="{{link}}"><img class="image" src="{{image}}"/></a></div>'

  });
  feed.run();
});;
