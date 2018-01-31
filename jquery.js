$(document).ready(function () {

    //   Navigation

    $("#work").click(function () {
        if ($("#workset").css("height") === "0px") {
            $("#workset").css({
                visibility: "visible",
            });
            $("#workset").animate({
                height: "210",
            });
        } else {
            $("#workset").animate({
                height: "0",
            });
            $("#workset").animate({
                visibility: "hidden",
            });
        };
        $("#photoset").css({
            visibility: "hidden",
        });
        $("#photoset").animate({
            height: "0",
        });
    });
    $("#photo").click(function () {
        if ($("#photoset").css("height") === "0px") {
            $("#photoset").css({
                visibility: "visible",
            });
            $("#photoset").animate({
                height: "60",
            });
        } else {
            $("#photoset").animate({
                height: "0",
            });
            $("#photoset").animate({
                visibility: "hidden",
            });
        };
        $("#workset").css({
            visibility: "hidden",
        });
        $("#workset").animate({
            height: "0",
        });
    });

    //   Thumbnail Hover

    $(".workimg").mouseover(function () {
        $(this).find("h3").animate({
            opacity: "1",
        }, 250);
    });
    $(".workimg").mouseout(function () {
        $(this).find("h3").animate({
            opacity: "0",
        }, 250);
    });

    //   Slideshows

    $('.slidecontainer').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
    });
});