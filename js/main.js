const email = document.getElementById('email');
const password = document.getElementById('password');
const login = document.getElementById('login');
login.disabled = true;
const eye = document.getElementById('eye');

function Login(){
    const emailNum = email.value.length;
    const passwordNum = password.value.length;
    if(emailNum>=1 && passwordNum>=1){
    login.classList.remove('disabled');
    login.disabled = false;
}else{login.classList.add('disabled');
  }
  
}

email.addEventListener('input',()=>{
    Login();
});


password.addEventListener('input',()=>{
    Login();
    const passwordNum = password.value.length;
    if(passwordNum>=1){
    eye.classList.remove('hidden');

    }else
    {eye.classList.add('hidden');}
});

      eye.addEventListener('click',()=>{
        let inputType = password.type;
        if(inputType==='password'){
          password.type = 'text';
        }else{
          password.type = 'password';
        }
      });