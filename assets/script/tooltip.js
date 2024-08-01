export const toolTip = document.addEventListener('DOMContentLoaded', function () {
    const toolTipsElements = document.querySelectorAll('.tooltip-target');

    toolTipsElements.forEach(element => {
        //cria o título da tooltip
        const toolTipTitle = element.getAttribute('data-title-tooltip');
        const title = document.createElement('h3');
        title.innerText = toolTipTitle;
        title.classList.add('tooltip-title');

        //cria o separador
        const separador = document.createElement('hr');
        separador.classList.add('separador-tooltip');

        //cria o texto da tooltip
        const toolTipText = element.getAttribute('data-tooltip');
        const toolTip = document.createElement('p');
        toolTip.classList.add('tooltip');
        toolTip.innerText = toolTipText;

        //cria o container para o tooltip
        const containerToolTip = document.createElement('div');
        containerToolTip.classList.add('container-tooltip');
        containerToolTip.appendChild(title);
        containerToolTip.appendChild(separador);
        containerToolTip.appendChild(toolTip);

        //adiciona o container toolTip ao elemento da lista
        element.parentElement.appendChild(containerToolTip);

        element.addEventListener('mouseenter', () => {
            containerToolTip.classList.add('visible-container-tooltip');
        });

        element.addEventListener('mouseleave', () => {
            containerToolTip.classList.remove('visible-container-tooltip');

        });
    });
});