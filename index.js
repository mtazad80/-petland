
document.addEventListener("DOMContentLoaded", function () {
    // ===== LOGO MENU =====
    const pick = document.getElementById("one");
    const menuBox = document.getElementById("tweone");

    function closeMenu() {
        if (menuBox) {
            menuBox.style.display = "none";
        }
    }

    if (pick && menuBox) {
        pick.style.cursor = "pointer";

        pick.addEventListener("click", function () {
            const isOpen = getComputedStyle(menuBox).display !== "none";
            menuBox.style.display = isOpen ? "none" : "block";
        });

        document.addEventListener("click", function (event) {
            if (
                !pick.contains(event.target) &&
                !menuBox.contains(event.target)
            ) {
                closeMenu();
            }
        });
    }

    // ===== EDUCATION VIDEO =====
    const take = document.getElementById("twefour");
    const closeVideo = document.getElementById("tweseven");
    const videoModal = document.getElementById("twefive");

    function openVideo() {
        if (videoModal) {
            videoModal.style.display = "block";
        }
    }

    function hideVideo() {
        if (videoModal) {
            videoModal.style.display = "none";

            const video = videoModal.querySelector("video");
            if (video) {
                video.pause();
            }
        }
    }

    if (take) {
        take.addEventListener("click", openVideo);
    }

    if (closeVideo) {
        closeVideo.addEventListener("click", hideVideo);
    }

    // ===== CONTACT DROPDOWN =====
    const contactToggle = document.getElementById("contactToggle");
    const contactDropdown = document.getElementById("contactDropdown");

    function setContactOpen(open) {
        if (!contactToggle || !contactDropdown) return;

        contactDropdown.hidden = !open;
        contactToggle.setAttribute("aria-expanded", String(open));
    }

    if (contactToggle && contactDropdown) {
        contactToggle.addEventListener("click", function (event) {
            event.preventDefault();

            setContactOpen(contactDropdown.hidden);
        });

        document.addEventListener("click", function (event) {
            if (
                !contactToggle.contains(event.target) &&
                !contactDropdown.contains(event.target)
            ) {
                setContactOpen(false);
            }
        });
    }

    // ===== LOGIN / REGISTRATION MODAL =====
    const loginButton = document.getElementById("two");
    const loginModal = document.getElementById("loginModal");
    const cancelLogin = document.getElementById("cancelLogin");
    const cancelLoginSecondary =
        document.getElementById("cancelLoginSecondary");
    const registerForm = document.getElementById("registerForm");
    const formMessage = document.getElementById("formMessage");

    function openLogin() {
        if (!loginModal) return;

        loginModal.hidden = false;
        document.body.style.overflow = "hidden";

        const firstInput = loginModal.querySelector(
            'input[name="firstName"]'
        );

        if (firstInput) {
            firstInput.focus();
        }
    }

    function closeLogin() {
        if (!loginModal) return;

        loginModal.hidden = true;
        document.body.style.overflow = "";

        if (loginButton) {
            loginButton.focus();
        }
    }

    if (loginButton) {
        loginButton.addEventListener("click", openLogin);
    }

    if (cancelLogin) {
        cancelLogin.addEventListener("click", closeLogin);
    }

    if (cancelLoginSecondary) {
        cancelLoginSecondary.addEventListener("click", closeLogin);
    }

    if (loginModal) {
        loginModal.addEventListener("click", function (event) {
            if (event.target === loginModal) {
                closeLogin();
            }
        });
    }

    // ===== FORM VALIDATION =====
    if (registerForm && formMessage) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!registerForm.reportValidity()) {
                return;
            }

            formMessage.textContent =
                "اطلاعات فرم بررسی شد. برای ثبت واقعی، اتصال به سرور لازم است.";
        });
    }

    // ===== ESCAPE KEY =====
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMenu();
            hideVideo();
            setContactOpen(false);

            if (loginModal && !loginModal.hidden) {
                closeLogin();
            }
        }
    });
});
