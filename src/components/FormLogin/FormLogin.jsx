import {useCallback, useContext, useState} from "react";
import MyInput from "../UI/MyInput/MyInput.jsx";
import styles from './FormLogin.module.css'
import MyButton from "../UI/myButton/myButton.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {FetchAPI} from "../../services/FetchAPI.js";
import {AuthContext} from "../../contextProviders/AuthContextProvider.jsx";
import {verification} from "../../utils/tools.js";
import FormError from "../FormError/FormError.jsx";



const FormLogin = () => {
    const params = useParams();
    const [loginForm, setForm] = useState(params.type === 'log');
    const [auth,setAuth]=useContext(AuthContext)
    const navigate=useNavigate()
    const [formData,setData]=useState({
        email:'',
        password:'',
        repeatPassword:''
    })
    const [errors,setErrors]=useState(
        {
            email:null,
            password:null,
            repeatPassword: null,
        }
    )
    const onLogin=useCallback(()=>{
        let result=verification(formData,loginForm)
        if (result[0]){
            FetchAPI.setToLocaleStorage('user','verified')
            setAuth(true)
            navigate('/')
        }else {
            console.log(errors)
            setErrors(result[1])
        }

    },[formData,navigate,errors])

    return (
        <form className={styles.form} onSubmit={()=>1}>
            <h1>{loginForm ? 'Login' : 'Registration'}</h1>

            <MyInput  placeholder="email" value={formData.email} onChange={e=>setData({...formData,email:e.target.value})} />
            {errors.email&&<FormError>{errors.email}</FormError>}
            <MyInput placeholder="password" value={formData.password} onChange={e=>setData({...formData,password:e.target.value})} />
            {errors.password&&<FormError >{errors.password}</FormError>}
            {!loginForm && (<MyInput placeholder="repeat your password" value={formData.repeatPassword} onChange={e=>setData({...formData,repeatPassword:e.target.value}
            )}/>)}
            {!loginForm &&(errors.repeatPassword&&<FormError>{errors.repeatPassword}</FormError>)}
            {loginForm && (
                <>
                    <MyButton onClick={onLogin} type="button">Login</MyButton>
                    <MyButton onClick={() => setForm(false)} type="button">Don't have an account? Click</MyButton>
                </>
            )}

            {!loginForm && (
                <>
                    <MyButton onClick={onLogin} type="button">Register</MyButton>
                    <MyButton onClick={() => setForm(true)} type="button">Already have an account?</MyButton>
                </>
            )}
        </form>
    );
};

export default FormLogin;