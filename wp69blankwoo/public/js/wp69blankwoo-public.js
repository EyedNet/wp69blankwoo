(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */
      $( window ).load(function() {
          
           //Metemos en un array todos lo elementos del DOM con la clase indicada
    var hrefs = document.getElementsByClassName('button product_type_external');
    if (hrefs!=null)
    { 
             //Recorremos el array  y le colocamos el atributo target a cada hrefencontrado
    for(var i=0;i<hrefs.length;i++){hrefs[i].target="_blank";}void(0);
    }
  
   

   var hrefs2 = document.getElementsByClassName('single_add_to_cart_button button alt');
   if(hrefs2!=null)
   {
           //Recorremos el array  y le colocamos el atributo target a cada href encontrado
  for(var i=0;i<hrefs.length;i++){hrefs2[i].target="_blank";}void(0);
       
    }
	 
	  });
})( jQuery );
