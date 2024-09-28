const introContainer = document.querySelector(".container");

$(document).ready(() => {
	// lock scroll position, but retain settings for later
	var scrollPosition = [
		self.pageXOffset ||
			document.documentElement.scrollLeft ||
			document.body.scrollLeft,
		self.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop,
	];
	var html = jQuery("html"); // it would make more sense to apply this to body, but IE7 won't have that
	html.data("scroll-position", scrollPosition);
	html.data("previous-overflow", html.css("overflow"));
	html.css("overflow", "hidden");
	window.scrollTo(scrollPosition[0], scrollPosition[1]);

	//Get theme from localstorage
	var theme = localStorage.getItem("theme");
	if (theme != "dark") {
		body.classList.add("dark");
	} else {
		body.classList.remove("dark");
	}
});

function endIntro() {
	setTimeout(function () {
		introContainer.style.opacity = "0";
		setTimeout(() => {
			// un-lock scroll position
			var html = jQuery("html");
			var scrollPosition = html.data("scroll-position");
			html.css("overflow", html.data("previous-overflow"));
			window.scrollTo(scrollPosition[0], scrollPosition[1]);

			$(".header").css("opacity", "1");
			$(".logo").fadeIn();
			$(".home-btn").css("opacity", "1");
			$(".about-btn").css("opacity", "1");
			$(".contact-btn").css("opacity", "1");
			$(".projects-btn").css("opacity", "1");
			$(".home").css("opacity", "1");
			$(".about").css("opacity", "1");
			$(".contact").css("opacity", "1");
			$(".projects").css("opacity", "1");
			if (screen.width <= 700) {
				$(".hamburger").css("display", "flex");
			} else {
				$(".hamburger").css("display", "none");
			}
			setTimeout(() => {
				$(".love-container").removeClass("hide");

				$("FOOTER").css("display", "flex");
				type();
			}, 1000);
			$(".logo-img").css("display", "flex");
			$(".theme-btn").css("display", "flex");
			introContainer.addEventListener(
				"transitionend",
				() => {
					introContainer.style.display = "none";
				},
				1000
			);
		}, 1000);
	}, 2000);
}

jQuery(function ($) {
    // MAD-RIPPLE // (jQ+CSS)
    $(document).on("mousedown", "[data-ripple]", function (e) {
        var $self = $(this);

        if ($self.is(".btn-disabled")) {
            return;
        }

        var offs = $self.offset(),
            x = e.pageX - offs.left,
            y = e.pageY - offs.top,
            dia = Math.min(this.offsetHeight, this.offsetWidth, 100), // start diameter
            $ripple = $("<div/>", { class: "ripple", appendTo: $self });

        if (!$self.css("position") || $self.css("position") === "static") {
            $self.css({ position: "relative" });
        }

        $("<div/>", {
            class: "rippleWave",
            css: {
                background: $self.data("ripple"),
                width: dia,
                height: dia,
                left: x - dia / 2,
                top: y - dia / 2,
            },
            appendTo: $ripple,
            one: {
                animationend: function () {
                    $ripple.remove();
                },
            },
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const skillsBars = document.querySelector('.skills-bars');
    const section = document.querySelector('#about'); // Phần tử section mà bạn muốn theo dõi

    // Tạo Observer
    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillsBars.classList.add('animated'); // Thêm class animated
                shift(); // Gọi hàm shift() khi section xuất hiện
                observer.unobserve(section); // Ngừng theo dõi sau khi đã chạy
            }
        });
    }, { threshold: 0.5}); 

    // Bắt đầu theo dõi section
    observer.observe(section);
});

// Hàm shift() để thêm hiệu ứng
function shift() {
    const skillsBars = document.querySelector(".skills-bars");
    skillsBars.classList.add('animated');

    setTimeout(() => {
        document.querySelector(".skills-head").classList.add("animated");
    }, 1500);
}



function validate() {
	const firstName = document.querySelector(".first-name");
	const lastName = document.querySelector(".last-name");
	const email = document.querySelector(".email-add");
	const message = document.querySelector(".message");
	var emailID = email.value;
	atpos = emailID.indexOf("@");
	dotpos = emailID.lastIndexOf(".");

	if (firstName.value == "") {
		firstName.focus();
		Swal.fire({
			title: "Error!",
			text: "Please provide your first name.",
			icon: "error",
			confirmButtonText: "Ok",
		});
		return false;
	}
	if (lastName.value == "") {
		lastName.focus();
		Swal.fire({
			title: "Error!",
			text: "Please provide your last name.",
			icon: "error",
			confirmButtonText: "Ok",
		});
		return false;
	}
	if (email.value == "" || atpos < 1 || dotpos - atpos < 2) {
		email.focus();
		Swal.fire({
			title: "Error!",
			text: "Please provide valid email.",
			icon: "error",
			confirmButtonText: "Ok",
		});
		return false;
	}
	if (message.value == "") {
		message.focus();
		Swal.fire({
			title: "Error!",
			text: "Please say something.",
			icon: "error",
			confirmButtonText: "Ok",
		});
		return false;
	}
	return true;
}
document.addEventListener("contextmenu", (event) => event.preventDefault());
$(document).keydown(function (event) {
	if (event.keyCode == 123) {
		return false;
	} else if (
		(event.ctrlKey && event.shiftKey && event.keyCode == 73) ||
		(event.ctrlKey && event.shiftKey && event.keyCode == 67) ||
		(event.ctrlKey && event.shiftKey && event.keyCode == 74) ||
		(event.ctrlKey && event.keyCode == 85)
	) {
		return false;
	}
});
