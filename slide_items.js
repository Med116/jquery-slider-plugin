jQuery.fn.slideItems = function (data) {
    jQuery(this).addClass("slider_plugin");
    var stateOfControl = 0;
    var updateControls;
    var getControls;
    var wrapperWidth = data.wrapperWidth;
    var wrapperHeight = data.wrapperHeight;
    var visCount = data.previews.length;
    var arrowWidth = data.arrowWidth;
    var imgPadding = data.imgPadding;
    var leftArrow = jQuery("<div></div>").addClass("left_arrow").css({
        "height": wrapperHeight,
        width: arrowWidth + "px"

    });
    var rightArrow = jQuery("<div></div>").addClass("right_arrow").css({
        "height": wrapperHeight,
        width: arrowWidth + "px"
    });

    jQuery(this).css("height", wrapperHeight);
    jQuery(this).css("width", data.previews.length * (data.previewWidth + (imgPadding * 2)) + "px");
    var thumbnailWrapper = jQuery("<div></div>").attr("id", "viz_thumbnails");
    thumbnailWrapper.css("width", data.show * (data.previewWidth + (imgPadding * 2)) + "px").css("height", wrapperHeight);


    for (var i = 0; i < data.previews.length; i++) {
        var visPreview = jQuery("<div></div>").addClass("viz_preview").attr("title", data.previews[i].title).css({
            "width": data.previewWidth + "px",
                "padding": imgPadding + "px",
                "left": i * (data.previewWidth + (imgPadding * 2)) + "px",
                "top": "0px",
                "position": "absolute"
        });
        var img = jQuery("<img/>").attr("src", data.previews[i].src).css("width", data.previewWidth);
        var visTitle = jQuery("<div></div>").addClass("viz_title").text(data.previews[i].title);
        console.log("TITLE: " + data.previews[i].title);
        visPreview.append(img);
        visPreview.append(visTitle);
        thumbnailWrapper.append(visPreview);
    }

    jQuery(this).append(thumbnailWrapper);



    var controls = jQuery("<div></div>").addClass("viz_controls").css({});
    var leftButton = jQuery("<span></span>").addClass("left_arrow viz_control").text("<");
    var rightButton = jQuery("<span></span>").addClass("right_arrow viz_control").text(">");
    controls.append(leftButton);
    controls.append(rightButton);

    var updateControls = function () {
        if (stateOfControl === 0) {
            jQuery(".slider_plugin .left_arrow").addClass("grayed_out");
        } else {
            jQuery(".slider_plugin .left_arrow").removeClass("grayed_out");
        }

        if (stateOfControl === visCount - data.show) {
            jQuery(".slider_plugin .right_arrow").addClass("grayed_out");
        } else {
            jQuery(".slider_plugin .right_arrow").removeClass("grayed_out");
        }
    };

    function slide(direction, speed) {

        updateControls();
        var animateWidth = data.previewWidth + (imgPadding * 2);
        console.log(animateWidth);
        if (direction == "left") {
            var aniObj = {
                "left": "+=" + animateWidth
            };
        } else {
            var aniObj = {
                "left": "-=" + animateWidth
            };
        }

        jQuery(".viz_preview").animate(aniObj, speed, function () {
            console.log("animated");
        });

    }
    rightButton.on("click", function () {
        console.log(stateOfControl);
        if (stateOfControl < visCount - data.show) {
            stateOfControl++;
            slide("right", data.speed);
        }

    });

    leftButton.on("click", function () {
        console.log(stateOfControl);
        if (stateOfControl > 0) {
            stateOfControl--;
            slide("left", data.speed);


        }


    });

    thumbnailWrapper.append(controls);
    updateControls();
}
