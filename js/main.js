$('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
  var target = $(this).attr('href'),
    bl_top = $(target).offset().top - 5;
  $('body, html').animate({
    scrollTop: bl_top
  }, 700);
  return false;
});

const defaultSelect = () => {
  const element = document.querySelector('.default');
  const choices = new Choices(element, {
    searchEnabled: false,
  });
};

defaultSelect();

var elem = document.querySelector('input[type="range"]');

var rangeValue = function(){
  var newValue = elem.value;
  var target = document.querySelector('.value');
  target.innerHTML = newValue + "%";
}

elem.addEventListener("input", rangeValue);