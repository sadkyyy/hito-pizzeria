import React from "react";

function Register() {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [password2, setPassword2] = React.useState("");
    const [error, setError] = React.useState("");
    




const validarDatos = (e) => {
    e.preventDefault();


     if (email === "" || password === "" || password2 === "") {
         setError("Todos los campos son requeridos");
         return;
     }


       if (password.length < 6) {
          setError ("La contraseña debe tener 6 caracteres");
       return;
   }

       if (password !== password2) {
           setError("Las contraseñas no coinciden");
           return;
       }
       setError("");
        alert ("Register successful");
};
    
    return (

        <div>
            <form onSubmit = {validarDatos}>
<h2>Register</h2>

         <div>
                    <label>
                    Email: 
                    <input type= "text" 
                    name = "email"
                    value = {email}
                    onChange= {(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                 Contraseña: 
                    <input type= "password" 
                    name = "password"
                    value = {password}
                    onChange= {(e) => setPassword(e.target.value)} />
                    </label>
                </div><div>
                    <label>
                   Repetir contraseña:
                    <input type= "password" 
                    name = "password2"
                    value = {password2}
                    onChange= {(e) => setPassword2(e.target.value)} />
                    </label>
                </div>
                 <button type="submit" className="btn btn-primary">
  Register
</button>
                <p className="text-danger">{error}</p>
             
            </form>
        </div>

    )
}

export default Register;
