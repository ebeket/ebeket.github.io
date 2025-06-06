const input = document.querySelector('.inputfield');

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const newTitle = input.value;
        document.title = newTitle;

        localStorage.setItem('tabTitle', newTitle);
    }
});


window.addEventListener('DOMContentLoaded', () => {
    const savedTitle = localStorage.getItem('tabTitle');
    if (savedTitle) {
        document.title = savedTitle;
    }
});




const iconSelect = document.getElementById('iconSelect');

iconSelect.addEventListener('change', function () {
    const iconUrl = this.value;

    let link = document.querySelector("link[rel~='icon']");

    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }

    link.href = iconUrl;

    localStorage.setItem('tabIcon', iconUrl);
});

window.addEventListener('DOMContentLoaded', () => {
    const savedIcon = localStorage.getItem('tabIcon');
    if (savedIcon) {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
        }
        link.href = savedIcon;
    }
});