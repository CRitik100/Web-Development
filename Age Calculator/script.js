document.addEventListener('DOMContentLoaded',()=>{
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const calculate = document.getElementById('calculate');
    const output = document.querySelector('.outputContainer');
    const daysAge = document.querySelector('#daysAge');
    const monthsAge = document.querySelector('#monthsAge');
    const yearsAge = document.querySelector('#yearsAge');


    
    let ageCalculator = (birthDay,birthMonth,birthYear)=>{

        // Get today's date
        const today = new Date();

        // Calculate age components
        let years = today.getFullYear() - birthYear;
        let months = today.getMonth() - birthMonth;
        let days = today.getDate() - birthDay;

        // Adjust months and days if necessary
        if (months < 0 || (months === 0 && days < 0)) {
            years--;
            months += 12;
        }
        if (days < 0) {
            const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
            days += lastMonth.getDate();
            months--;
        }

        yearsAge.innerText = years;
        monthsAge.innerText = months;
        daysAge.innerText = days;
    };

    calculate.addEventListener('click',()=>{
        // output.style.display = 'block';
        output.style.maxHeight = output.scrollHeight + 'px';
        ageCalculator(dayInput.value,monthInput.value,yearInput.value);
    });

});