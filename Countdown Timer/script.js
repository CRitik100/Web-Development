document.addEventListener('DOMContentLoaded',()=>{
    const hour = document.querySelector('#hrInput');
    const minute = document.querySelector('#minInput');
    const second = document.querySelector('#secInput');
    const start = document.querySelector('#start');
    const reset = document.querySelector('#reset');
    let destinationPosition, update;

    let updateTime = () =>{
        const oneHourInMills = 60*60*1000;
        const oneMinInMills = 60*1000;
        const oneSecInMills = 1000;
        let currentPosition = new Date().getTime();
        let distanecPending = destinationPosition - currentPosition; 

        if(distanecPending>=0){
            // Calculating the remaining time.
            let hrs = Math.floor(distanecPending/oneHourInMills);
            let mins = Math.floor((distanecPending%oneHourInMills)/oneMinInMills);
            let secs = Math.floor(((distanecPending%oneHourInMills)%oneMinInMills)/oneSecInMills);

            // Populate in UI.
            document.querySelector('#hr').innerHTML = hrs;
            document.querySelector('#min').innerHTML = mins;
            document.querySelector('#sec').innerHTML = secs;

            reset.addEventListener('click',()=>{
                // Stop the Timer for Reset.
                clearInterval(update);
        
                // Populate in UI.
                document.querySelector('#hr').innerHTML = 1;
                document.querySelector('#min').innerHTML = 59;
                document.querySelector('#sec').innerHTML = 59;

                // default Value of Input.
                hour.value = 1;
                minute.value = 59;
                second.value = 59;
            });
        }
        else if(distanecPending<0){
            // Stop the Timer once distance covered.
            clearInterval(update);
        }
        
    };

    start.addEventListener('click',()=>{
        let hr = (hour.value)*60*60*1000;
        let min = (minute.value)*60*1000;
        let sec = (second.value)*1000;
        destinationPosition = hr + min + sec + new Date().getTime();
        update = setInterval(updateTime,1000);
    });

});