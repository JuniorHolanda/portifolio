export const toolTip = document.addEventListener('DOMContentLoaded', function () {
    const toolTipsElements = document.querySelectorAll('.tooltip-target');

    toolTipsElements.forEach(element => {
        //cria o título da tooltip
        const toolTipTitle = element.getAttribute('data-title-tooltip')
        const title = document.createElement('h3')
        title.innerText = toolTipTitle
        title.classList.add('tooltip-title')

        //cria o texto da tooltip
        const toolTipText = element.getAttribute('data-tooltip');
        const toolTip = document.createElement('div');
        toolTip.classList.add('tooltip');
        toolTip.innerText = toolTipText;

        element.parentElement.appendChild(title);
        element.parentElement.appendChild(toolTip);

        element.addEventListener('mouseenter', () => {
            toolTip.classList.add('tooltip-visible');
            title.classList.add('title-tooltip-visible');
            console.log(toolTipText);
        });

        element.addEventListener('mouseleave', () => {
            toolTip.classList.remove('tooltip-visible');
            title.classList.remove('title-tooltip-visible');

        });
    });
});