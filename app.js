const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

// Function to toggle body scroll
function toggleBodyScroll(disableScroll) {
    document.body.style.overflow = disableScroll ? "hidden" : "auto";
}

// Show trailer popup
btnEl.addEventListener("click", () => {
    trailerContainerEl.classList.remove("active");
    toggleBodyScroll(true);
});

// Close trailer popup
closeIconEl.addEventListener("click", () => {
    trailerContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
    toggleBodyScroll(false);
});

// Close when pressing Escape key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        trailerContainerEl.classList.add("active");
        videoEl.pause();
        videoEl.currentTime = 0;
        toggleBodyScroll(false);
    }
});
