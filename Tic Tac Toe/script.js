document.addEventListener('DOMContentLoaded',()=>{
    const board = document.querySelector('.board');
    const cells = document.querySelectorAll('.cell');
    const crossIcon = document.querySelector('.cross').innerHTML;
    const big0Icon = document.querySelector('.big0').innerHTML;
    const noOfRound = document.querySelector('.noOfRound');
    const message = document.querySelector('.message');
    const nextButton = document.querySelector('.next');
    let player = 'X';
    let round = 5;
    let wonByX = 0;
    let wonByO = 0;


    let winningPatterns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    function changingStatusOfAllCells(status){
        cells.forEach(cell =>{
            cell.disabled = status;
        });
    }
    function resettingAllCell(){
        cells.forEach(cell =>{
            cell.innerHTML = '';
            cell.id = '';
        })
    }

    function checkSeries(){
        if(wonByX>wonByO){
            position1 = "X";
            message.innerHTML=`Congratulations Player '${position1}' Won the Series...!!!`;
        }
        else if (wonByX<wonByO){
            position1 = "O";
            message.innerHTML=`Congratulations Player '${position1}' Won the Series...!!!`;
        }
        else message.innerHTML=`Series is Draw...!!!`;
        message.style.display = "block";
        message.style.maxHeight = message.scrollHeight + 'px';
        board.style.display = "none";
    }

    function checkWinner(){
        winningPatterns.forEach(winningPattern=>{
            let position1= cells[winningPattern[0]].id;
            let position2= cells[winningPattern[1]].id;
            let position3= cells[winningPattern[2]].id;

            if(position1!='' && position2!='' && position3!=''){
                if(position1==position2 && position2 == position3){
                    if(position1=='X')
                        wonByX++;
                    else
                        wonByO++;
                    if(noOfRound.innerHTML == "Final"){
                        checkSeries();
                    }
                    else{
                        message.innerHTML=`Player '${position1}' Won this Round...!!!`;
                        message.style.display = "block";
                        message.style.maxHeight = message.scrollHeight + 'px';
                    }
                    player = position1;
                    changingStatusOfAllCells(true);
                }
            }
        });
    }

    function checkDraw(){
        for( let i = 0; i<9;i++){
            let position= cells[i].id;
            if(position!=''){
                if(i==8){
                    if(noOfRound.innerHTML == "Final"){
                        checkSeries();
                    }                     
                    else{
                        message.innerHTML=`This Round is Draw...!!!`;
                        message.style.display = "block";
                        message.style.maxHeight = message.scrollHeight + 'px';
                    }   
                }
            }
            else
                break;
        }
    }

    cells.forEach(cell =>{
        cell.addEventListener('click',()=>{
            let icon;
            if(cell.innerHTML===''){
                cell.id = player;
                if(player=='X'){
                    icon =  crossIcon;
                    player = 'O'
                }
                else {
                    icon = big0Icon;
                    player = 'X';
                }
                cell.innerHTML= icon;
                cell.querySelector('svg').style.display = 'block';
                cell.disabled = true;
            }
            checkWinner();
            checkDraw();
        });
    });
    nextButton.addEventListener('click',()=>{
        if(noOfRound.innerHTML > 2){
            noOfRound.innerHTML = --round;
            resettingAllCell();
            changingStatusOfAllCells(false);
            message.style.display = "none";
            message.style.maxHeight = '0px';
        }
        else if(noOfRound.innerHTML == 2){
            noOfRound.innerHTML = "Final";
            resettingAllCell();
            changingStatusOfAllCells(false);
            message.style.display = "none";
            message.style.maxHeight = '0px';
            nextButton.style.display = "none";
        }
    })
});