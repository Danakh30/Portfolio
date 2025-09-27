document.addEventListener("DOMContentLoaded", () => {
    const buttons = Array.from(document.querySelectorAll("#filters .btn"));
    const cards = Array.from(document.querySelectorAll("#cs-container .project"));
    if (!buttons.length || !cards.length) return;

    buttons.forEach(btn => {
        btn.addEventListener("click", (event) => {
            buttons.forEach(b => {
                b.classList.remove('active-filter');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('active-filter');
            btn.setAttribute('aria-pressed', 'true');

            const filterVal = btn.getAttribute("data-filter")
            cards.forEach(card => {
                if (!filterVal || filterVal === "all") {
                    card.hidden = false;
                    return;
                }
                else {
                    const catsVal = (card.getAttribute("data-cat") || "")
                    card.hidden = !catsVal.includes(filterVal);
                }
            });
        });
    });
    const Allbtn = buttons.find(btn => btn.getAttribute('data-filter') === 'all');
    if (Allbtn) {
        Allbtn.click();
    } else if (buttons.length > 0) {
        buttons[0].click();
    }
});