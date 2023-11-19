let lastscroll = 0;
window.addEventListener('scroll', () => {
    let scrollpos = window.scrollY;
    let scrollValue = (scrollpos + window.innerHeight) / document.body.offsetHeight;

    console.log(scrollpos);
    console.log(window.scrollY);
    console.log(scrollValue);

    if (scrollpos > 80) {
        menu.style.position = "fixed";
        menu.style.top = "-100px";
        if (lastscroll > window.scrollY) {
            menu.style.top = "0px";
        }
    lastscroll = window.scrollY;
    } else {
        menu.style.position = "relative";
        menu.style.top = 0;
    }

    if (scrollValue > 0.40 && scrollValue < 0.54) {
        part1.style.setProperty('--defaultpath', "76% 24% 90% 10% / 20% 85% 15% 80%");
    } else {
        part1.style.setProperty('--defaultpath', "5px");
    }

    if (scrollValue > 0.42 && scrollValue < 0.6) {
        part2.style.setProperty('--defaultscale', "1");
    } else {
        part2.style.setProperty('--defaultscale', "0");
    }
    
    if (scrollValue > 0.92) {
        imgfooter.style.borderRadius = "76% 24% 90% 10% / 20% 85% 15% 80%";
        footcol01.style.setProperty('--defaultopacity', '1');
    } else {
        imgfooter.style.borderRadius = "5px";
        footcol01.style.setProperty('--defaultopacity', '0');
    }

});
