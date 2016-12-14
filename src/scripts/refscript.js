var isCurrentRef = function() {
  var $ref = $('.navigation__ref');
 if (window.location.pathname == '/' || window.location.pathname == '/index.html') {
   $ref.addClass(".navigation__ref-current");
 }  else {
   $ref.removeClass(".navigation__ref-current");
 }

};
$(document).ready(isCurrentRef);
