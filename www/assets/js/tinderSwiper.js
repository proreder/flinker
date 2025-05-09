/** 	
    =========================
    Template Name 	 : Dating Kit
    Author			 : DexignZone
    Version			 : 1.0
    File Name		 : custom.js
    Author Portfolio : https://themeforest.net/user/dexignzone/portfolio

    Core script to handle the entire theme and core functions
**/
var DatingKitSwiper = function () {
    var e, t, a, o = !1, s = 0, i = jQuery(".dzSwipe_card").length, n = 80, d = 0, c = 0, r = 0;

    var u = function () {
        ++s === i && (s = 0, $(".dzSwipe_card").removeClass("below"));
    };

    var l = function () {
        $(document).on("mousedown touchstart", ".dzSwipe_card:not(.inactive)", function (s) {
            if (!o) {
                e = $(this);
                t = $(".dzSwipe_card__option.dzReject", e);
                a = $(".dzSwipe_card__option.dzLike", e);
                dzCardSuperLike = $(".dzSwipe_card__option.dzSuperlike", e);

                var i = s.pageX || s.originalEvent.touches[0].pageX;
                var l = s.pageY || s.originalEvent.touches[0].pageY;

                $(document).on("mousemove touchmove", function (s) {
                    var n = s.pageX || s.originalEvent.touches[0].pageX;
                    var u = s.pageY || s.originalEvent.touches[0].pageY;

                    c = l - u;
                    (d = n - i) || c && function () {
                        o = !0;
                        r = d / 10;
                        degY = c / 10;

                        var s = !1;
                        Math.abs(c) > Math.abs(d) && (s = !0);

                        s
                            ? e.css("transform", "translateY(-" + c + "px)")
                            : e.css("transform", "translateX(" + d + "px) rotate(" + r + "deg)");

                        console.log("dzCard_moveY->" + c);

                        var i = d / 100;
                        var n = c / 100;

                        console.log("opacityY->" + n);

                        var u = i >= 0 ? 0 : Math.abs(i);
                        var l = i <= 0 ? 0 : i;

                        console.log("likeOpacity--" + l);

                        var p = n <= 0 ? 0 : n;

                        console.log("superlikeOpacity-" + p);

                        t.css("opacity", u);
                        a.css("opacity", l);
                        s && dzCardSuperLike.css("opacity", p);
                    }();
                });

                $(document).on("mouseup touchend", function () {
                    $(document).off("mousemove touchmove mouseup touchend");

                    Math.abs(d) < Math.abs(c)
                        ? (c >= n
                            ? e.addClass("to-upside")
                            : c <= -80 && e.addClass("to-downside"),
                            Math.abs(c) >= n && (
                                e.addClass("inactive"),
                                setTimeout(function () {
                                    e.addClass("below").removeClass("inactive to-upside to-downside");
                                    u();
                                }, 300)
                            ),
                            Math.abs(c) < n && e.addClass("reset"),
                            setTimeout(function () {
                                e.attr("style", "").removeClass("reset").find(".dzSwipe_card__option").attr("style", "");
                                c = 0;
                                o = !1;
                            }, 300))
                        : Math.abs(d) > 0 && (
                            d >= n
                                ? e.addClass("to-right")
                                : d <= -80 && e.addClass("to-left"),
                            Math.abs(d) >= n && (
                                e.addClass("inactive"),
                                setTimeout(function () {
                                    e.addClass("below").removeClass("inactive to-left to-right");
                                    u();
                                }, 300)
                            ),
                            Math.abs(d) < n && e.addClass("reset"),
                            setTimeout(function () {
                                e.attr("style", "").removeClass("reset").find(".dzSwipe_card__option").attr("style", "");
                                d = 0;
                                o = !1;
                            }, 300)
                        );
                });
            }
        });
    };

    return {
        init: function () {
            l();
            jQuery(".dz-sp-like").on("click", function () {
                var e = jQuery(this).parents(".dzSwipe_card");
                var t = e.find(".dzSwipe_card__option.dzSuperlike");

                t.css("opacity", "1");
                e.slideUp(300, function () {
                    u();
                    setTimeout(function () {
                        e.addClass("below").css("display", "");
                        t.css("opacity", "");
                    }, 500);
                });
            });
        },
        load: function () { },
        resize: function () { }
    };
}();

jQuery(document).ready(function () {
    "use strict";
    DatingKitSwiper.init();
});