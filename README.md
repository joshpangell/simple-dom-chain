# jQuery plugin for simple dom chain inspector

## Description

This is a simple jQuery plugin that returns a full DOM chain from a clicked element.

## Usage

To inspect every element on the page

	$("*").CssInspector({
		callback: function(results) {
			console.log(results);
		}			
	});

The callback function will return an array of results and can be turned into a string with join

	results.join(", ");
