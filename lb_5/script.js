const humburger = document.querySelector('.humburger'),
      list = document.querySelector('.pages_list');

humburger.addEventListener('click', () => {
    list.classList.toggle('active');
    humburger.classList.toggle('humburger_active');
});