(function(a){a.fn.textAutoSize=function(c){var d={max_font_size:null};c=a.extend(d,c);var b=this;this.initTextAutoSize=function(){a(b).each(function(h,j){var f=c.max_font_size;a(j).css({fontSize:f+"px"});var k=a(j).prop("clientHeight");var g=a(j).prop("clientWidth");var e=a(j).prop("scrollHeight");var i=a(j).prop("scrollWidth");while((i>g||e>k)&&f>3){f=f-1;a(j).css({fontSize:f+"px"});e=a(j).prop("scrollHeight");i=a(j).prop("scrollWidth")}})};this.initTextAutoSize();return this}})(jQuery);