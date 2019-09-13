var $activeNavItem = $('div.sidebar.sticky nav.nav__list ul.nav__items li ul li a.active');
var $headers = $('article h2, article h3');

var menuLevels = [];
var currentMenuLevel = null;

if ($headers.length > 0) {
  for (var headerIndex = 0 ; headerIndex < $headers.length ; headerIndex++) {
    var header = $headers.get(headerIndex);
    var $header = $(header);

    $header.wrap('<a name="'+$header.attr('id')+'"></a>');

    var tagName = header.tagName.toLowerCase();
    if (tagName == 'h2') {
      currentMenuLevel = {title: header.textContent, id: $header.attr('id'), children: []};
      menuLevels.push(currentMenuLevel);
    } else if (tagName == 'h3') {
      if (currentMenuLevel != null) {
        currentMenuLevel.children.push({title: header.textContent, id: $header.attr('id')});
      }
    }
  }

  var $h2List = $('<ul>');

  for (var menuIndex = 0 ; menuIndex < menuLevels.length ; menuIndex++) {
    var menuLevel = menuLevels[menuIndex];
    var $h2ListItem = $('<li>');
    var $h2ListItemA = $('<a href="#'+menuLevel.id+'">- '+menuLevel.title+'</a>');
    $h2ListItem.append($h2ListItemA);
    $h2List.append($h2ListItem);

/*
    if (menuLevel.children.length > 0) {
      var $h3List = $('<ul>');
      $h2ListItem.append($h3List);

      for (var subMenuIndex = 0 ; subMenuIndex < menuLevel.children.length ; subMenuIndex++) {
        var subMenuLevel = menuLevel.children[subMenuIndex];
        var $h3ListItem = $('<li>');
        var $h3ListItemA = $('<a href="#'+subMenuLevel.id+'">-- '+subMenuLevel.title+'</a>');
        $h3ListItem.append($h3ListItemA);
        $h3List.append($h3ListItem);
      }
    }
*/
  }

  $activeNavItem.after($h2List);
}
