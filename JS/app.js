const bellIcon = document.querySelector('.bell');
const alertX = document.querySelector('.x-button');
const alert = document.getElementsByClassName('alert');
const alertNotif = document.querySelector('.alert-notification');
const emailSliderOn = document.querySelector('.email-slider-on');
const emailSliderOff = document.querySelector('.email-slider-off');
const profileSliderOn = document.querySelector('.profile-slider-on');
const profileSliderOff = document.querySelector('.profile-slider-off');


// Alert X //

document.addEventListener('click', (e) => {
    if (e.target === alertX) {
        alertX.parentNode.remove();
    }
});

// Alert Notification //

document.addEventListener('click', (e) => {
    if (alert.length === 0) {
        alertNotif.style.display = 'none';
    }
});

// Dropdown Menu //

document.addEventListener('click', (e) => {
    const dropdownMenu = document.querySelector('.alert-dropdown');
    if (e.target === bellIcon) {
        dropdownMenu.style.display = 'block';
    }
});

document.addEventListener('click', (e) => {
    const dropdownMenu = document.querySelector('.alert-dropdown');
    if (e.target != bellIcon) {
        dropdownMenu.style.display = 'none';
    }
});

//localStorage.getItem("emailSliderOnDisplay");
//localStorage.setItem("emailSliderOnDisplay", "none");


// Toggle On Off //




// Message Send //

document.addEventListener('submit', () => {
        const messageSection = document.querySelector('.message-user');
        const messageConfirm = document.querySelector('.sent-confirmation');
        messageConfirm.style.display = 'block';
});