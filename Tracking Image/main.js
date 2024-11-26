$(document).ready(function () {
    $("img").on("mouseenter", function (event) {
        var $clone = $(this).clone().addClass("focused").css({
            position: "absolute",
            pointerEvents: "none",
            left: event.pageX,
            top: event.pageY
        }).appendTo("body");
        //--------------------------------------------------//
        $(document).on("mousemove", function (event) {
            $clone.css({
                left: event.pageX,
                top: event.pageY
            });
        });
    })
    //--------------------------------------------------//
    $("img").on("mouseleave", function () {
        $(".focused").remove();
    });
})