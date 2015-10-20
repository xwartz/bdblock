;(function () {

    var App = {

        removeRight: function () {
            $('#content_right').remove();
        },

        removeLeft: function () {
            $('[href*="http://e.baidu.com/"]').parent().remove();
        }
    };

    // @todo 针对百度页面异步渲染
    setTimeout(function () {
        App.removeRight();
        App.removeLeft();
        console.log('done');
    }, 500);

}())