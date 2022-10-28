$(document).ready(function(){ // run script when the page has loaded. Use dollar sign to call upon JQuery
  var burger = $("nav a:nth-child(1)"); // with JQuery, CSS selectors can be used to target items
  var nav = $("nav");

  $(burger).click(function(){
    $(nav).toggleClass("open-nav");
  });
});
