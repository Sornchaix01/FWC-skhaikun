let size = 200;
let colorIndex = 0;

const colors = ["red", "green", "blue"];

$("#balloon").click(function () {

    size = size + 10;

    colorIndex = colorIndex + 1;

    if (colorIndex > 2) {
        colorIndex = 0;
    }

    if (size > 420) {
        size = 200;
    }

    $("#balloon").css({
        width: size + "px",
        height: size + "px",
        "background-color": colors[colorIndex]
    });
});

$("#balloon").mouseleave(function () {

    if (size > 200) {
        size = size - 5;
    }

    colorIndex = colorIndex - 1;

    if (colorIndex < 0) {
        colorIndex = 2;
    }

    $("#balloon").css({
        width: size + "px",
        height: size + "px",
        "background-color": colors[colorIndex]
    });
});