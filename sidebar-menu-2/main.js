const btn = document.querySelectorAll('.list')

function activeLink() {
    btn.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active')
}

btn.forEach((item) =>
item.addEventListener('click', activeLink)
)