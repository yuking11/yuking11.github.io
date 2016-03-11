$(document).ready(function(){

  // スムーズスクロール
  /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
  $(function(){
    //$('a[href^=#]:not([data-toggle])').on('click', function() {
    $('[data-scroll]').on('click', function() {
      var speed   = 500,
          $self   = $(this),
          $href   = $self.attr('href'),
          $margin = $self.attr('data-scroll') ? parseInt($self.attr('data-scroll')) : 0,
          $target = $($href);
      var pos = ( $target[0] && $target !== '#page_top' ) ? $target.offset().top - $margin : 0;
      $('html,body').animate({scrollTop: pos}, speed, 'swing');
      $self.blur();
      return false;
    });// end function.onClick
  });// end function

});
