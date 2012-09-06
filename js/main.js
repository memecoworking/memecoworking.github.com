 $(document).ready(function() {
 	
    var controller = $.superscrollorama();

    controller.addTween('.circle', TweenMax.from( $('.circle'), 1, {css:{scaleX:.3}, ease:Back.easeOut}));
    controller.addTween(100, TweenMax.to( $('#medark'), 1, {css:{opacity:1, top: '80px'}}));

    //controller.addTween('#medark', TweenMax.from( $('#medark'), 1, {css:{top: 80px}}));
    /*controller.addTween('#fly-it', TweenMax.from( $('#fly-it'), .25, {css:{right:'1000px'}, ease:Quad.easeInOut}));
    controller.addTween('#spin-it', TweenMax.from( $('#spin-it'), .25, {css:{opacity:0, rotation: 720}, ease:Quad.easeOut}));
    controller.addTween('#scale-it', TweenMax.fromTo( $('#scale-it'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'240px'}, ease:Quad.easeInOut}));
    controller.addTween('#smush-it', TweenMax.fromTo( $('#smush-it'), .25, {css:{opacity:0, 'letter-spacing':'30px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, 'letter-spacing':'-10px'}, ease:Quad.easeInOut}), 0, 100); */
});
