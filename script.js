///-----get elements
let container = document.getElementById('container');
let greetings = document.getElementById('greetings');
let restart = document.getElementById('restart');
let btn = document.querySelectorAll('input');
let text ='O';
let n = 0;
let k = 0;
let m = 0;
let matrix = [
    ['','',''],
    ['','',''],
    ['','','']
];
let sumDiagonals = { primary: 0, secondary: 0 };
let sumColumns = {first: 0, second: 0, third: 0}

//-----restart
function restartDisplay(){
    matrix = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    n = 0;
    k = 0;
    m = 0;
    sumDiagonals = { primary: 0, secondary: 0 };
    sumColumns = {first: 0, second: 0, third: 0}
    text = 'O';
    restart.innerText = 'Press to restart'
    btn.forEach(input => { input.disabled = false;});
    btn.forEach(input => { input.value = ' ';});
    document.getElementById('restart').style.display = 'none'
}


//-----check winner
function checkWinner(){
if((matrix[0] == 'X,X,X')|| (matrix[1] == 'X,X,X') || (matrix[2]=='X,X,X') || (sumDiagonals.primary =='XXX') || (sumDiagonals.secondary =='XXX')  || (sumColumns.first =='XXX')|| (sumColumns.second =='XXX')|| (sumColumns.third =='XXX')){
    restart.innerText = '<Winner is player number two>' + '\n'+ restart.textContent
    document.getElementById('restart').style.display = 'block'
    btn.forEach(input => { input.disabled = true;});
} else if((matrix[0] == 'O,O,O') || (matrix[1] == 'O,O,O') || (matrix[2]=='O,O,O') || (sumDiagonals.primary== 'OOO') || (sumDiagonals.secondary=='OOO')|| (sumColumns.first =='OOO')|| (sumColumns.second =='OOO')|| (sumColumns.third =='OOO')){
    restart.innerText = '<Winner is player number one>' + '\n'+ restart.textContent
    document.getElementById('restart').style.display = 'block'
    btn.forEach(input => { input.disabled = true;});
} else if (m == 9){
    restart.innerText = '<Try again>' + '\n'+ restart.textContent
    document.getElementById('restart').style.display = 'block'
    btn.forEach(input => { input.disabled = true;});
}   
}

//----button start game
greetings.addEventListener('click', function (){
    displayOn()
})
//----button restart game
restart.addEventListener('click', function (){
    restartDisplay()
})

//-----function start
function displayOn(){

document.getElementById('greetings').style.display = 'none';
document.getElementById('container').style.display = 'block';

//---button function
btn.forEach(input => { input.addEventListener('click', function (){

    k = 1;
    m += 1;
    input.value = text;
    if (n == '0' & k == '1' ){
        text = 'X';
        n = 1;
        console.log('x')
        } else if (n == '1' & k == '1'){
            text = 'O';
            n = 0;
            console.log('x')
    } else if (m == '9'){
        input.disabled = true;
    }
    input.disabled = true;
    checkWinner()
    
})})
}
///---- sum  to string
function Game(x) {
    eval('matrix'+deCode(x)+'='+'text'+';') 
    sumDiagonals.primary = matrix[0][0] + matrix[1][1] + matrix[2][2];
    sumDiagonals.secondary = matrix[0][2] + matrix[1][1] + matrix[2][0];
    sumColumns.first = matrix[0][0] + matrix[1][0] + matrix[2][0];
    sumColumns.second = matrix[0][1] + matrix[1][1] + matrix[2][1];
    sumColumns.third = matrix[0][2] + matrix[1][2] + matrix[2][2];
}
///---- sum index
function deCode(x){
    return "["+Array.from(x)[0]+"]"+"["+Array.from(x)[2]+"]";
}


