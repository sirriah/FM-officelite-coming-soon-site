// If somebody click on the input, add its parent the "normal" class 
$('input').focus(function(){
    $(this).parents('.component-wrap').addClass('normal');
});

// if somabeody click on something else, but nothing was write inside input, the normal class is removed
$('input').blur(function(){
    var inputValue = $(this).val();
    if ( inputValue == "" ) {
      $(this).parents('.component-wrap').removeClass('normal');
    } 
  })  


  // inspiration https://codepen.io/nathanlong/pen/kkLKrL