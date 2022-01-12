
//scss
import '../scss/style.scss';
import '../scss/lib.scss';
//js libs
import { Fancybox } from "@fancyapps/ui";

window.Fancybox = Fancybox;

window.addEventListener('scroll', function(){

    //headerScroll()

    animateTechnology()

});

document.addEventListener('DOMContentLoaded', function(){
    
    burgerMenu()

    //headerScroll()

    accordeonInit()

    adaptiveService()

    animateTechnology()

    hoverServiceItem()

    initMap()

});

function initMap() {
    // const links = document.querySelectorAll('.map__wrapper svg a')
    
    // links.forEach((link)=> {
    //     link.addEventListener('click', (event)=> {
    //         event.preventDefault()
    //         window.fancyboxMap = Fancybox.show([
    //             {
    //                 src: "<div id='map-init'></div>",
    //                 type: "html",
    //             }
    //         ]);
    //     })
    // });
    // fancyboxMap.on("done", (fancybox, slide) => {
    //     console.log(`done!`);
    // });
    const map = Fancybox.bind(".map__wrapper svg a", {
        Html: {
            tpl: `<div id='map-init'></div>`,
            format: "",
        },
		on : {
            done : (fancybox) => {
                console.log(fancybox.$container.querySelector('.fancybox__content'));
                //fancybox.$container.querySelector('.fancybox__content').textContent = ''
		    }
		}
	});
    console.log(map);
}

function hoverServiceItem() {
    const services = document.querySelectorAll('.service-item')
    
    if (window.innerWidth > 991) {
        services.forEach((service)=> {
            service.addEventListener('mouseenter', (event)=> {
                services.forEach((service)=> {
                    service.classList.remove('active');
                })
                service.classList.add('active')
            })
        })
    }
}

function animateTechnology() {
    const technology = document.querySelector('.technology');
    const progressBars = document.querySelectorAll('.technology-progress-bar span');
    if(technology){
        if (window.pageYOffset > technology.offsetTop + window.innerHeight * 0.6 ) {
            progressBars.forEach(function (progressBar) {
                const width = progressBar.getAttribute('data-width')
                progressBar.style.width = width + '%'
            })
        }
    }
}


function adaptiveService() {
    setTimeout(() => {
        const titles = document.querySelectorAll('.service-item__title span');

        if (titles.length) {
            titles.forEach((title)=> {
                const height = title.clientHeight;
                title.closest('.service-item').querySelector('.service-item__list').style.marginTop = height + 40 + 'px';
            }) 
        }  
    }, 500);
}


function accordeonInit() {
    const acordeonLinks = document.querySelectorAll('.acordeon-link')

    acordeonLinks.forEach((acordeonLink)=> {
        acordeonLink.addEventListener('click', (event)=> {
            const media = Number(acordeonLink.closest('.acordeon-wrapper').getAttribute('data-acordeon-mobile'));
            if (media) {
                if (window.innerWidth < media) {
                    accordeon(acordeonLink)
                }
            } else {
                accordeon(acordeonLink)
            }
        })
    })
}

function accordeon(link) {
    if (link.classList.contains('active')) {
        link.classList.remove('active');
        link.nextElementSibling.style.maxHeight = 0 + 'px';
        link.closest('.acordeon-wrapper').classList.remove('active')
    } else {
        link.classList.add('active');
        link.nextElementSibling.style.maxHeight = link.nextElementSibling.scrollHeight + 'px';
        link.closest('.acordeon-wrapper').classList.add('active')
    }
}

function headerScroll() {
    const header = document.querySelector('.header');
    const headerLogoImg = document.querySelector('.header__logo img');
    const headerLogoFixed = document.querySelector('.header__logo img').getAttribute('data-fixed-header-logo');
    const headerLogo = document.querySelector('.header__logo img').getAttribute('data-header-logo');

    if (window.pageYOffset > 0) {
        headerLogoImg.setAttribute('src', headerLogoFixed)
        header.classList.add('scroll-hedaer')
    } else {
        headerLogoImg.setAttribute('src', headerLogo)
        header.classList.remove('scroll-hedaer')
    }
}

function burgerMenu() {
    const body = document.querySelector('body')
    const burger = document.querySelector('.header-burger')
    const menu = document.querySelector('.header__menu')
    if(burger){
        burger.addEventListener('click', (event)=> {
            if (burger.classList.contains('active')) {
                body.classList.remove('lock')
                burger.classList.remove('active')
                menu.classList.remove('active')
            } else {
                body.classList.add('lock')
                burger.classList.add('active')
                menu.classList.add('active')
            }
        })
    }


    const linkAcordeon = document.querySelectorAll('.header__item svg')
    
    linkAcordeon.forEach((link)=> {
        link.addEventListener('click', (event)=> {
            console.dir(link.nextElementSibling.scrollHeight);
            if (link.classList.contains('active')) {
                link.classList.remove('active');
                link.nextElementSibling.style.maxHeight = 0 + 'px';
            } else {
                link.classList.add('active');
                link.nextElementSibling.style.maxHeight = link.nextElementSibling.scrollHeight + 'px';
            }
        })
    })
}