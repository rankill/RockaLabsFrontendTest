/* Nuevo Talento main scripting file *
 * @version 1.0
 * GIT URL -  https://github.com/rankill/RockaLabsFrontendTest
 * Author - Rankill
 */

(function(undefined) {
    'use strict';
    /**
     * Event to check if the nav menu in phone is clicked outside and hide that menu
     */

    var currentNav = document.getElementById('nav_menu');
    var openCloseNavTrigger = document.getElementById("navMenu_callback");

    ("mousedown touchstart".split(" ")).forEach(function(e){
        window.addEventListener(e,function( event ) {
            console.warn(event.target)
            if(openCloseNavTrigger.checked) {
                var isClickInside = currentNav.contains(event.target);
                if (!isClickInside) {
                    openCloseNavTrigger.checked = false;
                }
            }
        },false);
    });

}());
