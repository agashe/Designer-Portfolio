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
 * Elements
 */
var logo           = document.getElementById('logo');
var copyrights     = document.getElementById('copyrights');

var tabs           = document.getElementsByClassName('tab');
var workTap        = document.getElementById('work-tab');
var personalTap    = document.getElementById('personal-tab');
var aboutTap       = document.getElementById('about-tab');

var buttons        = document.getElementsByClassName('btn');
var workTapBtn     = document.getElementById('work-tab-btn');
var personalTapBtn = document.getElementById('personal-tab-btn');
var aboutTapBtn    = document.getElementById('about-tab-btn');

/**
 * On page load
 */
document.addEventListener("DOMContentLoaded", function(){
    /**
     * Set page title / logo / copyrights
     */
    logo.innerText = data.designer_name;
    document.title = data.designer_name + ' Portfolio';
    copyrights.innerHTML = "All content rights are reserved <br> " + 
        data.designer_name + 
        ' &copy; 2020';

    /**
     * Set default tab
     */
    setTab(workTap, workTabContent());
    workTapBtn.style.textDecoration = "underline";

    /**
     * Select tab (work, personal and about)
     */
    workTapBtn.addEventListener('click', function(){
        setTab(workTap, workTabContent());
        workTapBtn.style.textDecoration = "underline";
    });

    personalTapBtn.addEventListener('click', function(){
        setTab(personalTap, personalTabContent());
        personalTapBtn.style.textDecoration = "underline";
    });

    aboutTapBtn.addEventListener('click', function(){
        setTab(aboutTap, aboutTabContent());
        aboutTapBtn.style.textDecoration = "underline";
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

    // remove underline from all tabs buttons
    for (var i = 0;i < buttons.length;i++) {
        buttons[i].style.textDecoration = '';
    }
}

/**
 * Tabs Content
 */
function workTabContent(){
    var content = '';
    var i , j, k = 0;
    var title = '', image = '';

    for (i = 0;i < 4;i++) {
        content += '<div class="row">';
        for (j = 0;j < 4;j++) {
            if (data.work[k] === undefined) 
                continue;

            title = data.work[k].name;
            image = data.work[k].cover;
            
            content += '<div class="column">';
            content += '<img src="' + image + '" alt="' + title + ' Cover"/>';
            content += '<a href="javascript:;" class="link" data-id="'+ k +'">' + title + '</a>';
            content += '</div>';
            
            k += 1;
        }
        content += '</div>';
    }

    return content;
}

function personalTabContent(){
    var content = '';
    var i , j, k = 0;
    var title = '', image = '';

    for (i = 0;i < 4;i++) {
        content += '<div class="row">';
        for (j = 0;j < 4;j++) {
            if (data.personal[k] === undefined) 
                continue;

            title = data.personal[k].name;
            image = data.personal[k].image;
            
            content += '<div class="column">';
            content += '<img src="' + image + '" alt="' + title + ' Cover"/>';
            content += '<a href="javascript:;" class="link" data-id="'+ k +'">' + title + '</a>';
            content += '</div>';
            
            k += 1;
        }
        content += '</div>';
    }

    return content;
}

function aboutTabContent(){
    var content = '';

    content += '<h1>' + data.about.title + '</h1>';
    content += '<article>' + data.about.bio + '</article>';

    content += '<h4>Key Skills</h4>';
    content += '<div class="clear"><ul>';
    for (var i = 0;i < data.about.skills.length/2;i++) {
        content += '<li>' + data.about.skills[i] + '</li>';
    }

    content += '</ul><ul>';
    
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