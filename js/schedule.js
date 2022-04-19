const scheduleBtn = document.querySelector('#scheduleContinue');
const confirmScreen = document.querySelector('.booking-confirm-details');
const modalCancel = document.querySelector('#modalCancel');

scheduleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    confirmScreen.classList.remove('d-none');
})

modalCancel.addEventListener('click', (e) => {
    e.preventDefault();
    confirmScreen.classList.add('d-none');
})