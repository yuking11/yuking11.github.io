$(document).ready(function(){

  // タブ切り替え（アコーディオン）
  /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
  if( $('[data-tab]')[0] ){
    $('[data-tab]').each(function(){
      var $wrap    = $(this),
          $type    = $wrap.attr('data-tab'),
          $effect  = $wrap.attr('data-tab-effect'),
          $label   = $wrap.find('[data-tab-label]'),
          $content = $wrap.find('[data-tab-content]'),
          is_moving = false;
      $label.focus(function(){ $(this).blur(); });
      // 初期設定
      $content.hide();
      $wrap.find('[data-tab-label="true"]').addClass('is_active');
      $wrap.find('[data-tab-content="true"]').show();
      // タブクリックの処理
      $label.on('click', function(){
        function fin(){
          is_moving = false;
        }// end function
        var $self    = $(this),
            $parent  = $self.closest('[data-tab]'),
            $matches = $self.attr('data-tab-label'),
            $target  = $self.attr('href');
        var speed    = ( $parent.attr('data-tab-speed') ) ? parseInt($parent.attr('data-tab-speed')) : 500;
        if( !$matches ){
          // タブの切り替え
          if ( !is_moving ) {
            is_moving = true;
            // タブが画像の場合
            if( $type === 'image' ) {
              // クリックしたタブ画像ファイル名末尾に _on を付与
              var $imgSrc = $self.find('img').attr('src').replace(/_on/g, ""),
                  $imgDot = $imgSrc.lastIndexOf('.'),
                  $onSrc  = $imgSrc.substr(0, $imgDot) + '_on' + $imgSrc.substr($imgDot, 4);
              $self.find('img').attr('src', $onSrc);
              // タブ画像の切り替え
              var $imgOff = $parent.find('[data-tab-label="true"] img').attr('src').replace(/_on/g, "");
              $parent.find('[data-tab-label="true"] img').attr('src', $imgOff);
            }// end if
            // ラベルの制御
            $parent.find('[data-tab-label="true"]').attr('data-tab-label', '').removeClass('is_active');
            $self.attr('data-tab-label', true).addClass('is_active');
            // コンテンツの制御
            if ( $effect === 'fade' ) {
              $parent.find('[data-tab-content="true"]').stop(true).attr('data-tab-content', '').hide();
              $parent.find($target).attr('data-tab-content', true);
              $parent.find($target).stop(true).fadeIn( speed, fin );
            } else if ( $effect === 'slide' ) {
              $parent.find('[data-tab-content]').stop(true).attr('data-tab-content', '').slideUp( speed );
              $parent.find($target).attr('data-tab-content', true);
              $parent.find($target).stop(true).slideDown( speed, fin );
            } else {
              $parent.find('[data-tab-content="true"]').stop(true).attr('data-tab-content', '').hide();
              $parent.find($target).attr('data-tab-content', true);
              $parent.find($target).stop(true).show( 0, fin );
            }// end if
          }// end if
          return false;
        } else {
          return false;
        }// end if
      });// end click function
      // タブが画像の場合の処理
      if( $type === 'image' ) {
        var $tabImg = $wrap.find('[data-tab-label="true"] img'),
            $imgSrc = $tabImg.attr('src'),
            $imgDot = $imgSrc.lastIndexOf('.'),
            $onSrc  = $imgSrc.substr(0, $imgDot) + '_on' + $imgSrc.substr($imgDot, 4);
        $tabImg.attr('src',$onSrc);
        $label.on('mouseenter',function(){
          var $self    = $(this),
              $matches = $self.attr('data-tab-label');
          if( !$matches ){
            var $imgSrc = $self.find('img').attr('src'),
                $imgDot = $imgSrc.lastIndexOf('.'),
                $onSrc  = $imgSrc.substr(0, $imgDot) + '_on' + $imgSrc.substr($imgDot, 4);
            $self.find('img').attr('src', $onSrc);
          }// end if
        }).on('mouseleave',function(){
          var $self    = $(this),
              $matches = $self.attr('data-tab-label');
          if( !$matches ){
            var $imgOff = $self.find('img').attr('src').replace(/_on/g, "");
            $self.find('img').attr('src', $imgOff);
          }// end if
        });// end function
      }// end if
    });// end each function
  }// end if

});
