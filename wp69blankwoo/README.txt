=== Plugin Name ===
Contributors: Peter Alias Telegram: @Eyednet
Donate link: https://seoconsultorweb.ml
Tags: comments, spam
Requires at least: 3.0.1
Tested up to: 3.4
Stable tag: 4.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Este es un plugin muy sencillo que utiliza nada más que código javascript. Básicamente carga el javascript que es el que detecta los buttons que tienen el identificativo por class="button product_type_external" y class"button product_type_external" una vez los identifica , los recorre con un bucle for añadiéndoles el atributo target="_blank" a cada objeto del array.

== Description ==

Este es un plugin muy sencillo que utiliza nada más que código javascript. Básicamente carga el javascript que es el que detecta los buttons que tienen el identificativo por class="button product_type_external" y class"button product_type_external" una vez los identifica , los recorre con un bucle for añadiéndoles el atributo target="_blank" a cada objeto del array.

A few notes about the sections above:

* "Checked" this plugin was checked on Wordpress 5.1.1 

*   "Contributors" Peter Alias Telegram:@Eyednet from https://seoconsultorweb.ml.

*   "Requires at least" En principio no tiene requerimientos de versión salvo que necesita que el cliente tenga      javascript para poder ejecutar el código a nivel cliente.

* Las pruebas realizadas han sido en un servidor con wordpress instalado y woocommerce.



== Installation ==

This section describes how to install the plugin and get it working.

e.g.

1. Upload `wp69blankwoo.php` to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Place `<?php do_action('plugin_name_hook'); ?>` in your templates



`<?php code(); // goes in backticks ?>`
