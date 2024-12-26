const getBtnAuthor = document.getElementById('info');
const author = document.querySelector('.author');

getBtnAuthor.addEventListener('click', () => {
    if (author.style.display === 'block') {
        author.style.display = 'none';
    } else {
        author.style.display = 'block';
    }
});
