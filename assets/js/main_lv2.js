var sectionHeight_lv2 = function() {
    console.log('Triggered: main_lv2.js')
    if ( $(section).attr('name') = 'star_section' ) {
        $('section').css('height','min-content');
    } else {
        console.log('Triggered: main_lv2.js --> main.js')
        sectionHeight()
    }
}

$(window).resize(sectionHeight_lv2);
