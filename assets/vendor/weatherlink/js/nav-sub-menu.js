/*
var $activeNavItem = $('div.sidebar.sticky nav.nav__list ul.nav__items li ul li a.active');
var $headers = $('article h2, article h3');

if ($headers.length > 0) {
  var $h2List = $('<ul>');

  for (var headerIndex = 0 ; headerIndex < $headers.length ; headerIndex) {
    var header = $headers.get(headerIndex);
    var $header = $(header);

    $header.wrap('<a name="'$header.attr('id')+'"></a>');

    

    
  }
}











if ($h2Headers.length > 0) {
  var $h2List = $('<ul>');
  for (var h2Index = 0 ; h2Index < $h2Headers.length ; h2Index++) {
    var h2Header = $h2Headers.get(h2Index);
    var $h2Header = $(h2Header);
    $h2Header.wrap('<a name="'+$h2Header.attr('id')+'"></a>');
    var $h2Item = $('<li>- <a href="#'+$h2Header.attr('id')+'">'+h2Header.textContent+'</a></li>');
    $h2List.append($h2Item);
    var $h3Headers = $h2Header.children('h3');
    if ($h3Headers.length > 0) {
      var $h3List = $('<ul>');
      for (var h3Index = 0 ; h3Index < $h3Headers.length ; h3Index++) {
        var h3Header = $h3Headers.get(h3Index);
		console.log(h3Header);
        var $h3Header = $(h3Header);
        $h3Header.wrap('<a name="'+$h3Header.attr('id')+'"></a>');
        var $h3Item = $('<li>-- <a href="#'+$h3Header.attr('id')+'">'+h3Header.textContent+'</a></li>');
        $h3List.append($h3Item);
      }
      $h2Item.after($h3List);
    }
  }
  $activeNavItem.after($h2List);
}
*/
