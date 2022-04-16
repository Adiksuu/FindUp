const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener("click", () => {
			nav.classList.toggle("show");
		});
	}
};

showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	navLink.forEach((n) => n.classList.remove("active"));
	this.classList.add("active");

	const navMenu = document.getElementById("nav-menu");
	navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));


const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
	scrollBtn.classList.toggle("active", window.scrollY > 500);
});

scrollBtn.addEventListener("click", () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});




  MinecraftAPI.getServerStatus('s.nerd.nu', {
    port: 25565
  }, function (err, status) {
    if (err) {
      return document.querySelector('.server-status').innerHTML = 'Error loading status';
    }

    document.querySelector('.server-online').innerHTML = status.players.now;
    document.querySelector('.server-max').innerHTML = status.players.max;
  });