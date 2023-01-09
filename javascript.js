function Login() {
    let done = 0;
    let usuario = document.getElementsByName('emailInsert')[0].value;
    usuario=usuario.toLowerCase();

    let senha= document.getElementsByName('passwordInsert')[0].value;
    senha=senha.toLowerCase();

    if (usuario=="arthur@adm" && senha=="admin") {
      alert("Usuário Administrador Permitido!")
      done=1;
    }
    
    if (done == 0) { alert("Dados incorretos, tente novamente"); }
  }