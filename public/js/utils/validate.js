const ValidateLetter = (e)=>{
  if(e.which >= 48 && e.which <= 58){
    e.preventDefault();
  }
}
const ValidateNumber = (e)=>{
  if(e.which< 47 || e.which>58){
    e.preventDefault();
  }
}
