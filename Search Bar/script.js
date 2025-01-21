document.addEventListener('DOMContentLoaded',()=>{
    const searchBar = document.querySelector('.searchBar');
    const userInput = document.getElementById('userIn');
    const availableProduct = document.getElementsByClassName('description');

    searchBar.addEventListener("mouseover",()=>{
        searchBar.style.cssText = `
            box-shadow: #C0D8F5 0px 0px 20px ;
        `;
    });

    userInput.addEventListener('input',()=>{
        let enteredText = userInput.value;
        for(let i =0 ; i< availableProduct.length;i++){
            if (String(availableProduct[i].innerText).toLowerCase().includes(String(enteredText).toLowerCase())){
                console.log(String(availableProduct[i].innerText).toLowerCase()); 
                availableProduct[i].closest('.options').style.display = 'flex';
            }
            else{
                availableProduct[i].closest('.options').style.display = 'none';
            }
        }
    });
});