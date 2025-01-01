const getBtnInfoAuthor = document.getElementById('info');
const infoAuthor = document.querySelector('.author');

getBtnInfoAuthor.addEventListener('click', () => {
    const displayStyle = window.getComputedStyle(infoAuthor).display;
    if (displayStyle === 'none') {
        infoAuthor.style.display = 'block'; // Hiển thị listController
    } else {
        infoAuthor.style.display = 'none'; // Ẩn listController
    }
});
