const bellIcon = document.querySelector('.bell');
const alertX = document.querySelector('.x-button');
const alert = document.getElementsByClassName('alert');
const alertNotif = document.querySelector('.alert-notification');
const emailSliderOn = document.querySelector('.email-slider-on');
const emailSliderOff = document.querySelector('.email-slider-off');
const profileSliderOn = document.querySelector('.profile-slider-on');
const profileSliderOff = document.querySelector('.profile-slider-off');
const autoCompleteCont = document.querySelector('.autoCompleteCont');
const autoCompleteLi = autoCompleteCont.children;



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


function emailSave() {
    var emailCheckbox = document.querySelector('.emailBox');
    localStorage.setItem('emailBox', emailCheckbox.checked  /*(True or False)*/);
}

function emailLoad() {
    var emailChecked /*(True or False)*/ = JSON.parse(localStorage.getItem('emailBox'));
    document.querySelector('.emailBox').checked = emailChecked;
}

emailLoad();



function profileSave() {
    var profileCheckbox = document.querySelector('.profileBox');
    localStorage.setItem('profileBox', profileCheckbox.checked);
}

function profileLoad() {
    var profileChecked = JSON.parse(localStorage.getItem('profileBox'));
    document.querySelector('.profileBox').checked = profileChecked;
}

profileLoad();

function clearLocalStorage() {
    localStorage.clear();
    document.querySelector('.emailBox').checked = false;
    document.querySelector('.profileBox').checked = false;
}

// Message Send //

document.addEventListener('submit', () => {
        const messageSection = document.querySelector('.message-user');
        const messageConfirm = document.querySelector('.sent-confirmation');
        messageConfirm.style.display = 'block';
});

// Auto Complete //


const memberNames = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'];
const searchInput = document.querySelector('.search-input');


function letterCheck(x){
    const letters = [' ', 'Shift', 'Backspace', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    if (letters.includes(x)){
        return true;
    } else {
        return false;
    }
}

document.addEventListener('keyup', (e) => {
    autoCompleteCont.innerHTML = '';
    if(letterCheck(e.key) === true){        
        for (let i = 0; i < memberNames.length; i++){
            console.log(`Currently checking ${memberNames[i]}`);
            var nameMatch = (memberNames[i].startsWith(searchInput.value));
            if (searchInput.value === '') {
                autoCompleteCont.style.display = 'none';
            } else {
                autoCompleteCont.style.display = 'block';
                if (nameMatch === true) {
                    console.log(memberNames[i]);
                    var autoCompleteText = memberNames[i];
                    autoCompleteCont.style.display = 'block';
                    var li = document.createElement('LI');
                    li.innerHTML = autoCompleteText;
                    li.className = 'autoCompleteName';
                    autoCompleteCont.appendChild(li);
                    console.log(autoCompleteLi);
                }
            }
        }
    }
});


document.addEventListener('click', (e) => {
    const autoCompleteLi = autoCompleteCont.childNodes;
    for (let i = 0; i<4; i++){
        if(e.target === autoCompleteLi[i]){
            searchInput.value = autoCompleteLi[i].textContent;
            autoCompleteCont.style.display = 'none';
        }
    }
});


