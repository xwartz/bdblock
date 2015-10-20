;(function () {

    var App = {

        removeRight: function () {
            $('#content_right').remove();
        },

        removeLeft: function () {
            $('[href*="http://e.baidu.com/"]').parent().remove();
        }
    };

    // @todo 
    setTimeout(function () {
        App.removeRight();
        App.removeLeft();
        console.log('done');
    }, 500);

}())