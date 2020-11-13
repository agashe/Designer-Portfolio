/**
 * Designer Portfolio
 *
 * Auther: Mohamed Yousef
 * Version: 1.00
 * GitHub: 
 */

/**
 * Befor start make sure to run command :
 * cp data.example.js data.js
 */

/**
 * Set page title
 */

document.title = data.designer_name + ' Portfolio';

/**
 * Set logo
 */

document.getElementById('logo').innerText = data.designer_name;
document.getElementById('copyrights').innerHTML = data.designer_name + ' &copy; 2020';