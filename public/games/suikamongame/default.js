$(window).resize(function () {
  resize_window(window, window.document, window.jQuery);
});

$(document).ready( function(){
  resize_window(window, window.document, window.jQuery);
});
 
  
function resize_window(window, document, $) {
  
  let iframe = $('#suikamongame');
  let wrapper = iframe.parent();
  let width = wrapper.width();
  console.log(`wrapwidth: ${width}`);
  let ratiow = width / iframe.width();
  console.log(`ifrawidth: ${iframe.width()}`);
  let height = wrapper.height();
  console.log(`wrapheight: ${height}`);
  let ratioh = height / iframe.height();
  console.log(`ifraheight: ${iframe.height()}`);

  // IFRAME自体は読み込みページの大きさにCSSで適用している。
  // それを#wrapperのサイズにスケールインする。
  // https://stackoverflow.com/questions/166160/how-can-i-scale-the-content-of-an-iframe
  iframe
    .css('-ms-transform',     `scale(${ratiow})`)
    .css('-moz-transform',    `scale(${ratiow})`)
    .css('-o-transform',      `scale(${ratiow})`)
    .css('-webkit-transform', `scale(${ratiow})`)
    .css('transform',         `scale(${ratiow})`)
    .css('-ms-transform-origin',     '0 0')
    .css('-moz-transform-origin',    '0 0')
    .css('-o-transform-origin',      '0 0')
    .css('-webkit-transform-origin', '0 0')
    .css('transform-origin',         '0 0');

  // #iframeのひとつ上のラッパー#wrapperの高さを同じ倍率で変更する。
  // これをしないとうまくもともとのIFRAMEの高さのままになる。

}; 
