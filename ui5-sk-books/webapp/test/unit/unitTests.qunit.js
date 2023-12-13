/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"bethevaldev/ui5-sk-books/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
