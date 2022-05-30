const secctionPage = new fullpage('#fullpage', {

    autoScrolling: true, 
    fitToSection: false, 
    fitToSectionDelay: 300, 
    easing: 'easeInOutCubic', 
    scrollingSpeed: 700, 
    css3: true, 
    easingcss3: 'ease-out', 
    loopBottom: false, 

    // BARRA DE NAVEGACION
    navigation: true, 
    menu: '#menu', 
    anchors: ['inicio', 'about', 'projects', 'contact'], 
    navigationTooltips: ['Home', 'About me', 'My Projects','Contact me'], 
    showActiveTooltip: true, 

    controlArrows: false, 
    slidesNavigation: false, 

    afterLoad: function(origin, destination){
        if(destination.anchor === 'about' || 'projects' || 'contact'){
            document.querySelector('body .nav').style.background = 'rgb(59 72 98/ .2 )';
            document.querySelector('body .nav').style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,1)';
            document.querySelector('body .nav').style.height = '9.7%'; 
        }
        
        if (destination.anchor === 'inicio'){
            document.querySelector('body .nav').style.background = 'rgb(255 255 255 / .9)';
            document.querySelector('body .nav').style.height = '10%';
            document.querySelector('body .nav').style.boxShadow = ' 0px 2px 20px 0px rgba(226,227,240,1)';
        }
   }
});