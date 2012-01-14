(function($) {
	
	/**
	 *	Sets the inspector's hover and click methods
	 *	to return the CSS chain
	 * 	Invoke this like: $("*").CssInspector();
	 */
	$.fn.CssInspector = function(options) {
		/**
	     *	Hover and click events for the element
	     */
		$(this).hover(
			function() { 
				$(this).css("outline","1px solid #ccc");
			},
			function() {
				$(this).css("outline","none");
			}
		).click(function() {
			 // Fire the call back with the result of the DOM inspection
			 options.callback.call( this, $(this).ReturnCssChain() );
			 
			 return false; // Prevents <a> from clicking through
		});

	};
	
	
	/**
	 *	Drills down to the lowest element, then bubbles up with each
	 *	Returns either array, uncomment to return a string 
	 */
	$.fn.ReturnCssChain = function() {
		
		var this_obj = ( $(this).attr("class") ) ? "."+$(this).attr("class") : false;
		
		if(!this_obj) {
			this_obj = this.tagName();
		}
		/*
		 *  Map all the layers from bottom to top
		 *	Returns an array, which is reversed so that it orders top down
		 */
		var chain = $(this).parents().map(function () { 
					/* 	
					 *	If there is a class, return that. If not, return the tag name
					 */
					return (this.className != "") ? "."+$.trim(this.className).split(" ")[0] : this.tagName.toLowerCase();
				
				}).get().reverse();
		
		
		chain.push(this_obj);
		
		//return chain.join(", "); // return string
		return chain; // return array

	};
	
	/**
	 *	Helper method to get the tagname using jQuery
	 */
	$.fn.tagName = function() {
	    return this.get(0).tagName.toLowerCase();
	}

	
})(jQuery);