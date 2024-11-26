$(document).ready(function () {
    $(function () {
        $.fn.mohamedElgohary = function () {
            var imgSrc = $("img").map(function () {
                return $(this).attr("src");
            }).get();
            //---------------------------------------------------------//
            $("img").on('click', function () {
                var img = $(this).clone().css({
                    "width": "70%",
                    "height": "70%",
                    "margin-top": "6%",
                });
                //---------------------------------------------------------//
                var closing = $('<img>').attr('src', 'X.jpg').css({
                    "width": "5%",
                    "height": "5%",
                    "float": "right",
                    "margin-right": "20px",
                    "margin-top": "20px"
                });
                //---------------------------------------------------------//
                var div = $('<div>').css({
                    "width": "100%",
                    "height": "100%",
                    "background-color": "rgba(20, 20, 20, 0.884)",
                    "top": "0",
                    "left": "0",
                    "position": "fixed",
                    "justify-content": "center",
                    "align-items": "center"
                });
                //---------------------------------------------------------//
                var btnN = $('<button>').text('==>').css({
                    "position": "absolute",
                    "width": "8%",
                    "height": "4em",
                    "border-radius": "20px",
                    "color": "#fff",
                    "font-size": "18px",
                    "background-color": "black",
                    "right": "0",
                    "top": "50%"
                });
                //---------------------------------------------------------//
                var btnP = $('<button>').text('<==').css({
                    "position": "absolute",
                    "width": "8%",
                    "height": "4em",
                    "border-radius": "20px",
                    "color": "#fff",
                    "font-size": "18px",
                    "background-color": "black",
                    "left": "0",
                    "top": "50%"
                });
                //---------------------------------------------------------//
                $(div).append(btnP, img, btnN, closing);
                $("body").append(div);
                $(closing).on('click', function () {
                    $(div).fadeOut(1000);
                })
                //---------------------------------------------------------//
                $(btnN).on('click', function () {
                    $(img).fadeOut(1000, function () {
                        for (let i = 0; i < imgSrc.length; i++) {
                            if ($(img).attr('src') === imgSrc[i]) {
                                if (i++ == imgSrc.length - 1) {
                                    $(img).attr('src', imgSrc[0]).fadeIn(1000);
                                } else {
                                    $(img).attr('src', imgSrc[i++]).fadeIn(1000);
                                }
                            }
                        }
                    });
                })
                //---------------------------------------------------------//
                $(btnP).on('click', function () {
                    $(img).fadeOut(1000, function () {
                        for (let i = imgSrc.length - 1; i >= 0; i--) {
                            if ($(img).attr('src') === imgSrc[i]) {
                                if (i-- == 0) {
                                    $(img).attr('src', imgSrc[imgSrc.length - 1]).fadeIn(1000);
                                } else {
                                    $(img).attr('src', imgSrc[i--]).fadeIn(1000);
                                }
                            }
                        }
                    });

                })
            })
        }
        $("img").mohamedElgohary()
    })

})