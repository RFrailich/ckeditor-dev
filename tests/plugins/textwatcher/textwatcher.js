/* bender-tags: editor */
/* bender-ckeditor-plugins: textwatcher */

( function() {

	bender.editor = true;

	bender.test( {

		'test checks text on editor focus': function() {
			var editor = this.editor,
				spy = sinon.spy( attachTextWatcher( editor ), 'check' );

			editor.focus();

			assert.isTrue( spy.calledOnce );
		},

		'test checks text on keyup': function() {
			var editor = this.editor,
				spy = sinon.spy( attachTextWatcher( editor ), 'check' );

			editor.editable().fire( 'keyup', new CKEDITOR.dom.event( {} ) );

			assert.isTrue( spy.calledOnce );
		},

		'test unmatch text on afterCommandExec': function() {
			var editor = this.editor,
				spy = sinon.spy( attachTextWatcher( editor ), 'unmatch' );

			editor.fire( 'afterCommandExec' );

			assert.isTrue( spy.calledOnce );
		},

		'test unmach text on blur': function() {
			var editor = this.editor,
				spy = sinon.spy( attachTextWatcher( editor ), 'unmatch' );

			editor.fire( 'blur' );

			assert.isTrue( spy.calledOnce );
		},

		'test unmach text on beforeModeUnload': function() {
			var editor = this.editor,
				spy = sinon.spy( attachTextWatcher( editor ), 'unmatch' );

			editor.fire( 'beforeModeUnload' );

			assert.isTrue( spy.calledOnce );
		},

		'test unmach text on setData': function() {
			var editor = this.editor,
				spy = sinon.spy( attachTextWatcher( editor ), 'unmatch' );

			editor.fire( 'setData' );

			assert.isTrue( spy.calledOnce );
		},

		'test unmatch fires unmatched event': function() {
			var editor = this.editor,
				textMatcher = attachTextWatcher( editor ),
				spy = sinon.spy( textMatcher, 'fire' );

			textMatcher.unmatch();

			assert.isTrue( spy.calledOnce );
			assert.isTrue( spy.calledWith( 'unmatched' ) );
		},

		'test unmatch resets the state': function() {
			var editor = this.editor,
				textMatcher = attachTextWatcher( editor );
			textMatcher.lastMatched = 'foo';

			textMatcher.unmatch();

			assert.isNull( textMatcher.lastMatched );
		},

		'test consumeNext sets ignore state': function() {
			var editor = this.editor,
				textMatcher = attachTextWatcher( editor );
			textMatcher.ignoreNext = false;

			textMatcher.consumeNext();

			assert.isTrue( textMatcher.ignoreNext );
		},

		'test check with ignoreNext ignores next check': function() {
			var editor = this.editor, bot = this.editorBot,
				callbackCount = 0,
				textMatcher = attachTextWatcher( editor, function() {
					callbackCount++;
				} );

			textMatcher.ignoreNext = true;

			textMatcher.check();

			assert.isFalse( textMatcher.ignoreNext );
			assert.areEqual( 0, callbackCount );
		},

		'test check ignores control keys': function() {
			var editor = this.editor, bot = this.editorBot,
				callbackCount = 0, keyName = 'keyup',
				textMatcher = attachTextWatcher( editor, function() {
					callbackCount++;
				} );

			textMatcher.check( getKeyEvent( keyName, 16 ) ); // Shift
			textMatcher.check( getKeyEvent( keyName, 17 ) ); // Ctrl
			textMatcher.check( getKeyEvent( keyName, 18 ) ); // Alt
			textMatcher.check( getKeyEvent( keyName, 91 ) ); // Cmd

			assert.areEqual( 0, callbackCount );
		},

		'test check ignored without proper selection': function() {
			var editor = this.editor, bot = this.editorBot,
				callbackCount = 0,
				textMatcher = attachTextWatcher( editor, function() {
					callbackCount++;
				} );

			editor.getSelection().removeAllRanges();

			textMatcher.check( {} );

			assert.areEqual( 0, callbackCount );
		},

		'test check ignored with existing match': function() {
			var editor = this.editor, bot = this.editorBot,
				expectedMatch = 'Lorem ipsum dolor sit amet, consectetur.',
				textMatcher = attachTextWatcher( editor, function() {
					return { text: expectedMatch }
				} ),
				spy = sinon.spy( textMatcher, 'fire' );

			bot.setHtmlWithSelection( 'Lorem ipsum dolor ^sit amet, consectetur.' );

			textMatcher.lastMatched = expectedMatch;
			textMatcher.check( {} );

			assert.isFalse( spy.calledWith( 'matched' ) );
		},

		'test check fired with new match': function() {
			var editor = this.editor, bot = this.editorBot,
				expectedMatch = 'Lorem ipsum dolor sit amet, consectetur.',
				textMatcher = attachTextWatcher( editor, function() {
					return { text: expectedMatch }
				} ),
				spy = sinon.spy( textMatcher, 'fire' );

			bot.setHtmlWithSelection( 'Lorem ipsum dolor ^sit amet, consectetur.' );

			textMatcher.check( {} );

			assert.isTrue( spy.calledWith( 'matched' ) );
		},

		'test check unmatches last match with failing match': function() {
			var editor = this.editor, bot = this.editorBot,
				textMatcher = attachTextWatcher( editor, function() {
					return null;
				} ),
				spy = sinon.spy( textMatcher, 'unmatch' );

			textMatcher.lastMatched = 'Lorem ipsum dolor sit amet, consectetur.'

			bot.setHtmlWithSelection( 'Lorem ipsum dolor ^sit amet, consectetur.' );

			textMatcher.check( {} );

			assert.isTrue( spy.calledOnce );
		},

	} );

	function attachTextWatcher( editor, callback ) {
		return new CKEDITOR.plugins.textWatcher( editor, callback || function() {} ).attach();
	}

	function getKeyEvent( keyName, keyCode ) {
		return {
			name: keyName,
			data: {
				getKey: function() {
					return keyCode;
				}
			}
		}
	}

} )();
