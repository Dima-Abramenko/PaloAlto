
var nunjScript = function() { 
  
  nunjucks.configure({
    autoescape: true,
    web: {
      async: true
    }
  });
  $.ajax({
    url: "./mockapi/content.json",
    success: function(data, status, xhr) {
      for (item in data.articles) {
        nunjucks.render('./partials/article.html', data.articles.item, function (err, res) {
          $('.js-articles').append(res);
          console.log("Success");
        });
      }
    },
    error: function(data, status){
      alert('**Parsing has not occurred**');
    }
  });
};
$(document).ready(nunjScript);

