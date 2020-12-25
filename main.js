/**
 * Designer Portfolio
 *
 * Auther: Mohamed Yousef
 * Version: 1.00
 * GitHub: 
 */

/**
 * Please Note:
 * 
 * Befor start make sure to run command :
 * cp data.example.js data.js
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
    document.getElementById('logo').innerText = data.designer_name;
    document.getElementById('copyrights').innerHTML = data.designer_name + ' &copy; 2020';

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
    content += '<p>' + data.about.bio + '</p>';
    content += '<p>' + data.about.major + '</p>';

    content += '<ul>';
    for (var i = 0;i < data.about.skills.length;i++) {
        content += '<li>' + data.about.skills[i] + '</li>';
    }
    content += '</ul>';

    content += '<p>Contact:</p>';
    content += '<p><a href=""><i class="gg-facebook"></i></a>';
    content += '<a href=""><i class="gg-mail"></i></a></p>';

    return content;
}