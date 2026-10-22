// Live Real-Time Search Filter Functionality
function filterTools() {
    const input = document.getElementById('toolSearchInput');
    const filter = input.value.toLowerCase().trim();
    const grid = document.getElementById('toolsGrid');
    const cards = grid.getElementsByClassName('tool-card');

    for (let i = 0; i < cards.length; i++) {
        const title = cards[i].getElementsByClassName('tool-title')[0].textContent || cards[i].getElementsByClassName('tool-title')[0].innerText;
        const desc = cards[i].getElementsByClassName('tool-desc')[0].textContent || cards[i].getElementsByClassName('tool-desc')[0].innerText;

        if (title.toLowerCase().indexOf(filter) > -1 || desc.toLowerCase().indexOf(filter) > -1) {
            cards[i].style.display = "flex";
        } else {
            cards[i].style.display = "none";
        }
    }
    }
