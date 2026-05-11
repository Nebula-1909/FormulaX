window.onload = function() {
    const links = document.querySelectorAll('.menu a');

    links.forEach(link => {
        link.onclick = function(e) {
            const targetId = this.getAttribute('href');

            if (targetId.startsWith('#')) {
                e.preventDefault();
                const element = document.querySelector(targetId);
                
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        };
    });
};