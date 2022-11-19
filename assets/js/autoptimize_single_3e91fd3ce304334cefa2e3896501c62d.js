(function($) {
    "use strict";
    jQuery(window).on("load", function(e) {
        jQuery(".siteloader").hide();
        if (jQuery("body").hasClass("page-template-digital-mountaineers")) {
            jQuery(".content").mCustomScrollbar();
        }
        jQuery(".lazy").lazy({
            combined: true,
            placeholder: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwcHgiICBoZWlnaHQ9IjEwMHB4IiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJsZHMtd2VkZ2VzIiBzdHlsZT0iYmFja2dyb3VuZDogbm9uZTsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLDUwKSI+PGcgbmctYXR0ci10cmFuc2Zvcm09InNjYWxlKHt7Y29uZmlnLnNjYWxlfX0pIiB0cmFuc2Zvcm09InNjYWxlKDAuNykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01MCwtNTApIj48ZyB0cmFuc2Zvcm09InJvdGF0ZSgxNTkuODkzIDUwIDUwKSI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGNhbGNNb2RlPSJsaW5lYXIiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMC43NXMiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48cGF0aCBuZy1hdHRyLWZpbGwtb3BhY2l0eT0ie3tjb25maWcub3BhY2l0eX19IiBuZy1hdHRyLWZpbGw9Int7Y29uZmlnLmMxfX0iIGQ9Ik01MCA1MEw1MCAwQTUwIDUwIDAgMCAxIDEwMCA1MFoiIGZpbGwtb3BhY2l0eT0iMC44IiBmaWxsPSIjZTkwYzU5Ij48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDIwOS45MiA1MCA1MCkiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ibGluZWFyIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PHBhdGggbmctYXR0ci1maWxsLW9wYWNpdHk9Int7Y29uZmlnLm9wYWNpdHl9fSIgbmctYXR0ci1maWxsPSJ7e2NvbmZpZy5jMn19IiBkPSJNNTAgNTBMNTAgMEE1MCA1MCAwIDAgMSAxMDAgNTBaIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA1MCA1MCkiIGZpbGwtb3BhY2l0eT0iMC44IiBmaWxsPSIjMjNjM2Q1Ij48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDI1OS45NDYgNTAgNTApIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgY2FsY01vZGU9ImxpbmVhciIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxLjVzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PHBhdGggbmctYXR0ci1maWxsLW9wYWNpdHk9Int7Y29uZmlnLm9wYWNpdHl9fSIgbmctYXR0ci1maWxsPSJ7e2NvbmZpZy5jM319IiBkPSJNNTAgNTBMNTAgMEE1MCA1MCAwIDAgMSAxMDAgNTBaIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgNTAgNTApIiBmaWxsLW9wYWNpdHk9IjAuOCIgZmlsbD0iI2ZmZTZmNSI+PC9wYXRoPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgzMDkuOTczIDUwIDUwKSI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGNhbGNNb2RlPSJsaW5lYXIiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iM3MiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48cGF0aCBuZy1hdHRyLWZpbGwtb3BhY2l0eT0ie3tjb25maWcub3BhY2l0eX19IiBuZy1hdHRyLWZpbGw9Int7Y29uZmlnLmM0fX0iIGQ9Ik01MCA1MEw1MCAwQTUwIDUwIDAgMCAxIDEwMCA1MFoiIHRyYW5zZm9ybT0icm90YXRlKDI3MCA1MCA1MCkiIGZpbGwtb3BhY2l0eT0iMC44IiBmaWxsPSJyZ2JhKDk5LjYwNzg0MzEzNzI1NDklLDQ0LjMxMzcyNTQ5MDE5NjA4JSw1NS4yOTQxMTc2NDcwNTg4MiUsMC43NjgpIj48L3BhdGg+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==",
        });
    });
    if (jQuery(".wrapper").hasClass("white-menu")) {
        jQuery("body").addClass("abs-WhiteMenu");
    }
    jQuery("a[href^='#'].i-link").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            jQuery("html, body").animate({
                scrollTop: jQuery(hash).offset().top,
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
    jQuery(".benefits-main.clickBenefits .benefits-listing .item").click(function() {
        jQuery(this).toggleClass("open");
    });
    jQuery(".addpopup .close-add").click(function() {
        jQuery(this).addClass("hide");
        jQuery(".addpopup").addClass("hide");
    });
    jQuery(".more-click").click(function() {
        jQuery(this).toggleClass("open");
        jQuery(this).next(".more-content").slideToggle(300).toggleClass("open");
    });
    jQuery(".wfh-benefits .icon-box").click(function() {
        jQuery(this).toggleClass("open");
        jQuery(this).find(".info .icon-desc").slideToggle(300).toggleClass("open");
    });
    jQuery("#testimonials-lists").on("click", ".read-click", function() {
        jQuery(this).parents(".testimonialsBox").addClass("open");
    });
    jQuery("#testimonials-lists").on("click", ".testimonialsBox .close-btn", function() {
        jQuery(this).parents(".testimonialsBox").removeClass("open");
    });
    if (window.location.pathname.includes("/salesforce-functional-consultant") || window.location.pathname.includes("/salesforce-technical-consultant") || window.location.pathname.includes("/hire-remote-salesforce-developer")) {
        var newCustomSelect = jQuery(".get-in-touch-form select").selectBox({
            mobile: true,
        });
        jQuery('select[name="you_need"]').on("change", function(e) {
            jQuery(".get-in-touch-form select").not(jQuery(this)).selectBox("refresh");
            jQuery(".selectBox-options").each(function() {
                jQuery(this).find("li").eq(0).hide();
            });
        });
        jQuery(".selectBox-options").each(function() {
            jQuery(this).find("li").eq(0).hide();
        });
    } else {
        $.fn.RevSelectBox = function() {
            this.each(function() {
                var $this = $(this),
                    numberOfOptions = $(this).children("option").length;
                $this.addClass("select-hidden");
                if (!$this.parent().hasClass("rev-select")) {
                    $this.wrap('<div class="rev-select"></div>');
                }
                $this.closest(".rev-select").find(".select-styled").remove();
                $this.closest(".rev-select").find(".select-options").remove();
                $this.after('<div class="select-styled"></div>');
                var $styledSelect = $this.next("div.select-styled");
                if ($this.find("option:selected")) {
                    $styledSelect.text($this.find("option:selected").text());
                } else {
                    $styledSelect.text($this.children("option").eq(0).text());
                }
                var $list = $("<ul />", {
                    class: "select-options",
                }).insertAfter($styledSelect);
                for (var i = 0; i < numberOfOptions; i++) {
                    $("<li />", {
                        text: $this.children("option").eq(i).text(),
                        rel: $this.children("option").eq(i).val(),
                    }).appendTo($list);
                }
                var $listItems = $list.children("li");
                $styledSelect.click(function(e) {
                    e.stopPropagation();
                    $("div.select-styled.active").not(this).each(function() {
                        $(this).removeClass("active").next("ul.select-options").hide();
                    });
                    $(this).toggleClass("active").next("ul.select-options").toggle();
                });
                $listItems.click(function(e) {
                    e.stopPropagation();
                    $styledSelect.text($(this).text()).removeClass("active");
                    $this.val($(this).attr("rel")).trigger("change");
                    $list.hide();
                });
                $this.change(function(e) {
                    $styledSelect.text($this.find("option:selected").text());
                });
                $(document).click(function() {
                    $styledSelect.removeClass("active");
                    $list.hide();
                });
            });
        };
        jQuery(".rev-select-box").RevSelectBox();
        jQuery("select").RevSelectBox();
    }
    if (jQuery(window).width() > 1025) {
        var sticky = new Sticky("[data-sticky]");
    }
    jQuery(".plus").on("click", function() {
        var $qty = jQuery(this).closest(".page-box").find(".qtyBox");
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });
    jQuery(".minus").on("click", function() {
        var $qty = jQuery(this).closest(".page-box").find(".qtyBox");
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $qty.val(currentVal - 1);
        }
    });
    if (jQuery(window).width() > 767) {
        var lis = jQuery(".blog-nav ul#filter_by li");
        lis.slice(5).wrapAll("<ul class='dropdown-more'></ul>");
        jQuery(".dropdown-more").wrap('<li class="more_button" id="moreBtn">Others</li>');
        jQuery(document).click(function(e) {
            if (e.target.id == "moreBtn") {
                jQuery("ul.dropdown-more").toggleClass("open");
            } else {
                jQuery("ul.dropdown-more").removeClass("open");
            }
        });
    }
    if (jQuery(window).width() > 1024) {
        jQuery(".main-menu > li.has-submenu").hover(function(e) {
            e.preventDefault();
            jQuery("body").addClass("menu-opened");
            jQuery(this).find(".megamenu").addClass("open");
            jQuery(this).addClass("open");
        }, function(e) {
            e.preventDefault();
            jQuery("body").removeClass("menu-opened");
            jQuery(this).find(".megamenu").removeClass("open");
            jQuery(this).removeClass("open");
        });
        jQuery(".main-menu > li.sml-menu").hover(function(e) {
            e.preventDefault();
            jQuery("body").addClass("sml-menu-opened");
            jQuery("body").removeClass("menu-opened");
            e.stopPropagation();
        }, function(e) {
            e.preventDefault();
            jQuery("body").removeClass("sml-menu-opened");
        });
        jQuery(".has-submenu.sml-menu-lvl-2").hover(function(e) {
            e.preventDefault();
            jQuery(this).find(".sub-menu.sub-menu-lvl-2").addClass("open");
            jQuery("body").addClass("sml-menu-lvl-2");
            jQuery("body").removeClass("menu-opened");
            e.stopPropagation();
        }, function(e) {
            e.preventDefault();
            jQuery(this).find(".sub-menu.sub-menu-lvl-2").removeClass("open");
            jQuery("body").removeClass("sml-menu-lvl-2");
        });
    }
    jQuery(".megamenu li.active").parents("li").toggleClass("active");
    if (jQuery(window).width() > 1024) {
        jQuery(".megamenu .detailTab .tabing").hover(function() {
            var $this = jQuery(this);
            var tabId = $this.attr("data-tab");
            $this.closest(".mainTabing").find(".tabing").removeClass("current");
            $this.closest(".mainTabing").find(".accoContain").removeClass("current in");
            $this.addClass("current");
            $this.closest(".mainTabing").find("#" + tabId).addClass("current");
            $this.closest(".mainTabing").find("#" + tabId).addClass("in");
            jQuery(".testimonials-list .list-slider").slick("refresh");
        });
    }
    jQuery(".submenu-toggle").click(function() {
        jQuery(this).parents(".has-menu-3-lvl").toggleClass("open");
        jQuery(this).parents(".has-menu-3-lvl").find(".lvl-3-menu").toggleClass("open");
    });
    if (jQuery(window).width() > 1024) {
        jQuery(".of-menu-lv1.subTab .tab-li").hover(function() {
            var tab_id = jQuery(this).attr("data-tab");
            jQuery(".subTab .tab-li").removeClass("active-sub");
            jQuery(".subtab-content").removeClass("active-sub");
            jQuery(this).addClass("active-sub");
            jQuery("#" + tab_id).addClass("active-sub");
        });
    }
    jQuery(".contact-title").click(function() {
        jQuery("#contact-dropdown").toggleClass("open");
        jQuery(this).toggleClass("open");
    });
    jQuery("#contact-dropdown li").click(function(e) {
        e.preventDefault();
        jQuery("#contact-dropdown li").removeClass("active");
        var item = jQuery(this).text();
        jQuery(".contact-title span").text(item);
        jQuery("#contact-dropdown").removeClass("open");
        jQuery(".contact-title").removeClass("open");
        jQuery(this).addClass("active");
        jQuery("#contact-form input#enquiry_for").val(item);
    });
    jQuery(".lazy").lazy({
        combined: true,
        placeholder: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwcHgiICBoZWlnaHQ9IjEwMHB4IiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJsZHMtd2VkZ2VzIiBzdHlsZT0iYmFja2dyb3VuZDogbm9uZTsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLDUwKSI+PGcgbmctYXR0ci10cmFuc2Zvcm09InNjYWxlKHt7Y29uZmlnLnNjYWxlfX0pIiB0cmFuc2Zvcm09InNjYWxlKDAuNykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01MCwtNTApIj48ZyB0cmFuc2Zvcm09InJvdGF0ZSgxNTkuODkzIDUwIDUwKSI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGNhbGNNb2RlPSJsaW5lYXIiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMC43NXMiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48cGF0aCBuZy1hdHRyLWZpbGwtb3BhY2l0eT0ie3tjb25maWcub3BhY2l0eX19IiBuZy1hdHRyLWZpbGw9Int7Y29uZmlnLmMxfX0iIGQ9Ik01MCA1MEw1MCAwQTUwIDUwIDAgMCAxIDEwMCA1MFoiIGZpbGwtb3BhY2l0eT0iMC44IiBmaWxsPSIjZTkwYzU5Ij48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDIwOS45MiA1MCA1MCkiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ibGluZWFyIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PHBhdGggbmctYXR0ci1maWxsLW9wYWNpdHk9Int7Y29uZmlnLm9wYWNpdHl9fSIgbmctYXR0ci1maWxsPSJ7e2NvbmZpZy5jMn19IiBkPSJNNTAgNTBMNTAgMEE1MCA1MCAwIDAgMSAxMDAgNTBaIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA1MCA1MCkiIGZpbGwtb3BhY2l0eT0iMC44IiBmaWxsPSIjMjNjM2Q1Ij48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDI1OS45NDYgNTAgNTApIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgY2FsY01vZGU9ImxpbmVhciIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxLjVzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PHBhdGggbmctYXR0ci1maWxsLW9wYWNpdHk9Int7Y29uZmlnLm9wYWNpdHl9fSIgbmctYXR0ci1maWxsPSJ7e2NvbmZpZy5jM319IiBkPSJNNTAgNTBMNTAgMEE1MCA1MCAwIDAgMSAxMDAgNTBaIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgNTAgNTApIiBmaWxsLW9wYWNpdHk9IjAuOCIgZmlsbD0iI2ZmZTZmNSI+PC9wYXRoPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgzMDkuOTczIDUwIDUwKSI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGNhbGNNb2RlPSJsaW5lYXIiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iM3MiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48cGF0aCBuZy1hdHRyLWZpbGwtb3BhY2l0eT0ie3tjb25maWcub3BhY2l0eX19IiBuZy1hdHRyLWZpbGw9Int7Y29uZmlnLmM0fX0iIGQ9Ik01MCA1MEw1MCAwQTUwIDUwIDAgMCAxIDEwMCA1MFoiIHRyYW5zZm9ybT0icm90YXRlKDI3MCA1MCA1MCkiIGZpbGwtb3BhY2l0eT0iMC44IiBmaWxsPSJyZ2JhKDk5LjYwNzg0MzEzNzI1NDklLDQ0LjMxMzcyNTQ5MDE5NjA4JSw1NS4yOTQxMTc2NDcwNTg4MiUsMC43NjgpIj48L3BhdGg+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==",
    });
    jQuery(function toTop() {
        jQuery(window).scroll(function() {
            if (jQuery(this).scrollTop() > 100) {
                jQuery(".back-to-top").addClass("open");
            } else {
                jQuery(".back-to-top").removeClass("open");
            }
        });
        jQuery(".back-to-top").click(function() {
            jQuery("body,html").animate({
                scrollTop: 0,
            }, 800);
            return false;
        });
    });
    jQuery(".addons-box input[type='checkbox']").on("click tap", function() {
        jQuery(this).parents("li").toggleClass("open");
        jQuery(this).prop("readonly", true);
    });
    jQuery(".close-addons").on("click tap", function() {
        jQuery(this).parents("li").removeClass("open");
        jQuery(this).parents("li").find("input").prop({
            disabled: false,
            checked: false
        });
    });
    if (jQuery(window).width() < 767) {
        jQuery(".tap-click").on("click tap", function() {
            jQuery(this).next(".tap-content").slideToggle(300).toggleClass("open");
            jQuery(this).toggleClass("open");
        });
    }
    if (jQuery(window).width() < 1025) {
        jQuery(".hamburger").on("click tap", function() {
            this.classList.toggle("is-active");
            jQuery("body").toggleClass("menu-is-opened");
            jQuery(".top-nav").toggleClass("open");
            jQuery("body").removeClass("megamenu-open");
            jQuery(".megamenu").removeClass("open");
        });
        var hasChildren = jQuery("li").hasClass("menu-item-has-children");
        if (hasChildren == true) {
            jQuery("li.menu-item-has-children > a").after('<span class="submenuToggle"></span>');
        }
        jQuery(".has-submenu").on("click", function() {
            jQuery(this).find(".megamenu").addClass("open");
            jQuery("body").addClass("megamenu-open");
        });
        jQuery(".backmenu").on("click tap", function() {
            setTimeout(function() {
                jQuery(".megamenu").removeClass("open");
                jQuery("body").removeClass("megamenu-open");
            }, 10);
        });
        jQuery(".has-submenu.sml-menu > a").on("click", function() {
            jQuery(this).parents(".has-submenu.sml-menu").toggleClass("open");
            jQuery(this).parents(".has-submenu.sml-menu").find(".sub-menu").slideToggle().toggleClass("open");
            jQuery(".sub-menu.sub-menu-lvl-2").removeClass("open").hide();
            jQuery("body").toggleClass("sml-menu-open");
            jQuery("body").removeClass("megamenu-open");
        });
        jQuery(".has-submenu").on("click", function() {
            jQuery("body").removeClass("megamenu-open");
        });
        jQuery(".has-sml-menu-2-lvl").on("click", function() {
            jQuery(this).toggleClass("open").find(".lvl-2-smlmenu").slideToggle().toggleClass("open");
        });
        jQuery(".has-submenu.sml-menu-lvl-2").on("click", function() {
            jQuery(this).toggleClass("open").find(".sub-menu.sub-menu-lvl-2").slideToggle().toggleClass("open");
        });
    }
    jQuery(".popup-click").on("click", function() {
        jQuery(".popup-main").toggleClass("open");
        jQuery("body").toggleClass("open-custom-popup");
        jQuery(".popup-main").find("form").trigger("reset");
        jQuery(".popup-main").find("form").find(".ajax-message").html("");
        // step_2
    });
    jQuery(".popup-click1").on("click", function() {
        jQuery(".popup-main1").toggleClass("open");
        jQuery("body").toggleClass("open-custom-popup");
    });
    jQuery(".popup-click2").on("click", function() {
        jQuery(".popup-main2").toggleClass("open");
        jQuery("body").toggleClass("open-custom-popup");
    });
    jQuery(".popup-click3").on("click", function() {
        jQuery(".popup-main3").toggleClass("open");
        jQuery("body").toggleClass("open-custom-popup");
    });
    jQuery(".close-popup").on("click", function() {
        jQuery(".popup-main").removeClass("open");
        jQuery(".popup-main1").removeClass("open");
        jQuery(".popup-main2").removeClass("open");
        jQuery(".popup-main3").removeClass("open");
        jQuery("body").removeClass("open-custom-popup");
    });
    jQuery(".calender-click").on("click", function() {
        jQuery(".popup-calender").toggleClass("open");
        jQuery("body").toggleClass("open-custom-popup");
    });
    jQuery(".search-click").on("click", function() {
        jQuery(this).next(".searchbox").toggleClass("open");
        jQuery(this).toggleClass("open-search");
    });
    jQuery(window).on("load", stickyMenu);
    jQuery(window).resize(stickyMenu);
    jQuery(window).scroll(stickyMenu);
    var prevScroll = 0,
        currentSCroll = 1,
        targetScroll_ = 50;

    function stickyMenu() {
        currentSCroll = jQuery(window).scrollTop();
        if (currentSCroll < prevScroll) {
            if (jQuery(window).scrollTop() > targetScroll_) {
                jQuery("header").addClass("fixed-header");
            } else {
                jQuery("header").removeClass("fixed-header");
                jQuery("header").removeClass("sticky-ready");
                jQuery("header, .Twolsiteinks").removeClass("allot-position");
            }
        } else {
            if (jQuery("header").hasClass("allot-position")) {
                jQuery("header").addClass("sticky-ready").delay(15000, function() {});
            }
            jQuery("header").removeClass("fixed-header");
            if (jQuery(window).scrollTop() < 10) {
                jQuery("header").removeClass("sticky-ready");
            } else {
                jQuery("header, .Twolsiteinks").addClass("allot-position");
            }
        }
        prevScroll = currentSCroll;
    }
    $(window).scroll(function() {
        var sticky = $(".site-header"),
            scroll = $(window).scrollTop();
        if (scroll >= 500) sticky.addClass("mob-fixed");
        else {
            sticky.removeClass("mob-fixed");
            sticky.css("transistion", "none");
        }
    });
    jQuery(".brand-slider .slides").slick({
        lazyLoad: "ondemand",
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: false,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 6,
            },
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
            },
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
            },
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            },
        }, ],
    });
    jQuery(".res-banner .logos-slider .slides").slick({
        lazyLoad: "ondemand",
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: false,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 6,
            },
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
            },
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
            },
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
            },
        }, ],
    });
    jQuery(".our-client-slider").slick({
        lazyLoad: "ondemand",
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: true,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            },
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            },
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            },
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        }, ],
    });
    jQuery(".position-lists .mainTabing .detailTab").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        infinite: false,
        arrows: false,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            },
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            },
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            },
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        }, ],
    });
    jQuery(".owl-testimonial").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        centerMode: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            },
        }, ],
    });
    jQuery(".ppc-testimonials .slides").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        centerMode: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
    });
    jQuery(".part-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        centerMode: false,
        focusOnSelect: true,
        autoplay: true,
        responsive: [{
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
            },
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            },
        }, ],
    });
    if ($(window).width() > 767) {
        jQuery(".logoes").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
            centerMode: false,
            focusOnSelect: true,
            autoplay: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                },
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                },
            }, ],
        });
    }
    jQuery(".tcd-slider").slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        draggable: false,
        asNavFor: ".tcd-slider-thumb",
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        }, ],
    });
    jQuery(".tcd-slider-thumb").slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: true,
        asNavFor: ".tcd-slider",
        arrows: false,
        dots: true,
        draggable: false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            },
        }, ],
    });
    jQuery(".wfh-reward-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
    });
    jQuery(".comList-Slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        centerMode: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            },
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        }, ],
    });
    jQuery(".hiring-slides").slick({
        lazyLoad: "ondemand",
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: true,
        centerMode: false,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
            },
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        }, ],
    });
    jQuery(".hiring-slidesTwoGrid").slick({
        lazyLoad: "ondemand",
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: true,
        centerMode: false,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
            },
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        }, ],
    });
    jQuery(".clientSlider").slick({
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            },
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            },
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        }, ],
    });
    jQuery(".find-salesforce-developer").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        centerMode: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            },
        }, {
            breakpoint: 641,
            settings: {
                slidesToShow: 1,
            },
        }, ],
    });
    var $slider = jQuery(".blog-slider");
    var $progressBar = jQuery(".progress");
    var $progressBarLabel = jQuery(".slider__label");
    $slider.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
        var calc = ((nextSlide + 1) / (slick.slideCount - 3)) * 100;
        $progressBar.css("background-size", calc + "% 100%").attr("aria-valuenow", calc);
        $progressBarLabel.text(calc + "% completed");
    });
    $slider.on("init", function(event, slick, currentSlide, nextSlide) {
        var calc = (1 / (slick.slideCount - 3)) * 100;
        $progressBar.css("background-size", calc + "% 100%").attr("aria-valuenow", calc);
        $progressBarLabel.text(calc + "% completed");
    });
    $slider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
        outerEdgeLimit: true,
        autoplay: true,
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
            },
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            },
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            },
        }, ],
    });
    jQuery(".inner-ads-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: false,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
            },
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
            },
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            },
        }, ],
    });
    jQuery(".video-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: true,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    jQuery(".staff-caseStudy-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: true,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });
    jQuery(".full-img-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: false,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
            },
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
            },
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            },
        }, ],
    });
    jQuery(".support-logo-slider").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: false,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
            },
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
            },
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            },
        }, ],
    });
    jQuery(".commonlisting-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: true,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            },
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            },
        }, ],
    });
    jQuery(".reward-slider").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: false,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            },
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            },
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            },
        }, ],
    });
    jQuery(".award-slider").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: true,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            },
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            },
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            },
        }, ],
    });
    jQuery(".result-slider").slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: false,
        focusOnSelect: true,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [{
            breakpoint: 480,
            settings: {
                centerMode: false,
            },
        }, ],
    });
    jQuery(".onboard-Slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: true,
        asNavFor: ".onboard-Nav",
    });
    jQuery(".onboard-Nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        asNavFor: ".onboard-Slider",
        focusOnSelect: true,
    });
    jQuery(".panel-main ol li:first").toggleClass("open");
    jQuery(".panel-main ol li:first .panel-desc").show();
    jQuery(document).on("click", ".panel-main ol li h4", function() {
        if (jQuery(this).closest("li").find(".panel-desc").css("display") == "none") {
            jQuery("li").find(".panel-desc").slideUp();
            jQuery("li").removeClass("open");
            jQuery(this).closest("li").find(".panel-desc").slideDown();
            jQuery(this).closest("li").addClass("open");
            jQuery(this).closest("li").find(".detailTab").children("li:eq(0)").trigger("click");
            setTimeout(function() {
                if (jQuery(window).width() > 1025) {
                    var sticky = new Sticky("[data-sticky]");
                }
            }, 3000);
        } else {
            jQuery(this).closest("li").find(".panel-desc").slideUp();
            jQuery(this).closest("li").removeClass("open");
        }
    });
    jQuery(".counter").counterUp({
        delay: 10,
        time: 1000,
    });
    var nav = jQuery(".blog-pg");
    if (nav.length) {
        var $fixed_block = jQuery(".share_block");
        var $parent_block = jQuery(".entry-content");
        jQuery(window).scroll(function() {
            var scroll = jQuery(window).scrollTop();
            var stickyTop = nav.offset().top;
            if (scroll >= stickyTop) {
                jQuery(".blog-header").addClass("fixed");
                jQuery(".blog-pg").addClass("fixed");
            } else {
                jQuery(".blog-header").removeClass("fixed");
                jQuery(".blog-pg").removeClass("fixed");
            }
            if (jQuery(window).width() > 1025) {
                if (jQuery(".share_block").length) {
                    var windowTop = jQuery(window).scrollTop();
                    var stopPointTop1 = $parent_block.offset().top +
                        $parent_block.outerHeight() -
                        jQuery(window).height() / 1.39;
                    var bottom_pos = $parent_block.offset().top +
                        $parent_block.outerHeight() -
                        jQuery(window).height();
                    var stop_point_bottom = $parent_block.offset().top +
                        $parent_block.outerHeight() -
                        jQuery(window).height();
                }
            }
        });
    }
    if ($(window).width() < 767) {
        jQuery(".allblog").click(function() {
            jQuery("#filter_by").slideToggle(300);
            jQuery(this).toggleClass("open");
        });
        jQuery("#filter_by a").click(function(e) {
            jQuery(".allblog").text(jQuery(this).text());
            jQuery("#filter_by").slideUp();
            jQuery(this).addClass("current");
            jQuery(".allblog").removeClass("open");
            jQuery(".case-studies-page .filterOptions li a").removeClass("current");
            e.preventDefault();
        });
    }
    jQuery(".video-icon").magnificPopup({
        type: "iframe",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        mainClass: "my-mfp-zoom-in",
    });
    jQuery(".popup-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1],
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr("title") + "<small>by Marsel Van Oosten</small>";
            },
        },
    });
    jQuery(".tab-content").hide();
    jQuery(".all-accordien .single-acco:first-child .tab-content").css("display", "block");
    jQuery(".all-accordien .single-acco:first-child").addClass("active");
    jQuery(".acco-heading").click(function() {
        if (jQuery(this).closest(".single-acco").hasClass("active")) {
            jQuery(this).closest(".all-accordien").find(".single-acco").removeClass("active").find(".tab-content").slideUp("slow");
        } else {
            jQuery(this).closest(".all-accordien").find(".single-acco").removeClass("active").find(".tab-content").slideUp("slow");
            jQuery(this).closest(".single-acco").addClass("active").find(".tab-content").slideDown("slow");
        }
    });
    jQuery("#tabs-nav li").click(function() {
        jQuery("#tabs-nav li").removeClass("active");
        jQuery(this).addClass("active");
        jQuery(".tab-contents").hide();
        var activeTab = jQuery(this).find("a").attr("href");
        jQuery(activeTab).fadeIn();
        return false;
        jQuery("html, body").stop().animate({
            scrollTop: offs.top - 100
        }, 500);
    });
    if (jQuery("body").hasClass("page-template-tpl-profiles")) {
        jQuery(document).scroll(function() {
            var postionTop = jQuery(document).scrollTop();
            console.log(postionTop);
            if (postionTop >= 600) {
                jQuery(".chart").easyPieChart({
                    scaleColor: "#fff",
                    lineWidth: 2,
                    lineCap: "butt",
                    barColor: "#ffda30",
                    trackColor: "#EEE",
                    size: 200,
                    animate: 2000,
                });
            }
        });
    }
    jQuery(".detailTab .tabing").click(function() {
        var $this = jQuery(this);
        var tabId = $this.attr("data-tab");
        $this.closest(".mainTabing").find(".tabing").removeClass("current");
        $this.closest(".mainTabing").find(".accoContain").removeClass("current in");
        $this.addClass("current");
        $this.closest(".mainTabing").find("#" + tabId).addClass("current");
        $this.closest(".mainTabing").find("#" + tabId).addClass("in");
        jQuery(".testimonials-list .list-slider").slick("refresh");
    });
    jQuery(".accoContain").before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>");
    jQuery(".resp-accordion:first-child").addClass("minus");
    var itemCount = 0;
    jQuery(".resp-accordion").each(function() {
        var innertext = jQuery(".tabing:eq(" + itemCount + ")").html();
        jQuery(".resp-accordion:eq(" + itemCount + ")").append(innertext);
        itemCount++;
    });
    if (jQuery(window).width() < 767) {
        jQuery(".resp-accordion").click(function() {
            var $panel = $(this);
            if (jQuery(this).hasClass("minus")) {
                jQuery(this).removeClass("minus").next().slideUp(300);
            } else {
                jQuery(".accoContain").slideUp(300, function() {
                    jQuery(".resp-accordion").removeClass("minus");
                });
                jQuery(this).addClass("minus");
                jQuery(this).next().slideDown(300, function() {
                    jQuery("html,body").animate({
                        scrollTop: $panel.offset().top - 15,
                    }, 500);
                });
            }
        });
        jQuery(".skills-main .accoContain.current").prev().addClass("minus");
    }
    jQuery(".subTab .tab-li").click(function() {
        var tab_id = jQuery(this).attr("data-tab");
        jQuery(".subTab .tab-li").removeClass("active-sub");
        jQuery(".subtab-content").removeClass("active-sub");
        jQuery(this).addClass("active-sub");
        jQuery("#" + tab_id).addClass("active-sub");
    });
    jQuery(".subtab-content").before("<h2 class='sub-res-acc' role='tab'></h2>");
    jQuery(".mob-dec-none").prev(".sub-res-acc").addClass("mob-arr-no");
    jQuery(".sub-res-acc:first-child").addClass("minus");
    var itemCount = 0;
    jQuery(".sub-res-acc").each(function() {
        var innertext = jQuery(".tab-li:eq(" + itemCount + ")").html();
        jQuery(".sub-res-acc:eq(" + itemCount + ")").append(innertext);
        itemCount++;
    });
    if (jQuery(window).width() < 575) {
        jQuery(".sub-res-acc").click(function() {
            var $panel = $(this);
            if (jQuery(this).hasClass("minus")) {
                jQuery(this).removeClass("minus").next().slideUp(300);
            } else {
                jQuery(".subtab-content").slideUp(300, function() {
                    jQuery(".sub-res-acc").removeClass("minus");
                });
                jQuery(this).addClass("minus");
                jQuery(this).next().slideDown(300, function() {
                    jQuery("html,body").animate({
                        scrollTop: $panel.offset().top - 15,
                    }, 500);
                });
            }
        });
    }
    if (jQuery(window).width() > 767) {
        jQuery(".ftr-locations .detailTab .tabing").hover(function() {
            var $this = jQuery(this);
            var tabId = $this.attr("data-tab");
            $this.closest(".mainTabing").find(".tabing").removeClass("current");
            $this.closest(".mainTabing").find(".accoContain").removeClass("current in");
            $this.addClass("current");
            $this.closest(".mainTabing").find("#" + tabId).addClass("current");
            $this.closest(".mainTabing").find("#" + tabId).addClass("in");
            jQuery(".testimonials-list .list-slider").slick("refresh");
        });
    }
    jQuery(".testimonials-list .list-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        centerMode: false,
        focusOnSelect: true,
        vertical: false,
        draggable: false,
        autoplay: true,
        arrows: false,
    });
    if (jQuery(".js-range-slider").length > 0) {
        jQuery(".js-range-slider").ionRangeSlider({
            grid: true,
            min: 1000,
            max: 10000,
            from: 100,
            step: 10,
        });
    }
    if (jQuery(".darkSection").length) {
        var body = jQuery("body"),
            darkSection = jQuery(".darkSection"),
            offset = darkSection.offset().top - 100;
        jQuery(window).scroll(function() {
            var scroll = jQuery(window).scrollTop();
            if (scroll >= offset) {
                body.addClass("start");
            } else {
                body.removeClass("start");
            }
            if (scroll >= offset + darkSection.outerHeight()) {
                body.removeClass("start");
            }
        });
    }
    jQuery(".animated").viewportChecker({
        classToAdd: "visible",
        offset: 100,
    });
    jQuery(document).ready(function() {
        jQuery.each(jQuery.browser, function(i) {
            jQuery("body").addClass(i);
            return false;
        });
        var os = ["iphone", "ipad", "windows", "mac", "linux"];
        var match = navigator.appVersion.toLowerCase().match(new RegExp(os.join("|")));
        if (match) {
            jQuery("body").addClass(match[0]);
        }
    });
    jQuery(".quote-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        centerMode: false,
        focusOnSelect: true,
        vertical: false,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    });
    jQuery(".people-talk-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        infinite: true,
        centerMode: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            },
        }, ],
    });
    jQuery(".portfolio-slider").slick({
        infinite: true,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: 40,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            },
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
            },
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        }, ],
    });
    jQuery(".play_icon").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });
    jQuery("#faq_search_form").submit(function(e) {
        e.preventDefault();
        jQuery(".faq-tabs").fadeOut("slow");
        var faq_search_input = jQuery("#faq_search_input").val();
        jQuery(".or-txt").text("Search Results for: " + faq_search_input);
        jQuery("#loadingmessage").show();
        jQuery.ajax({
            data: {
                action: "faq_search",
                faq_search_input: faq_search_input
            },
            type: "post",
            url: adminurl,
            success: function(data) {
                jQuery("#tabs-content").html(data);
                jQuery(".reset-search-button").show();
                jQuery("#loadingmessage").hide();
            },
        });
    });
})(jQuery);
jQuery(window).load("load", function() {
    if (jQuery(".portfolioContainer").length) {
        var $container = jQuery(".portfolioContainer");
        $container.isotope({
            filter: ".email",
            animationOptions: {
                duration: 100750,
                easing: "fadeInout",
                queue: true,
            },
        });
        jQuery(".portfolioFilter a").click(function() {
            jQuery(".portfolioFilter .current").removeClass("current");
            jQuery(this).addClass("current");
            var selector = jQuery(this).attr("data-filter");
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            });
            return false;
        });
    }
    if (jQuery(window).width() > 1025) {
        jQuery(".carouselTicker").carouselTicker();
    }
    jQuery(".about-us .team-slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        infinite: false,
        centerMode: false,
        focusOnSelect: true,
        vertical: true,
        draggable: false,
        autoplay: false,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                vertical: false,
                draggable: true,
            },
        }, ],
    });
    var maxHeight = -1;
    jQuery(".team-slider .slick-slide").each(function() {
        if (jQuery(this).height() > maxHeight) {
            maxHeight = jQuery(this).height();
        }
    });
    jQuery(".team-slider .slick-slide").each(function() {
        if (jQuery(this).height() < maxHeight) {
            jQuery(this).css("margin", Math.ceil((maxHeight - jQuery(this).height()) / 2) + "px 0");
        }
    });
    setTimeout(function() {
        jQuery(window).trigger("resize");
    }, 3000);
    if (jQuery(window).width() > 1280) {
        var s = skrollr.init({
            forceHeight: false,
            smoothScrolling: true,
            smoothScrollingDuration: 500,
        });
    }
});

function setCookie(Cookiename, Cookievalue, days, Cookiepath) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "expires=" + date.toGMTString();
    document.cookie = Cookiename + "=" + Cookievalue + "; " + expires + "; path=/";
}

function getCookie(Cookiename) {
    var name = Cookiename + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function eraseCookie(name) {
    setCookie(name, "", -1);
}
equalheight = function(container) {
    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el, topPosition = 0;
    jQuery(container).each(function() {
        $el = jQuery(this);
        jQuery($el).height("auto");
        topPostion = $el.position().top;
        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0;
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = currentTallest < $el.height() ? $el.height() : currentTallest;
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
};
if (jQuery(window).width() > 600) {
    jQuery(window).ready(function() {
        equalheight(".blog-listing .listbox,.ourHolder .item");
    });
    jQuery(window).resize(function() {
        equalheight(".blog-listing .listbox,.ourHolder .item");
    });
    jQuery(document).ajaxComplete(function(data) {
        equalheight(".blog-listing .listbox,.ourHolder .item");
    });
    jQuery(window).ready(function() {
        equalheight(".team-main .team-slider .slick-slide");
    });
    jQuery(window).resize(function() {
        equalheight(".team-main .team-slider .slick-slide");
    });
}
jQuery(document).ready(function() {
    jQuery("#csCategories , #industryCategories").change(function() {
        var csCategory = jQuery("#csCategories option:selected").val();
        var industryCategory = jQuery("#industryCategories option:selected").val();
        jQuery("#loadingmessage").show();
        jQuery.post(adminurl, {
            action: "filter_case_studies",
            category: csCategory,
            industry: industryCategory,
        }, function(response) {
            jQuery("#cs_portfolio").html(response);
            jQuery("#loadingmessage").hide();
        });
    });
    jQuery("#tmRegion , #tmService , #tmType , #tmIndustry").change(function() {
        var tmRegion = jQuery("#tmRegion option:selected").val();
        var tmService = jQuery("#tmService option:selected").val();
        var tmType = jQuery("#tmType option:selected").val();
        var tmIndustry = jQuery("#tmIndustry option:selected").val();
        jQuery("#loadingmessage").show();
        jQuery.post(adminurl, {
            action: "filter_testimonials",
            tmRegion: tmRegion,
            tmService: tmService,
            tmType: tmType,
            tmIndustry: tmIndustry,
        }, function(response) {
            jQuery("#testimonials-lists").html(response);
            jQuery("#testimonials-lists .content").mCustomScrollbar();
            jQuery("#testimonials-lists .play_icon").magnificPopup({
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
            });
            jQuery("#loadingmessage").hide();
        });
    });
});
(function($) {
    var myDisqus = setInterval(removeDisqus, 300);

    function removeDisqus() {
        jQuery.each(jQuery("iframe"), (arr, x) => {
            let src = jQuery(x).attr("src");
            let sandbox = jQuery(x).attr("sandbox");
            if (src && src.match(/(ads-iframe)|(disqusads)/gi)) {
                jQuery(x).remove();
                myStopFunction();
            }
            if (sandbox && sandbox.match(/(allow-forms)/gi)) {
                jQuery(x).remove();
                myStopFunction();
            }
        });
    }

    function myStopFunction() {
        clearInterval(myDisqus);
    }
})(jQuery);
jQuery(document).ready(function() {
    jQuery('.popup-right .arrow_close-desk').on('click', function() {
        jQuery('.popup-right').removeClass('open');
        jQuery('.pop-download-cta').addClass('open');
    });
    jQuery('.sticky-ratepop .close-popup').on('click', function() {
        jQuery('.popup-right').removeClass('open');
        jQuery('.pop-download-cta').addClass('open');
        jQuery('.thankyou-blk').css('display', 'none');
    });
});