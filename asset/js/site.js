$(document).ready(function() {
    var elements = document.getElementsByClassName("progress");
    for (let i = 0; i < elements.length; i++) {
        var rightSideProgress = elements[i].querySelector(
            ".progress-right .progress-bar"
        );
        var value = parseInt(elements[i].getAttribute("data-value"));
        if (value < 25) {
            elements[i].classList.add("pink");
        }
        if (value >= 25 && value < 50) {
            elements[i].classList.add("yellow");
        }
        if (value >= 50 && value < 75) {
            elements[i].classList.add("green");
        }
        if (value >= 75) {
            elements[i].classList.add("highgreen");
        }
        if (value > 50) {
            var leftSideProgress = elements[i].querySelector(
                ".progress-left .progress-bar"
            );

            rightSideProgress.style.transform = "rotate(" + 180 + "deg)";
            leftSideProgress.style.transform =
                "rotate(" + (value - 50) * 3.6 + "deg)";
        } else {
            var x = (rightSideProgress.style.transform =
                "rotate(" + value * 3.6 + "deg)");
        }
    }

    $('[data-gallery=manual]').click(function(e) {
        var thisEl = this;
        e.preventDefault();

        var items = [],
            // get index of element clicked
            options = {
                index: $(this).index()
            };

        console.log($(this).index());
        // looping to create images array
        $('[data-gallery=manual]').each(function(i, e) {
            let src = $(this).attr('href');
            items.push({
                src: src
            });
            if (thisEl == this) {
                options.index = i;
            }

        });

        new PhotoViewer(items, options);

    });
    $('#year-Reserved').text(new Date().getFullYear())

});