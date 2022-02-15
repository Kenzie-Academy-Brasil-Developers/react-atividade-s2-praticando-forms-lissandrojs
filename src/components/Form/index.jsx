import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { toast,ToastContainer } from "react-toastify";
import db from "../../mock";
import './style.css'
const Form =()=>{
    const formSchema = yup.object().shape({
        userName : yup.string().required("Nome de usuario e obrigatorio com ate 18 caracteres").max(18,"Ate 18 caracters"),
        name : yup.string().required("Nome completo e obrigatorio com ate 18 caracteres").max(18,"Ate 18 caracters"),
        email: yup.string().required("Email e obrigatorio").email("email invalido"),
        confirmedEmail : yup.string().oneOf([yup.ref("email")], "Email diferentes").required("Confirmacao de email e obrigaria").email("email invalido"),
        password : yup.string().required("cadastre uma senha "),
        confirmedPassword: yup.string().oneOf([yup.ref("password")], "Senhas desiguais").required("confirme sua senha"),
        accepted: yup.string().required("Aceite os termos de uso da aplicacao"),

    })

    const {register,handleSubmit, formState:{errors}} = useForm({
        resolver:yupResolver(formSchema),
    })
    const onSubmitForm = (data)=>  db.push(data)
    console.log(db)
   
    return (
        <div className="container--main">
            <h2>Cadastro de usuario</h2>
            <form className="container--form" onSubmit={handleSubmit(onSubmitForm)}>
                <input type="text" placeholder="Nome de usuario *" {...register("userName")} />
                   <p>{errors.userName?.message }</p> 
                <input type="text" placeholder="Nome Completo *" {...register("name")} />
                    <p>
                        {errors.name?.message }
                    </p>
                <input type="text"  placeholder="Endereço de Email *" {...register("email")}/>
                        <p>
                        
                             {errors.email?.message }
                        </p>
                <input type="text"  placeholder="Confirme seu Email *" {...register("confirmedEmail")}/>
                        <p>
                            {errors.confirmedEmail?.message}
                        </p>
                <div className="container--password">
                    <div className="container--password-left">

                        <input type="password"  placeholder="Senha" {...register("password")}/>
                            <p>
                                {errors.password?.message}
                            </p>
                    </div>
                    <div className="container--password-right">

                        <input type="password" placeholder="Confirme sua senha *" {...register("confirmedPassword")}/>
                            <p>
                                {errors.confirmedPassword?.message}
                            </p>
                    </div>
                </div>
                <div className="container--termos">
                    <input type="checkbox"  {...register("accepted")} />
                        {errors.accepted?.message}
                    <label >Eu aceito os termos de uso da Aplicaçao</label>

                </div>
                <button type="click">Cadastrar</button>
                <div>
                    <a href="/">Ja possui uma conta ?</a>

                </div>
            </form>


        </div>
    )
}
export default Form