export const toolTip = document.addEventListener('DOMContentLoaded', function () {
    const toolTipsElements = document.querySelectorAll('.tooltip-target');

    toolTipsElements.forEach(element => {
        
        const toolTipText = element.getAttribute('data-tooltip');
        const toolTip = document.createElement('div');
        toolTip.classList.add('tooltip');
        toolTip.innerText = toolTipText;
        element.appendChild(toolTip);

        element.addEventListener('mouseenter', () => {
            toolTip.classList.add('tooltip-visible');
            console.log(toolTipText);
        });

        element.addEventListener('mouseleave', () => {
            toolTip.classList.remove('tooltip-visible');

        });
    });
});