(function($) {
    "use strict";
    jQuery(document).ready(function() {
        $(document).on("click", ".ins-container .product-remove .remove", function() {
            $(".loader-container-fixed, .loader-container").css("display", "inherit");
            $(".loader-overlay-fixed, .loader-overlay").css("display", "inherit");
        });
        var ins_inner = jQuery(".ins-inner").width();
        $(document).on("click", "#ins-toggle-button, .added_to_cart, #ins-close", function(e) {
            e.preventDefault();
            $(".loader-overlay-fixed").css({
                width: ins_inner + 32
            });
            $(".loader-container-fixed").css({
                width: ins_inner
            });
        });
        $(document.body).on("added_to_cart", function() {
            $(".loader-overlay-fixed").css({
                width: ins_inner + 32
            });
            $(".loader-container-fixed").css({
                width: ins_inner
            });
        });
        if (noquickview == "no") {
            $(document.body).append('<div class="ins-quick-view"></div>');
            $(document).on("click", ".ins-quick-view .close", function(e) {
                $(this).parent().fadeOut(300);
            });
            $(document).on("click", ".product_type_variable", function(e) {
                e.preventDefault();
                var $this = $(this),
                    cartPos = $this.offset(),
                    product_id = $this.data("product_id");
                $(".ins-quick-view").css({
                    top: parseInt(cartPos.top) + parseInt(45) + "px",
                    left: cartPos.left + "px",
                });
                $.ajax({
                    type: "post",
                    url: ins_ajax_params.ins_ajax_url,
                    data: {
                        action: "wi_variable_product_quick_view",
                        security: ins_ajax_params.ins_ajax_nonce,
                        product_id: product_id,
                    },
                    beforeSend: function(data) {
                        $this.addClass("loading");
                        $(".ins-quick-view").block();
                    },
                    success: function(data) {
                        $this.removeClass("loading");
                        $(".ins-quick-view").fadeIn(300).html(data).prepend('<span class="close"></span>');
                    },
                    error: function(data) {
                        console.log(data);
                    },
                });
            });
        }
        if (cartflymob == "yes") {
            if (cartFlyanim == "on") {
                if (cartFlyicon == "toggler") {
                    $(document).on("click", ".add_to_cart_button:not(.product_type_variable, .no-fly), .single_add_to_cart_button:not(.disabled)", function() {
                        $("body").append('<div id="ins-cart-fly">' + ins_ajax_params.cart_icon + "</div>");
                        var endPos = $("#ins-toggle-button").offset();
                        var startPos = $(this).offset();
                        $("#ins-cart-fly").css({
                            top: startPos.top + "px",
                            left: startPos.left + "px",
                        }).animate({
                            opacity: 1,
                            top: endPos.top,
                            left: endPos.left,
                        }, 1500, function() {
                            $(".cartboom").addClass("cart_boom");
                            setTimeout(function() {
                                $(".cartboom").removeClass("cart_boom");
                            }, 2200);
                            $(this).css({
                                opacity: "0",
                                "z-index": "0",
                            });
                            $(this).detach();
                        });
                    });
                }
                if (cartFlyicon == "thumb") {
                    $(document).on("click", ".add_to_cart_button:not(.product_type_variable, .no-fly)", function() {
                        var productThumb = $(this).closest(".product").find("img").attr("src");
                        var startPos = $(this).closest(".product").find("img").offset();
                        var productThumbwidth = $(this).closest(".product").find("img").width();
                        $("body").append('<div id="ins-cart-fly"><img src="' + productThumb + '"></div>');
                        var endPos = $("#ins-toggle-button").offset();
                        $("#ins-cart-fly").css({
                            top: startPos.top + "px",
                            left: startPos.left + "px",
                            width: productThumbwidth + "px",
                        }).animate({
                            opacity: 1,
                            top: endPos.top,
                            left: endPos.left,
                            width: "50px",
                            height: "auto",
                        }, 1500, "linear", function() {
                            $(".cartboom").addClass("cart_boom");
                            setTimeout(function() {
                                $(".cartboom").removeClass("cart_boom");
                            }, 2200);
                            $(this).css({
                                opacity: "0",
                                "z-index": "0",
                            });
                            $(this).detach();
                        });
                    });
                    $(document).on("click", ".single_add_to_cart_button:not(.disabled)", function() {
                        if ($(this).parents(".has-post-thumbnail").find(".woocommerce-product-gallery__image").find("img").attr("src")) {
                            var productThumb = $(this).parents(".has-post-thumbnail").find(".woocommerce-product-gallery__image").find("img").attr("src");
                            var startPos = $(this).parents(".has-post-thumbnail").find(".woocommerce-product-gallery__image").find("img").offset();
                            var productThumbwidth = $(this).parents(".has-post-thumbnail").find(".woocommerce-product-gallery__image").width();
                        } else {
                            var productId = $(this).parents(".woocommerce-variation-add-to-cart").find('input[name="add-to-cart"]').attr("value");
                            var productThumb = $(this).parents().find(".post-" + productId).find(".woocommerce-LoopProduct-link").find("img").attr("src");
                            var startPos = $(this).parents().find(".post-" + productId).find(".woocommerce-LoopProduct-link").find("img").offset();
                            var productThumbwidth = $(this).parents().find(".post-" + productId).find(".woocommerce-LoopProduct-link").find("img").width();
                        }
                        $("body").append('<div id="ins-cart-fly"><img src="' + productThumb + '"></div>');
                        var endPos = $("#ins-toggle-button").offset();
                        $("#ins-cart-fly").css({
                            top: startPos.top + "px",
                            left: startPos.left + "px",
                            width: productThumbwidth + "px",
                        }).animate({
                            opacity: 1,
                            top: endPos.top,
                            left: endPos.left,
                            width: "50px",
                            height: "auto",
                        }, 1500, "linear", function() {
                            $(".cartboom").addClass("cart_boom");
                            setTimeout(function() {
                                $(".cartboom").removeClass("cart_boom");
                            }, 2200);
                            $(this).css({
                                opacity: "0",
                                "z-index": "0",
                            });
                            $(this).detach();
                        });
                    });
                }
            }
        }
        if (noajaxaddtocart == "no") {
            $(document).on("click", ".single_add_to_cart_button:not(.disabled)", function(e) {
                e.preventDefault();
                var thisbutton = $(this),
                    cart_form = thisbutton.closest("form.cart"),
                    id = thisbutton.val(),
                    product_qty = cart_form.find("input[name=quantity]").val() || 1,
                    product_id = cart_form.find("input[name=product_id]").val() || id,
                    variation_id = cart_form.find("input[name=variation_id]").val() || 0;
                var data = {
                    action: "wi_single_ajax_add_to_cart",
                    product_id: product_id,
                    product_sku: "",
                    quantity: product_qty,
                    variation_id: variation_id,
                };
                $(document.body).trigger("adding_to_cart", [thisbutton, data]);
                $.ajax({
                    type: "post",
                    url: ins_ajax_params.ins_ajax_url,
                    data: data,
                    beforeSend: function(response) {
                        thisbutton.removeClass("added").addClass("loading");
                    },
                    complete: function(response) {
                        thisbutton.addClass("added").removeClass("loading");
                    },
                    success: function(response) {
                        if (response.error & response.product_url) {
                            window.location = response.product_url;
                            return;
                        } else {
                            $(document.body).trigger("added_to_cart", [response.fragments, response.cart_hash, thisbutton, ]);
                        }
                    },
                });
                return false;
            });
        }
        if (!String.prototype.getDecimals) {
            String.prototype.getDecimals = function() {
                var num = this,
                    match = ("" + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                if (!match) {
                    return 0;
                }
                return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
            };
        }
        $(document).on("click", ".ins-plus, .ins-minus", function() {
            var $qty = $(this).closest(".product-quantity").find(".qty"),
                currentVal = parseFloat($qty.val()),
                max = parseFloat($qty.attr("max")),
                min = parseFloat($qty.attr("min")),
                step = $qty.attr("step");
            if (!currentVal || currentVal === "" || currentVal === "NaN")
                currentVal = 0;
            if (max === "" || max === "NaN") max = "";
            if (min === "" || min === "NaN") min = 0;
            if (step === "any" || step === "" || step === undefined || parseFloat(step) === "NaN")
                step = 1;
            if ($(this).is(".ins-plus")) {
                if (max && currentVal >= max) {
                    $qty.val(max);
                } else {
                    $qty.val((currentVal + parseFloat(step)).toFixed(step.getDecimals()));
                }
            } else {
                if (min && currentVal <= min) {
                    $qty.val(min);
                } else if (currentVal > 0) {
                    $qty.val((currentVal - parseFloat(step)).toFixed(step.getDecimals()));
                }
            }
            $qty.trigger("change");
        });
        var timeout;
        $(".ins-container").on("change", "input.qty", function() {
            jQuery(".loader-container-fixed, .loader-container").css("display", "inherit");
            jQuery(".loader-overlay-fixed, .loader-overlay").css("display", "inherit");
            if (timeout !== undefined) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(function() {
                $("[name='update_cart']").trigger("click");
            }, 1000);
        });
        $(document.body).on("updated_cart_totals", function() {
            jQuery(".woocommerce-cart-form:not(:last)").remove();
            jQuery(".cart_totals:not(:last)").remove();
            jQuery(".loader-container-fixed, .loader-container").css("display", "none");
            jQuery(".loader-overlay-fixed, .loader-overlay").css("display", "none");
        });
        $(document).on("wc_fragments_refreshed", function() {
            $(document).trigger("ins_checkout_refresh");
        });
        if (ins_layout == "2" || ins_layout == "4" || ins_layout == "6") {
            $(document).on("click", "#ins-toggle-button, .added_to_cart, #ins-close, .ins-overlay, .empty-cart-content a", function(e) {
                e.preventDefault();
                var targetClass = $(".ins-toggle-button, .added_to_cart");
                if (targetClass.hasClass("open")) {
                    targetClass.removeClass("open");
                    $(".ins-container").removeClass("panel-open");
                    $("html").removeClass("ins-panel-open");
                } else {
                    targetClass.addClass("open");
                    $(".ins-container").addClass("panel-open");
                    $("html").addClass("ins-panel-open");
                }
            });
            if (autotogpanel == "true") {
                $(document).on("wc_fragments_refreshed", function() {
                    setTimeout(function() {
                        if (wiCartTotal > 0) {
                            $(".ins-toggle-button").addClass("open");
                            $(".ins-container").addClass("panel-open");
                            $("html").addClass("ins-panel-open");
                        } else {
                            $(".ins-toggle-button").removeClass("hascart");
                            $(".ins-container").removeClass("hascart");
                        }
                        jQuery('[name="update_cart"]').trigger("click");
                    }, 300);
                });
            }
        }
        if (ins_layout == "3" || ins_layout == "5" || ins_layout == "7") {
            if (autotogpanel == "true") {
                jQuery(document).on("wc_fragments_refreshed", function(e) {
                    e.preventDefault();
                    if ($.fancybox.getInstance() == false) {
                        if (jQuery(".ins-container").hasClass("ins-popup")) {
                            $.fancybox.open($("#ins-popup"));
                            if (wiCartTotal > 0) {
                                if (activewindow == "ck") {
                                    jQuery("#ins-cart-area").fadeOut();
                                    jQuery("#ins-checkout-area").fadeIn();
                                }
                            } else {
                                jQuery("#ins-cart-area").fadeOut();
                            }
                        }
                    }
                });
            }
            $(document).on("click", ".added_to_cart", function(e) {
                e.preventDefault();
                if ($.fancybox.getInstance() == false) {
                    if (jQuery(".ins-container").hasClass("ins-popup")) {
                        $.fancybox.open($("#ins-popup"));
                        if (activewindow == "ck") {
                            jQuery("#ins-cart-area").fadeOut();
                            jQuery("#ins-checkout-area").fadeIn();
                        }
                    }
                }
            });
        }
        $(".ins-container").on("change", ".wcsatt-options input", function() {
            jQuery(".loader-container-fixed, .loader-container").css("display", "inherit");
            jQuery(".loader-overlay-fixed, .loader-overlay").css("display", "inherit");
            $("[name='update_cart']").trigger("click");
        });
    });
})(jQuery);

function insClearCart() {
    jQuery(".loader-container-fixed, .loader-container").css("display", "inherit");
    jQuery(".loader-overlay-fixed, .loader-overlay").css("display", "inherit");
    jQuery.post(ins_ajax_params.ins_ajax_url, {
        action: "insclearcart"
    }, function() {
        jQuery(document.body).trigger("wc_fragment_refresh");
    }).always(function() {
        jQuery(".loader-container-fixed, .loader-container").css("display", "none");
        jQuery(".loader-overlay-fixed, .loader-overlay").css("display", "none");
    });
}