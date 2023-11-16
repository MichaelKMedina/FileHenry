const validation = (data) => {
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const passRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S/;
    
    const { email, password } = data;

    const estado = {mail:'', pass: ''}

    if(!email) estado.mail = 'Campo Email Vacio';
        else if(email.length > 35) estado.mail = 'No ingrese mas de 35 caracteres';
        else if(!emailRegex.test(email)) estado.mail = 'Email invalido';
    if(!password) estado.pass = 'Campo vacio';
        else {
            if(!passRegex.test(password)) {
                estado.pass = 'La contraseña debe tener al menos un dígito, al menos una minúscula y al menos una mayúscula';}
            else if(password.length < 6 && password.length > 8) estado.pass = 'La clave debe tener entra 6 y 8 caracteres';
        }
    return estado;
};

export default validation;