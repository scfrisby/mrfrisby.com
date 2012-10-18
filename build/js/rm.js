var user = 'stuartfrisby',
      i = 0,
      count = 1,
      tweet;

// Getting Recent Tweets
$.getJSON('http://search.twitter.com/search.json?callback=?&q=from:@' + user + '', function(data) {
  for (i; i < count; i++) {tweet = '' + data.results[i].text + "";}
  tweet = tweet.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, function(url) {
    return '<a target="_blank" href="' + url + '">' + url + '</a>';
  }).replace(/B@([_a-z0-9]+)/ig, function(reply) {
    return  reply.charAt(0)+'<a href="http://twitter.com/' + reply.substring(1) + '">' + reply.substring(1) + '</a>';
  });
  $(".tweet li span").html(tweet);
});

function matchColHeights(a,b){if($(".grid").css("width")>="720px"){var c=$(a).height();var d=$(b).height();if(c>d){$(b).height(c)}else{$(a).height(d)}}}
(function(a){a.fn.extend({embedagram:function(b){var c={instagram_id:1548627,thumb_width:200,wrap_tag:"span",link_type:"web",limit:1,success:function(){return true}};var b=a.extend(c,b);return this.each(function(){var c=b;var d=a(this);var e="http://embedagram.com/e/plugin/"+c.instagram_id+"/?callback=?";e+="&thumb_width="+c.thumb_width+"&wrap_tag="+c.wrap_tag;e+="&limit="+c.limit+"&link_type="+c.link_type;a.getJSON(e,function(a){d.html(a.html);c.success.apply(d)});return d})}})})(jQuery);
(function(){var a=$("article > header div").offset().top-parseFloat($("article > header div").css("marginTop").replace(/auto/,0));$(window).scroll(function(b){var c=$(this).scrollTop();if(c>=a){$("article > header div").addClass("fixed")}else{$("article > header div").removeClass("fixed")}})})
(function(){matchColHeights('article > header', 'article > div');});
