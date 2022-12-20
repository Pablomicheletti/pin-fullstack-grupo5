import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { useState } from 'react';

function Form (){

    const url ="https://jsonplaceholder.typicode.com/posts"
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        message:""
    })

    const[success, setSuccess]= useState(false)
    const [error, setError] = useState(false)


    function submit(e){
        e.preventDefault();
        axios.post(url,{
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            message: user.message
        })
        .then(response=>{
            setUser({firstName:"",
            lastName:"",
            email:"",
            message:""})
            console.log(response.data)
            setSuccess(true)
        }).catch((response)=>{
            setError(true)
       
    })
    }

    function handle(e){
        const newdata={...user}
        newdata[e.target.id]= e.target.value
        setUser(newdata)
        console.log(newdata)

    }

    const disabled = !(user.firstName && user.lastName && user.email && user.message)
    
  return (
    <div className="form">
      <form onSubmit={(e)=> submit(e)}>
      <div className="input-container ic1">
        <input value={user.firstName} onChange={(e)=>handle(e)} id="firstName" className="input" type="text" placeholder="Nombre" />
        <div className="cut"></div>
        <label htmlFor="firstname" className="placeholder"/>
      </div>
      <div className="input-container ic2">
        <input value={user.lastName} onChange={(e)=>handle(e)} id="lastName" className="input" type="text" placeholder="Apellido" />
        <div className="cut"></div>
        <label htmlFor="lastname" className="placeholder"/>
      </div>
      <div className="input-container ic2">
        <input value={user.email} onChange={(e)=>handle(e)} id="email" className="input" type="email" placeholder="email@ejemplo.com" />
        <div className="cut cut-short"></div>
        <label htmlFor="email" placeholder="email@ejemplo.com"/>
      </div>
      <textarea value={user.message} onChange={(e)=>handle(e)} className="message" id="message" placeholder="Deja tu consulta" />
      <div className="cut"></div>
         {success &&  <Alert severity="success">Mensaje enviado correctamente</Alert>}
         {error &&  <Alert severity="error">Ocurrio un error al intentar enviar el mensaje!</Alert>}

     <Button disabled={disabled} variant="contained" color="success" size="large" type="submit">
  Enviar
</Button>
</form>





    </div>

    
  )
}


export default Form