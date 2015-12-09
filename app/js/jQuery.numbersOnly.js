/* jQuery numbers only
 * http://tbilisi.io
 * Copyright (c) 2015 Nick Gejadze
 * Version 0.1
 * Licensed under GPL:
 * http://www.gnu.org/licenses/gpl.html 
 */
(function($) {
    $.fn.numbersOnly = function(opt) {
        var def = {
            turn: "on"
        };
        var opt = $.extend(def, opt);
        $(this).unbind('keydown');
        this.each(function() {
            $(this).keydown(function(e){
                if (!e.ctrlKey && !e.altKey && !e.metaKey) {
                    if (opt.turn === "on") {
                        var kcode = e.charCode || e.keyCode || 0;
                        return (kcode == 8 || kcode == 9 || kcode == 13 || kcode == 46 || kcode == 110 || kcode == 190 || (kcode >= 35 && kcode <= 40) || (kcode >= 48 && kcode <= 57) || (kcode >= 96 && kcode <= 105));
                    }
                }
                return;
            });
        });
    };
})(jQuery);