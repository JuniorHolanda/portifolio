export const toolTip = document.addEventListener('DOMContentLoaded', function () {
    const toolTipsElements = document.querySelectorAll('.tooltip-target');

    toolTipsElements.forEach(element => {
        const toolTipText = element.getAttribute('data-tooltip');
        const toolTip = document.createElement('div');
        toolTip.classList.add('tooltip');
        toolTip.innerText = toolTipText;
        console.log("vai adicionar o elemento no dom")
        element.appendChild(toolTip);
        console.log("adc o elemento no dom")

        element.addEventListener('mouseenter', () => {
            toolTip.classList.add('tooltip-visible');
            console.log(toolTipText);
        });

        element.addEventListener('mouseleave', () => {
            toolTip.classList.remove('tooltip-visible');
            console.log('até aqui remove');
        });
    });
});