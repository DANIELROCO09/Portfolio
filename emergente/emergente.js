document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector("#contactModal");
    const btn = document.querySelector(".btn-contact");
    const closeBtn = document.querySelector(".close-modal");

    if (btn && modal) {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); 
            modal.classList.add("active");
        });
    }

    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.classList.remove("active");
        };
    }

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.classList.remove("active");
        }
    };
});