var sectionHeight_lv2 = function() {
    console.log('Triggered: main_lv2.js')
    console.log($('section').attr('class'))
    if ( $('section').attr('class') == 'star_section' ) {
        console.log('Triggered: min-content')
        $('section').css('height','min-content');
        sleep(15)
    } else {
        console.log('Triggered: main_lv2.js --> main.js')
        sectionHeight()
    }
}

$(window).resize(sectionHeight_lv2);
