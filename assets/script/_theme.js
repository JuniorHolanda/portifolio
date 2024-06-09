export const changeThemeBtn = document.querySelector('#changeTheme');

const containerProfile = document.querySelector('#dark-theme-container-profile-first-page');
const darkProfileBox = document.querySelector('#darkProfileBox');
const darkContainerObjective = document.querySelector('#darkContainerObjective');
const darkListObjective = document.querySelector('#darkListObjective');
const darkContainerInfoFirstPage = document.querySelector('#darkContainerInfoFirstPage');
const darkHalftone = document.querySelector('#darkHalftone');
//const darkContainerObjective = document.querySelector('#');

function changeImg () {
    if (changeThemeBtn.checked) {
        darkHalftone.src = 'script/dark-halftone.png'
    }else{
        darkHalftone.src = 'script/halftone.png'
    }
}

changeThemeBtn.addEventListener('change', () => {
    //chama a função para alterar as imagens
    changeImg();

    containerProfile.classList.toggle('dark-container-profile-first-page');
    darkProfileBox.classList.toggle('dark-profile-box');
    darkContainerObjective.classList.toggle('dark-container-objective')
    darkListObjective.classList.toggle('dark-list-objective')
    darkContainerInfoFirstPage.classList.toggle('dark-container-info-first-page')
    //muda a img do halftone pra dark

    //darkContainerObjective.classList.toggle('')
});