var $activeNavItem = $('div.sidebar.sticky nav.nav__list ul.nav__items li ul li a.active');
var $headers = $('article h2, article h3');
var $subMenu = $('<ul>');
for (var i = 0 ; i < $headers.length ; i++) {
  var header = $headers.get(i);
  var tagName = header.tagName.toLowerCase();
  if (tagName == 'h2') {
    var $subMenu = $('<ul>');
  } else if (tagName == 'h3') {
  }
}
