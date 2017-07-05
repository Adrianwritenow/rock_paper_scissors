var computer = ['paper','rock','scissors'];
let me = ['paper','rock','scissors'];

function meThrow(){
  var mePick = me[Math.floor(Math.random() *3)];
  console.log("My pick is", mePick);

function computerThrow (){
var computerPick = computer[Math.floor(Math.random() *3)];
console.log("computerPick is", computerPick);

var result;

if(computerPick==='scissors' &&  mePick==='rock' || computerPick==='rock' &&  mePick==='paper' || computerPick==='paper' &&  mePick==='scissors') {
  result = 'I Win!'
console.log("result:", result);
} else if(computerPick==='rock' &&  mePick==='scissors' || computerPick==='paper' &&  mePick==='rock' || computerPick==='scissors' &&  mePick==='paper'){
  result='Computer Wins!'
  console.log("result:", result);
} else if(computerPick==='rock' &&  mePick==='rock' || computerPick==='paper' &&  mePick==='paper' || computerPick==='scissors' &&  mePick==='scissors') {
  result='Looks like a tie!'
  console.log("result:", result);
}

}
computerThrow();
}
meThrow();
