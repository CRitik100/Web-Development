document.addEventListener('DOMContentLoaded',()=>{
    const contentCard = document.querySelector('.mainContainer');
    const crossIcon = document.querySelector('#crossIcon');
    const copyIcon = document.querySelector('#copyIcon');
    const sharableLink = document.querySelector('.linkContainer div');
    let link;

    crossIcon.addEventListener('click',()=>{
        contentCard.innerHTML = "Thanks for Sharing..!!!";
        contentCard.style.color = "#A1ADC1";
    });
    copyIcon.addEventListener('click',()=>{
        link = sharableLink.innerText;
        console.log("Copied Link : "+link);
    });

});
