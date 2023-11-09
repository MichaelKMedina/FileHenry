import { useState } from 'react';
import style from './Form.module.css'
import validation from './validation';

const Form = ({ login }) => {
    const [userData, setData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setData({...userData,
            [property]: value});
        const errores = validation({...userData, [property]: value});
        setErrors({
            email: errores.mail,
            password: errores.pass,
        })

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        login(userData);
    }

    return(
        <form className={style.form}>
            <div className={style.fondo}>
                <div className={style.grid}>
                    <label htmlFor='email' className={style.labelName}>email</label>
                    <input 
                        type=''
                        name='email'
                        value={userData.email}
                        onChange={handleChange}
                        className={style.inputEmail}
                    />
                    <span className={style.error}>{errors.email}</span>
                </div>
                <div className={style.grid}>
                    <label htmlFor='password' className={style.labelName}>password</label>
                    <input 
                        type=''
                        name='password'
                        value={userData.password}
                        onChange={handleChange}
                        className={style.inputPass}
                    />
                    <span className={style.error}>{errors.password}</span>
                </div>
                <button type='submit' className={style.boton} onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )
}

export default Form;