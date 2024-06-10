export const changeThemeBtn = document.querySelector('#changeTheme');

const containerProfile = document.querySelector('#dark-theme-container-profile-first-page');
const darkProfileBox = document.querySelector('#darkProfileBox');
const darkContainerObjective = document.querySelector('#darkContainerObjective');
const darkListObjective = document.querySelector('#darkListObjective');
const darkContainerInfoFirstPage = document.querySelector('#darkContainerInfoFirstPage');
const darkHalftone = document.querySelector('#darkHalftone');
const darkImgProfile = document.querySelector('#darkImgProfile');
const darkSobreTitle = document.querySelector('#darkSobreTitle');
const darkSobreDescription = document.querySelector('#darkSobreDescription');
const darkStrongDescription = document.querySelectorAll('.darkStrongDescription');
const darkCloseTag = document.querySelector('#darkCloseTag');
const darkMenuItemMain = document.querySelectorAll('.darkMenuItemMain');
const darkMenuListMain = document.querySelector('#darkMenuListMain');
//const darkContainerObjective = document.querySelector('#');

// muda as imagens para o dark-theme
function changeImg () {
    if (changeThemeBtn.checked) {
        darkHalftone.src = 'assets/img/dark-halftone.png'
        darkImgProfile.src = 'assets/img/dark-profile.jpg'
    }else{
        darkHalftone.src = 'assets/img/halftone.png'
        darkImgProfile.src = 'assets/img/profile.jpg'
    }
}
//muda o tema para dark ou light
changeThemeBtn.addEventListener('change', () => {
    //chama a função para alterar as imagens
    changeImg();

    containerProfile.classList.toggle('dark-container-profile-first-page');
    darkProfileBox.classList.toggle('dark-profile-box');
    darkContainerObjective.classList.toggle('dark-container-objective');
    darkListObjective.classList.toggle('dark-list-objective');
    darkContainerInfoFirstPage.classList.toggle('dark-container-info-first-page');
    darkSobreTitle.classList.toggle('dark-sobre-title');
    darkSobreDescription.classList.toggle('dark-sobre-description');
    darkCloseTag.classList.toggle('dark-close-tag')
    darkMenuListMain.classList.toggle('dark-menu-list-main')
    //darkContainerObjective.classList.toggle('')

    //itera sobre a lista darkMenuMain e adiciona classe aos itens
    darkMenuItemMain.forEach(darkMenuItemMain => {
        darkMenuItemMain.classList.toggle('dark-menu-item-main') ; 
    });

    //itera sobre a lista darkStrongDescription e adiciona classe aos itens
    darkStrongDescription.forEach(darkStrongDescription => {
        darkStrongDescription.classList.toggle('dark-strong-description') ; 
    });
});