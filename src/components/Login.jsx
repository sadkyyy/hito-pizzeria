import React from "react";

function Login() {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

const validarDatos = (e) => {
    e.preventDefault();

     if (email === "" || password === "") {
         setError("Todos los campos son requeridos");
         return;
     }

       if (password.length < 6) {
          setError ("La contraseña debe tener al menos 6 caracteres");
    
       return;
   }
     setError("");
      alert ("Authentication successful");
};
    
    return (

        <div>
            <form onSubmit = {validarDatos}>
  <h2>Login</h2>
            


         <div>
                    <label>
                    Email: 
                    <input type= "text" 
                    name = "email"
                    value = {email}
                    onChange= {(e) => setEmail(e.target.value)} />
                    </label>
                </div><div>
                    <label>
                 Contraseña: 
                    <input type= "password" 
                    name = "password"
                    value = {password}
                    onChange= {(e) => setPassword(e.target.value)} />
                    </label>
                </div>
                  <button type="submit" className="btn btn-primary">
  Login
</button>
                <p className="text-danger">{error}</p>

            </form>
        </div>

    )
}

export default Login;