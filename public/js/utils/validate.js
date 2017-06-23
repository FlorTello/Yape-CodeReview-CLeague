const ValidateLeter = (e)=>{
  if(e.which >= 48 && e.which <= 58){
    e.preventDefault();
  }
}
const ValidateName = (e)=>{
  if($(e.target).val().length <= 2 ){
    console.log(false);
  }else
  console.log(true);
}
