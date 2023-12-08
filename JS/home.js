const faqbox = document.getElementsByClassName('contentbox');
for (i = 0; i < faqbox.length; i++) {
    faqbox[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
}