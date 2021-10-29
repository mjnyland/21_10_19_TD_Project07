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


// Toggle On Off //

document.addEventListener('click', (e) => {
    const sliderCircle = document.querySelector('.toggle-circle');
    if (e.target === emailSliderOn) {
        localStorage.setItem("emailSliderOnDisplay", "none");
        emailSliderOn.style.display = localStorage.getItem("emailSliderOnDisplay");

        localStorage.setItem("emailSliderOffDisplay", "flex");
        emailSliderOff.style.display = localStorage.getItem("emailSliderOffDisplay");

    } else if (e.target === emailSliderOff) {
        localStorage.setItem("emailSliderOffDisplay", "none");
        emailSliderOff.style.display = localStorage.getItem("emailSliderOffDisplay");

        localStorage.setItem("emailSliderOnDisplay", "flex");
        emailSliderOn.style.display = localStorage.getItem("emailSliderOnDisplay");
        
    }
});

document.addEventListener('click', (e) => {
    const sliderCircle = document.querySelector('.toggle-circle');
    if (e.target === profileSliderOn) {
        profileSliderOn.style.display = 'none';
        profileSliderOff.style.display = 'flex';
    } else if (e.target === profileSliderOff) {
        profileSliderOff.style.display = 'none';
        profileSliderOn.style.display = 'flex';
    }
});

// Message Send //

document.addEventListener('submit', () => {
        const messageSection = document.querySelector('.message-user');
        const messageConfirm = document.querySelector('.sent-confirmation');
        messageConfirm.style.display = 'block';
});