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
 * Set logo / copyrights
 */

document.getElementById('logo').innerText = data.designer_name;
document.getElementById('copyrights').innerHTML = data.designer_name + ' &copy; 2020';


/**
 * Main Vars
 */

var tabs = document.getElementsByClassName('tab');

var work = document.getElementById('work-tab');
var personal = document.getElementById('personal-tab');
var about = document.getElementById('about-tab');

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

/**
 * Set work
 */

document.getElementById('work-tab-btn').addEventListener('click', function(){
    hideAll(tabs);
    show(work);
    work.innerHTML = 'lol1';
});

/**
 * Set personal
 */

document.getElementById('personal-tab-btn').addEventListener('click', function(){
    hideAll(tabs);
    show(personal);
    personal.innerHTML = 'lol2';
});

/**
 * Set about
 */

document.getElementById('about-tab-btn').addEventListener('click', function(){
    hideAll(tabs);
    show(about);

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

    about.innerHTML = content;
});