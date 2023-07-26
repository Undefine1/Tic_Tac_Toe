let cells =['','','','','','','','',''];
let curr_player= 'X';
let result =document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let win =document.querySelector('.win');
let conditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const tictactoe =(element,index)=>{
    element.value =curr_player;
    element.disabled =true;
    cells[index]= curr_player;
    curr_player =curr_player =='X' ? 'O' : 'X';
    result.innerHTML ='PLAYER '+ curr_player+' TURN';
    console.log('hiui');
    for(let i=0;i<conditions.length;i++){
        let condition =conditions[i];
        let a = cells[condition[0]];
        let b= cells[condition[1]];
        let c =cells[condition[2]];
        console.log(cells[condition[0]]);
        console.log(cells[condition[1]]);
        console.log(cells[condition[2]]);
        if(a=='' || b=='' ||c==''){
            continue;
        }
        if (a == b && b == c) {
          console.log("success");
          // win.innerHTML= 'player ' +a+ ' Won';
          Swal.fire({
            title: "Congratulation &#x1F389;&#x1F388;&#x1F38A;",
            text: "PLAYER " + a + " WON",
            confirmButtonText: `Okay`,
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload();
            }
          });
          btns.forEach((btn) => (btn.disabled = true));
        }
    }
};

function reset(){
        cells=['','','','','','','','',''];
        btns.forEach((btn)=>{
            btn.value='';
        });
        curr_player ='X';
        result.innerHTML ='PLAYER X TURN';
        btns.forEach((btn)=>btn.disabled=false);
};

document.querySelector('#reset').addEventListener('click', reset);
btns.forEach((btn,i) => {
    btn.addEventListener('click',()=>tictactoe(btn,i));
});