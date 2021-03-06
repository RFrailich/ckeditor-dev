/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @fileOverview
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang[ 'ug' ] = {
	// ARIA description.
	editor: 'تەھرىرلىگۈچ',
	editorPanel: 'مول تېكست تەھرىرلىگۈچ تاختىسى',

	// Common messages and labels.
	common: {
		// Screenreader titles. Please note that screenreaders are not always capable
		// of reading non-English words. So be careful while translating it.
		editorHelp: 'ALT+0 نى بېسىپ ياردەمنى كۆرۈڭ',

		browseServer: 'كۆرسىتىش مۇلازىمېتىر',
		url: 'ئەسلى ھۆججەت',
		protocol: 'كېلىشىم',
		upload: 'يۈكلە',
		uploadSubmit: 'مۇلازىمېتىرغا يۈكلە',
		image: 'سۈرەت',
		flash: 'Flash',
		form: 'جەدۋەل',
		checkbox: 'كۆپ تاللاش رامكىسى',
		radio: 'يەككە تاللاش توپچىسى',
		textField: 'يەككە قۇر تېكىست',
		textarea: 'كۆپ قۇر تېكىست',
		hiddenField: 'يوشۇرۇن دائىرە',
		button: 'توپچا',
		select: 'تىزىم/تىزىملىك',
		imageButton: 'سۈرەت دائىرە',
		notSet: '‹تەڭشەلمىگەن›',
		id: 'ID',
		name: 'ئات',
		langDir: 'تىل يۆنىلىشى',
		langDirLtr: 'سولدىن ئوڭغا (LTR)',
		langDirRtl: 'ئوڭدىن سولغا (RTL)',
		langCode: 'تىل كودى',
		longDescr: 'تەپسىلىي چۈشەندۈرۈش ئادرېسى',
		cssClass: 'ئۇسلۇب خىلىنىڭ ئاتى',
		advisoryTitle: 'ماۋزۇ',
		cssStyle: 'قۇر ئىچىدىكى ئۇسلۇبى',
		ok: 'جەزملە',
		cancel: 'ۋاز كەچ',
		close: 'تاقا',
		preview: 'ئالدىن كۆزەت',
		resize: 'چوڭلۇقىنى ئۆزگەرت',
		generalTab: 'ئادەتتىكى',
		advancedTab: 'ئالىي',
		validateNumberFailed: 'سان پىچىمىدا كىرگۈزۈش زۆرۈر',
		confirmNewPage: 'نۆۋەتتىكى پۈتۈك مەزمۇنى ساقلانمىدى، يېڭى پۈتۈك قۇرامسىز؟',
		confirmCancel: 'قىسمەن ئۆزگەرتىش ساقلانمىدى، بۇ سۆزلەشكۈنى تاقامسىز؟',
		options: 'تاللانما',
		target: 'نىشان كۆزنەك',
		targetNew: 'يېڭى كۆزنەك (_blank)',
		targetTop: 'پۈتۈن بەت (_top)',
		targetSelf: 'مەزكۇر كۆزنەك (_self)',
		targetParent: 'ئاتا كۆزنەك (_parent)',
		langDirLTR: 'سولدىن ئوڭغا (LTR)',
		langDirRTL: 'ئوڭدىن سولغا (RTL)',
		styles: 'ئۇسلۇبلار',
		cssClasses: 'ئۇسلۇب خىللىرى',
		width: 'كەڭلىك',
		height: 'ئېگىزلىك',
		align: 'توغرىلىنىشى',
		left: 'سول',
		right: 'ئوڭ',
		center: 'ئوتتۇرا',
		justify: 'ئىككى تەرەپتىن توغرىلا',
		alignLeft: 'سولغا توغرىلا',
		alignRight: 'ئوڭغا توغرىلا',
		alignCenter: 'Align Center', // MISSING
		alignTop: 'ئۈستى',
		alignMiddle: 'ئوتتۇرا',
		alignBottom: 'ئاستى',
		alignNone: 'يوق',
		invalidValue: 'ئىناۋەتسىز قىممەت.',
		invalidHeight: 'ئېگىزلىك چوقۇم رەقەم پىچىمىدا بولۇشى زۆرۈر',
		invalidWidth: 'كەڭلىك چوقۇم رەقەم پىچىمىدا بولۇشى زۆرۈر',
		invalidLength: 'Value specified for the "%1" field must be a positive number with or without a valid measurement unit (%2).', // MISSING
		invalidCssLength: 'بۇ سۆز بۆلىكى چوقۇم مۇۋاپىق بولغان CSS ئۇزۇنلۇق قىممىتى بولۇشى زۆرۈر، بىرلىكى (px, %, in, cm, mm, em, ex, pt ياكى pc)',
		invalidHtmlLength: 'بۇ سۆز بۆلىكى چوقۇم بىرىكمە HTML ئۇزۇنلۇق قىممىتى بولۇشى كېرەك. ئۆز ئىچىگە ئالىدىغان بىرلىك (px ياكى %)',
		invalidInlineStyle: 'ئىچكى باغلانما ئۇسلۇبى چوقۇم چېكىتلىك پەش بىلەن ئايرىلغان بىر ياكى كۆپ «خاسلىق ئاتى:خاسلىق قىممىتى» پىچىمىدا بولۇشى لازىم',
		cssLengthTooltip: 'بۇ سۆز بۆلىكى بىرىكمە CSS ئۇزۇنلۇق قىممىتى بولۇشى كېرەك. ئۆز ئىچىگە ئالىدىغان بىرلىك (px, %, in, cm, mm, em, ex, pt ياكى pc)',

		// Put the voice-only part of the label in the span.
		unavailable: '%1<span class=\\\\"cke_accessibility\\\\">، ئىشلەتكىلى بولمايدۇ</span>',

		// Keyboard keys translations used for creating shortcuts descriptions in tooltips, context menus and ARIA labels.
		keyboard: {
			8: 'Backspace',
			13: 'Enter',
			16: 'Shift',
			17: 'Ctrl',
			18: 'Alt',
			32: 'Space', // MISSING
			35: 'End',
			36: 'Home',
			46: 'ئۆچۈر',
			112: 'F1', // MISSING
			113: 'F2', // MISSING
			114: 'F3', // MISSING
			115: 'F4', // MISSING
			116: 'F5', // MISSING
			117: 'F6', // MISSING
			118: 'F7', // MISSING
			119: 'F8', // MISSING
			120: 'F9', // MISSING
			121: 'F10', // MISSING
			122: 'F11', // MISSING
			123: 'F12', // MISSING
			124: 'F13', // MISSING
			125: 'F14', // MISSING
			126: 'F15', // MISSING
			127: 'F16', // MISSING
			128: 'F17', // MISSING
			129: 'F18', // MISSING
			130: 'F19', // MISSING
			131: 'F20', // MISSING
			132: 'F21', // MISSING
			133: 'F22', // MISSING
			134: 'F23', // MISSING
			135: 'F24', // MISSING
			224: 'Command' // MISSING
		},

		// Prepended to ARIA labels with shortcuts.
		keyboardShortcut: 'Keyboard shortcut', // MISSING

		optionDefault: 'Default' // MISSING
	}
};
