$('div.page__footer-follow ul.social-icons > li').has('a[href="/v2-api/feed.xml"]').remove();

$('div.page__footer-copyright').html('Copyright &copy; ' + new Date().getFullYear() + ' <a href="https://www.davisinstruments.com">Davis Instruments</a> - All Rights Reserved');
