function sectionHeight_lv2() {
    console.log('Triggered: main_lv2.js');
    sectionHeight();
    console.log('---[Processing star_section...]:Begin---');
    var star_sections = document.querySelectorAll('.star_section');
    console.log('star_sections.length = ' + star_sections.length);
    for(var i=0; i<star_sections.length; i++) {
        console.log('Processing No.' + i + ' matched section...');
        star_sections[i].style.cssText += 'height: min-content';
        // star_sections[i].css('height','min-content');
    }
    console.log('---[Processing star_section...]:End---');
}

$(window).resize(sectionHeight_lv2);
$(window).addEventListener("load", sectionHeight_lv2);

sectionHeight_lv2();