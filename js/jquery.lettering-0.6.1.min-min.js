!function($){function t(t,n,e,i){var r=t.text().split(n),c="";r.length&&($(r).each(function(t,n){c+='<span class="'+e+(t+1)+'">'+n+"</span>"+i}),t.empty().append(c))}var n={init:function(){return this.each(function(){t($(this),"","char","")})},words:function(){return this.each(function(){t($(this)," ","word"," ")})},lines:function(){return this.each(function(){var n="eefec303079ad17405c889e092e105b0";t($(this).children("br").replaceWith(n).end(),n,"line","")})}};$.fn.lettering=function(t){return t&&n[t]?n[t].apply(this,[].slice.call(arguments,1)):"letters"!==t&&t?($.error("Method "+t+" does not exist on jQuery.lettering"),this):n.init.apply(this,[].slice.call(arguments,0))}}(jQuery);