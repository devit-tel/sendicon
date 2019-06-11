/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-icon-muliticase': '&#xe958;',
		'icon-parcel-courier': '&#xe959;',
		'icon-parcel-courier-circle': '&#xe95a;',
		'icon-icon-muliticase-circle': '&#xe95b;',
		'icon-deliveing-courier': '&#xe956;',
		'icon-return': '&#xe957;',
		'icon-icon-menu-hamburger': '&#xe955;',
		'icon-more-options': '&#xe953;',
		'icon-power-off': '&#xe954;',
		'icon-triangly-left': '&#xe94e;',
		'icon-triangly-right': '&#xe94f;',
		'icon-blank-circle': '&#xe94c;',
		'icon-blank': '&#xe94d;',
		'icon-location-dropoff': '&#xe947;',
		'icon-location-pickup': '&#xe948;',
		'icon-less': '&#xe946;',
		'icon-more': '&#xe943;',
		'icon-schedule-circle': '&#xe944;',
		'icon-story-cashondemand-circle': '&#xe945;',
		'icon-story-cashondemand': '&#xe942;',
		'icon-alarm-outline': '&#xe900;',
		'icon-alarm': '&#xe901;',
		'icon-back': '&#xe902;',
		'icon-barcode': '&#xe903;',
		'icon-billing': '&#xe904;',
		'icon-bookmark': '&#xe905;',
		'icon-camera': '&#xe906;',
		'icon-cancel-circle': '&#xe907;',
		'icon-cancel': '&#xe908;',
		'icon-cash': '&#xe909;',
		'icon-checked-circle': '&#xe90a;',
		'icon-checked': '&#xe90b;',
		'icon-clear-circle': '&#xe90c;',
		'icon-clear': '&#xe90d;',
		'icon-datepicker': '&#xe90e;',
		'icon-down': '&#xe90f;',
		'icon-heart-outline': '&#xe910;',
		'icon-heart': '&#xe911;',
		'icon-home': '&#xe912;',
		'icon-link': '&#xe913;',
		'icon-location': '&#xe914;',
		'icon-lock': '&#xe915;',
		'icon-menu-active-delivery': '&#xe916;',
		'icon-menu-assignment': '&#xe917;',
		'icon-menu-faq': '&#xe918;',
		'icon-menu-history': '&#xe919;',
		'icon-menu-news': '&#xe91a;',
		'icon-menu-setting': '&#xe91b;',
		'icon-move-left-right': '&#xe91c;',
		'icon-move-up-down': '&#xe91d;',
		'icon-move': '&#xe91e;',
		'icon-office': '&#xe91f;',
		'icon-parcel-dropoff-circle': '&#xe920;',
		'icon-parcel-dropoff': '&#xe921;',
		'icon-parcel-pickup-circle': '&#xe922;',
		'icon-parcel-pickup': '&#xe923;',
		'icon-parcel': '&#xe924;',
		'icon-pencil-edit': '&#xe925;',
		'icon-people': '&#xe926;',
		'icon-phone-cc': '&#xe927;',
		'icon-phone-circle-outline': '&#xe928;',
		'icon-phone-circle': '&#xe929;',
		'icon-phone': '&#xe92a;',
		'icon-pin-floor': '&#xe92b;',
		'icon-pin': '&#xe92c;',
		'icon-reorder': '&#xe92d;',
		'icon-retry': '&#xe92e;',
		'icon-right': '&#xe92f;',
		'icon-search': '&#xe930;',
		'icon-sendit-rocket': '&#xe931;',
		'icon-service-cash-on-delivery': '&#xe932;',
		'icon-service-document-processing': '&#xe933;',
		'icon-service-hot-food': '&#xe934;',
		'icon-service-insurrance': '&#xe935;',
		'icon-service-mailing': '&#xe936;',
		'icon-service-photo-id': '&#xe937;',
		'icon-service-purchase': '&#xe938;',
		'icon-service-return-route': '&#xe939;',
		'icon-shopping-bag-opened': '&#xe93a;',
		'icon-shopping-bag': '&#xe93b;',
		'icon-statistic': '&#xe93c;',
		'icon-traffic': '&#xe93d;',
		'icon-up': '&#xe93e;',
		'icon-vehicle-moto': '&#xe93f;',
		'icon-vehicle-truck': '&#xe940;',
		'icon-vehicle-van': '&#xe941;',
		'icon-trash': '&#xe950;',
		'icon-keyboard': '&#xe951;',
		'icon-qrcode': '&#xe952;',
		'icon-save': '&#xe94b;',
		'icon-star-empty': '&#xe949;',
		'icon-star-full': '&#xe94a;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
