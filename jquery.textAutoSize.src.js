/**
 * Takes an element with text, and lowers the font size of the text until it fits
 * within the parent element without overflowing.
 *
 * Requires jQuery.js 1.7.0 or higher to function.
 *
 * Usage:
 *  Each element whose text is to be auto-sized must have an 'overflow' value of 'hidden'.
 * 
 * @example		See example.html
 * @class		TextAutoSize
 * @name		TextAutoSize
 * @version		1.1
 * @author		Derek Rosenzweig <derek.rosenzweig@gmail.com, drosenzweig@riccagroup.com>
 */
(function($) {
	
	/**
     * Constructor. Determines the maximum font size for each in a set of elements, then
     * sets the font to that size.
     *
     * @access		public
     * @memberOf	TextAutoSize
     * @since		1.0
     *
     * @param		options				Object				An object containing various options.
     *
     * @returns		this				jQuery				The jQuery element being extended gets returned for chaining purposes
     */
    $.fn.textAutoSize = function(options) {
		//--------------------------------------------------------------------------
		//
		//  Variables and get/set functions
		//
		//--------------------------------------------------------------------------
		
		/**
		 * Default options for the widget. Overwrite by including individual
		 * options in the 'options' map object when initializing this functionality.
		 *
		 * @access		public
		 * @type		Object
		 * @memberOf	TextAutoSize
		 * @since		1.0
		 * @updated		1.1
		 */
		var default_options = {
			max_font_size : null					// The maximum font size allowed, in pixels. Default 50. Optional.
		};
		options = $.extend(default_options, options);
        
        /**
		 * An array of elements whose text will be resized.
		 *
		 * @access		public
		 * @type		Array
		 * @memberOf	TextAutoSize
		 * @since		1.0
		 * @default		this
		 */
		var elements_whose_text_to_resize = this;
		
		//--------------------------------------------------------------------------
		//
		//  Methods
		//
		//--------------------------------------------------------------------------
        
        /**
		 * Initializes the TextAutoSize functionality. For each element, determines the
		 * maximum font size that will fit the text inside the element, and sets the
		 * font to that size.
		 *
		 * @access		public
		 * @memberOf	TextAutoSize
		 * @since		1.0
		 */
        this.initTextAutoSize = function() {
            $(elements_whose_text_to_resize).each(function(element_index, element_to_fill) {
                var new_font_size = options.max_font_size;
                $(element_to_fill).css({fontSize: new_font_size + "px"});
                var client_height = $(element_to_fill).prop('clientHeight');
                var client_width = $(element_to_fill).prop('clientWidth');
                var scroll_height = $(element_to_fill).prop('scrollHeight');
                var scroll_width = $(element_to_fill).prop('scrollWidth');
                while ((scroll_width > client_width || scroll_height > client_height) && new_font_size > 3) {
                    new_font_size = new_font_size - 1;
                    $(element_to_fill).css({fontSize: new_font_size + "px"});
                    scroll_height = $(element_to_fill).prop('scrollHeight');
                    scroll_width = $(element_to_fill).prop('scrollWidth');
                }
            });
        }
        
        /********* Initialize the TextAutoSize *********/
        this.initTextAutoSize();
		
		/********* Return the newly extended element for chaining *********/
        return this;
    }
})(jQuery);