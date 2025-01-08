document.addEventListener('DOMContentLoaded',()=>{
    const faqsContainers = document.querySelectorAll('.faqContainer');


    faqsContainers.forEach(faqsContainer => {
        const question = faqsContainer.querySelector('.question');
        const answer = faqsContainer.querySelector('.answer');
        question.addEventListener('click',()=>{
            if(question.querySelector('#accordionSign').textContent === "+"){
                question.querySelector('#accordionSign').textContent = "-";
                question.querySelector('#accordionSign').style.paddingBottom = "1.6rem";
                answer.style.maxHeight = answer.scrollHeight + 'px';
                faqsContainer.style.gap = '0.9rem';
            }
            else if(question.querySelector('#accordionSign').textContent === "-"){
                question.querySelector('#accordionSign').textContent = "+";
                question.querySelector('#accordionSign').style.paddingBottom = "1.4rem";
                answer.style.maxHeight = '0px';
                faqsContainer.style.gap = '0px'
            }
        });
    });

});