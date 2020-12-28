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
var workTab        = document.getElementById('work-tab');
var personalTab    = document.getElementById('personal-tab');
var aboutTab       = document.getElementById('about-tab');
var galleryTab     = document.getElementById('gallery-tab');

var buttons        = document.getElementsByClassName('btn');
var workTabBtn     = document.getElementById('work-tab-btn');
var personalTabBtn = document.getElementById('personal-tab-btn');
var aboutTabBtn    = document.getElementById('about-tab-btn');

document.addEventListener("DOMContentLoaded", function(){
    /**
     * Initialize
     */
    logo.innerText = data.designer_name;
    document.title = data.designer_name + ' Portfolio';
    setTab(workTab, workTabBtn, tabContent('work'));
    copyrights.innerHTML = "All content rights are reserved <br> " + 
        data.designer_name + 
        ' &copy; 2020';

    /**
     * Select tab (work, personal, gallery and about)
     */
    workTabBtn.addEventListener('click', function(){
        setTab(workTab, workTabBtn, tabContent('work'));
    });

    personalTabBtn.addEventListener('click', function(){
        setTab(personalTab, personalTabBtn, tabContent('personal'));
    });

    aboutTabBtn.addEventListener('click', function(){
        setTab(aboutTab, aboutTabBtn, tabContent('about'));
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
function tabContent(tab = 'work', id = null){
    var content = '';
    var i , j, k = 0;
    var title = '', image = '', clickHandler = '';
    
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
                        clickHandler = "setTab(galleryTab, workTabBtn, tabContent('work_gallery', "+ k +"))";
                    }
                    else if (tab == 'personal') {
                        if (data.personal[k] === undefined) continue;
                        title = data.personal[k].name;
                        image = data.personal[k].image;
                        clickHandler = "setTab(galleryTab, personalTabBtn, tabContent('personal_gallery', "+ k +"))";
                    }

                    content += '<div class="column">';
                    content += '<img src="' + image + '" alt="' + title + '"/>';
                    content += '<a href="javascript:;" class="link"';
                    content += 'onclick="' + clickHandler + '">';
                    content += title + '</a>';
                    content += '</div>';
                    
                    k += 1;
                }
                content += '</div>';
            }
        break;
        
        case 'work_gallery':
            content += '<h1>' + data.work[id].name + '</h1>';
            content += '<article>' + data.work[id].description + '</article>';
            content += '<img src="' + data.work[id].cover +
                       '" alt="' + data.work[id].name + ' Image" id="main-image"/>';

            if (!data.work[id].images.length) break;
            clickHandler = "document.getElementById('main-image').src = this.src";
            content += '<div class="slider">';
            for (i = 0;i < data.work[id].images.length;i++) {
                content += '<img src="' + data.work[id].images[i] + 
                           '" onclick="' + clickHandler + '"/>';
            }
            content += '</div>';
        break;

        case 'personal_gallery':
            content += '<h1>' + data.personal[id].name + '</h1>';
            content += '<article>' + data.personal[id].description + '</article>';
            content += '<img src="' + data.personal[id].image +
                       '" alt="' + data.personal[id].name + ' Image" class="main-image"/>';
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