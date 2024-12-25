let progressValues = document.querySelectorAll('.progress-bar-container');
progressValues.forEach(Element => {
    
    let progressBar = Element.querySelector('.progress-percent');
    let progressValue = Element.querySelector('.progress-value');
    progressBar.style.width = progressValue.textContent;
});
