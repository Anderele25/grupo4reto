<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'grupo4Reto' );

/** MySQL database username */
define( 'DB_USER', 'ander' );

/** MySQL database password */
define( 'DB_PASSWORD', '1234' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost/wordpress/phpMyAdmin' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'qk~C/AT.;$kkY$B`bsVud=kENN}+9<Pm7iuoI:EHEz0AhLfdERAgpj9Y)lPNLI/6' );
define( 'SECURE_AUTH_KEY',  'wXY$WFNTW,1M4R0x1NZy{`Y)ppg~1o]kS_f$-f]s~F8/U}0uyG0E2GR%N?*%,x6Z' );
define( 'LOGGED_IN_KEY',    '>sP TXPT`m2%(.t;lG:Z5*s^GN#3Cju3`)x.]MST%:C&s:Qne/qC<IEImwzJrHRM' );
define( 'NONCE_KEY',        'o;jkT-)d C-im%jxW=hf-sL<6tf1@!VdO$47`(1Euo4t%{dblx-wY$AC}9v?54HQ' );
define( 'AUTH_SALT',        '1VJ^&V1gn>tK%=C=g^%{Y^QlP^,[1wST*XApv+TF1obrYs!zD1.`6ZFx*#LhWj;M' );
define( 'SECURE_AUTH_SALT', 'qx[2L3VDX$)%q_YqCM847s/jAc|G;e%yN(.h!_9$fO5}(5!%1WCF~)/{-T}Dej0V' );
define( 'LOGGED_IN_SALT',   'dLavDlr$#8iQfUA!(aNIkD8TK:,0zEjYm@H_o[VN??fRCaWcMx{x+*-iChvO>bXf' );
define( 'NONCE_SALT',       'bi>zt={1fp$:}B74/Z$#vu<>0uj<pl`9NaOOGpC3G8J=V[|{/AOl)nyEg4]#<$NA' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
define ('FS_METHOD','direct');
