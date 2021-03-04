const btnSwitch = document.querySelector('#header__nav--btn');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
})