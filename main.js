/**
 * Designer Portfolio
 *
 * Auther: Mohamed Yousef <engineer.mohamed.yossef@gmail.com>
 * GitHub: https://github.com/agashe/Designer-Portfolio
 * Version: 1.0.0
 * License: MIT
 */

/**
 * 
 * Befor start:
 * ------------
 * 
 * - run command  $ cp data.example.js data.js
 * - update data.js with your info.
 * - add your favicon.ico
 * - create images directory (optional!!)
 * 
 */

/**
 * Main Vars
 */
var tabs = document.getElementsByClassName('tab');
var work = document.getElementById('work-tab');
var personal = document.getElementById('personal-tab');
var about = document.getElementById('about-tab');

/**
 * On page load
 */
document.addEventListener("DOMContentLoaded", function(){
    /**
     * Set page title
     */
    document.title = data.designer_name + ' Portfolio';

    /**
     * Set logo / copyrights
     */
    var copyrights = "All content rights are reserved to " + data.designer_name + ' &copy; 2020';
    document.getElementById('logo').innerText = data.designer_name;
    document.getElementById('copyrights').innerHTML = copyrights;

    /**
     * Set default tab
     */
    setTab(work, 'toto');

    /**
     * Select tab (work, personal and about)
     */
    document.getElementById('work-tab-btn').addEventListener('click', function(){
        setTab(work, 'work');
    });

    document.getElementById('personal-tab-btn').addEventListener('click', function(){
        setTab(personal, 'personal');
    });

    document.getElementById('about-tab-btn').addEventListener('click', function(){
        setTab(about, aboutTab());
    });
});

/**
 * Hide/Show helpers
 */
function hide(el){
    el.style.display = "none";
}

function show(el){
    el.style.display = "block";
}

function hideAll(els){
    for (var i = 0;i < els.length;i++) {
        hide(els[i]);
    }
}

function setTab(tab, content){
    hideAll(tabs);
    show(tab);
    tab.innerHTML = content;
}

/**
 * Tabs
 */
function workTab(){
    
}

function personalTab(){

}

function aboutTab(){
    var content = '';

    content += '<h1>' + data.about.title + '</h1>';
    content += '<article>' + data.about.bio + '</article>';

    content += '<h4>Key Skills</h4>';
    content += '<div class="clear"><ul>';
    for (var i = 0;i < data.about.skills.length/2;i++) {
        content += '<li>' + data.about.skills[i] + '</li>';
    }
    content += '</ul>';
    
    content += '<ul>';
    for (var i = data.about.skills.length/2;i < data.about.skills.length;i++) {
        content += '<li>' + data.about.skills[i] + '</li>';
    }
    content += '</ul></div>';

    content += '<h4>Contact</h4>';
    content += '<p><a href="' + data.about.contact.facebook + '">';
    content += '<i class="gg-facebook"></i></a>';
    content += '<a href="mailto:' + data.about.contact.email + '">';
    content += '<i class="gg-mail"></i></a></p>';

    return content;
}