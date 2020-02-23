(function () {

// Reveal toggle
$('.designProcess-reveal').click(function(){
    $(this).toggleClass('designProcess-revealing');
    $('.designProcess__revealed').slideToggle();
});



// Grid material
var $grid = $('.masonry').masonry({
  itemSelector: '.masonry__item',
  columnWidth: '.masonry__sizer',
  percentPosition: true,
  stagger: 90,
  transitionDuration: '.4s'
});

$grid.on( 'click', '.masonry__item--content', function() {
  var itemContent = this;
  var otherItemContent  = '.is-expanded';
  var itemElem = itemContent.parentNode;

  setItemContentPixelSize( itemContent );

  if ( itemElem.classList.contains("is-expanded") ) {
    // $( otherItemContent ).removeClass('is-expanded');
  } else {
    $( otherItemContent ).removeClass('is-expanded');
    $( itemElem ).toggleClass('is-expanded');
  }

  // force redraw
  var redraw = itemContent.offsetWidth;
  // renable default transition
  itemContent.style[ transitionProp ] = '';

  addTransitionListener( itemContent );
  setItemContentTransitionSize( itemContent, itemElem );

  $grid.masonry();
});

var docElem = document.documentElement;

var transitionProp = typeof docElem.style.transition == 'string' ?
    'transition' : 'WebkitTransition';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProp ];

function setItemContentPixelSize( itemContent ) {
  var previousContentSize = getSize( itemContent );

  // disable transition
  itemContent.style[ transitionProp ] = 'none';

  // set current size in pixels
  itemContent.style.width = previousContentSize.width + 'px';
  itemContent.style.height = previousContentSize.height + 'px';
}

function addTransitionListener( itemContent ) {
  // reset 100%/100% sizing after transition end
  var onTransitionEnd = function() {
    itemContent.style.width = '';
    itemContent.style.height = '';
    itemContent.removeEventListener( transitionEndEvent, onTransitionEnd );
  };
  itemContent.addEventListener( transitionEndEvent, onTransitionEnd );
}

function setItemContentTransitionSize( itemContent, itemElem ) {
  // set new size
  var size = getSize( itemElem );
  itemContent.style.width = size.width + 'px';
  itemContent.style.height = size.height + 'px';
}

}());
