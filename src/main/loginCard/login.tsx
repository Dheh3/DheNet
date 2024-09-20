import './login.css'

import logo from '../../assets/logoipsum-317.svg'


function login() {
    return (
        <>
            <div className="outCard">

                <div>
                    <img src={logo} alt="" />
                </div>


                <p>Já tem conta?</p>
                <label htmlFor="userLogin">Login</label>
                <input type="text" name='userLogin' /><br />
                <label htmlFor="">Senha</label>
                <input type="password" name="userPassword" /><br />
                <button type='submit'>Entrar</button><br /><hr />

                <p>Ainda nao tem conta?</p>
                <button>Cadastre-se</button>

            </div>
        </>

    )
}

export default login;