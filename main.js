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

var logo           = document.getElementById('logo');
var copyrights     = document.getElementById('copyrights');

var tabs           = document.getElementsByClassName('tab');
var workTap        = document.getElementById('work-tab');
var personalTap    = document.getElementById('personal-tab');
var aboutTap       = document.getElementById('about-tab');
var galleryTap     = document.getElementById('gallery-tab');

var buttons        = document.getElementsByClassName('btn');
var workTapBtn     = document.getElementById('work-tab-btn');
var personalTapBtn = document.getElementById('personal-tab-btn');
var aboutTapBtn    = document.getElementById('about-tab-btn');

document.addEventListener("DOMContentLoaded", function(){
    /**
     * Initialize
     */
    logo.innerText = data.designer_name;
    document.title = data.designer_name + ' Portfolio';
    setTab(workTap, workTapBtn, tabContent('work'));
    copyrights.innerHTML = "All content rights are reserved <br> " + 
        data.designer_name + 
        ' &copy; 2020';

    /**
     * Select tab (work, personal, gallery and about)
     */
    workTapBtn.addEventListener('click', function(){
        setTab(workTap, workTapBtn, tabContent('work'));
    });

    personalTapBtn.addEventListener('click', function(){
        setTab(personalTap, personalTapBtn, tabContent('personal'));
    });

    aboutTapBtn.addEventListener('click', function(){
        setTab(aboutTap, aboutTapBtn, tabContent('about'));
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

function setTab(tab, tabBtn, content){
    hideAll(tabs);
    show(tab);
    tab.innerHTML = content;

    // remove underline from all tabs buttons
    for (var i = 0;i < buttons.length;i++) {
        buttons[i].style.textDecoration = '';
    }

    tabBtn.style.textDecoration = "underline";
}

/**
 * Tabs Content
 */
function tabContent(tab = 'work'){
    var content = '';
    var i , j, k = 0;
    var title = '', image = '';

    switch (tab) {
        case 'work':
        case 'personal':
            for (i = 0;i < 4;i++) {
                content += '<div class="row">';
                for (j = 0;j < 4;j++) {
                    if (tab == 'work') {
                        if (data.work[k] === undefined) continue;
                        title = data.work[k].name;
                        image = data.work[k].cover;
                    }
                    else if (tab == 'personal') {
                        if (data.personal[k] === undefined) continue;
                        title = data.personal[k].name;
                        image = data.personal[k].image;
                    }

                    content += '<div class="column">';
                    content += '<img src="' + image + '" alt="' + title + ' Cover"/>';
                    content += '<a href="javascript:;" class="link" data-id="'+ k +'">' + title + '</a>';
                    content += '</div>';
                    
                    k += 1;
                }
                content += '</div>';
            }
        break;
        case 'about':
            content += '<h1>' + data.about.title + '</h1>';
            content += '<article>' + data.about.bio + '</article>';

            content += '<h4>Key Skills</h4>';
            content += '<div class="clear"><ul>';
            for (i = 0;i < data.about.skills.length/2;i++) {
                content += '<li>' + data.about.skills[i] + '</li>';
            }

            content += '</ul><ul>';
            
            for (i = data.about.skills.length/2;i < data.about.skills.length;i++) {
                content += '<li>' + data.about.skills[i] + '</li>';
            }
            content += '</ul></div>';

            content += '<h4>Contact</h4>';
            content += '<p><a href="' + data.about.contact.facebook + '">';
            content += '<i class="gg-facebook"></i></a>';
            content += '<a href="mailto:' + data.about.contact.email + '">';
            content += '<i class="gg-mail"></i></a></p>';
        break;
    }

    return content;
}