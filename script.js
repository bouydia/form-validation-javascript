const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const password2=document.getElementById('password2')
const form=document.getElementById('form')
const submit=document.getElementById('btn')

//show error
function showError(input,message){
  const formControl=input.parentElement
  formControl.className='form-control error'
  const small=formControl.querySelector('small')
  small.innerText=message
}

//show sucsess
function showSucess(input){
  const formControl=input.parentElement
  formControl.className='form-control sucess'
}

//check email
function checkemail(input){
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(regexEmail.test(input.value.trim())){
    showSucess(input)
  } 
  else{
    showError(input,'Email is not valid')
  }
}

//check required
function checkRequired(inputArr) {
  inputArr.forEach((input) =>{
    if(input.value.trim()===''){
      showError(input,`${getFieldName(input)} is required`)
    }else{
      showSucess(input)
    }
  })
}

//check length
function checkLength(input ,min,max){
  if(input.value.length<min){
    showError(input,`${getFieldName(input)} must be at least ${min} characters`)
  }
  else if(input.value.length>max){
    showError(input,`${getFieldName(input)} must be less than ${max} characters`)
  }
  else{
    showSucess(input)
  }
}
//check password match
function checkPasswordMatch(input1,input2){
  if(input1.value != input2.value){
    showError(input2,"Paswword do not match")
  }
}
//get fildname
function getFieldName(input){
  return input.id.charAt(0).toUpperCase()+input.id.slice(1)
}

//Event
form.addEventListener('submit' , (e)=>{
  e.preventDefault();
  checkemail(email) 
  checkRequired([username,email,password,password2])
  checkLength(username,3,15)
  checkLength(password,6,20)
  checkPasswordMatch(password,password2)
  
})
