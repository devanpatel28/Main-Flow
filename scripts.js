function toggleSearch() {
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', () => {
        alert('Redirecting to post a blog!');
    });
});
