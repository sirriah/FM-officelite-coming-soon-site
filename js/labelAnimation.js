$('input').focus(function(){
    $(this).parents('.component-wrap').addClass('normal');
});

$('input').blur(function(){
    var inputValue = $(this).val();
    if ( inputValue == "" ) {
      $(this).parents('.component-wrap').removeClass('normal');
    } else {
      //$(this).addClass('filled');
    }
  })  


  // inspiration https://codepen.io/nathanlong/pen/kkLKrL