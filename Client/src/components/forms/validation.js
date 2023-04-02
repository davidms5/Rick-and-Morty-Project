const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validatelettersAndNumbers = new RegExp(/^(?=.*[a-z])(?=.*[0-9])/);
//luego buscar como seria hacer un switch statement y tambien si se puede poner un "required" en el form del componente form

export default function validation(inputs){
  const errors={};

  if(!inputs.userName){
    errors.userName = "el campo no puede estar vacio";
  };

  if(!regexEmail.test(inputs.userName)){
    errors.email = "Debe ser un email"
  };

  if(inputs.email.length > 35){
    errors.userName = "no puede tener mas de 35 caracteres"
  };

  if(!validatelettersAndNumbers.test(inputs.password)){
    errors.password = "debe contener minimo 1 numero"
  };
  if(inputs.password.length < 6 || inputs.password.length > 10){
    errors.password = "debe tener entre 6 y 10 caracteres"
  }

  return errors;
}
