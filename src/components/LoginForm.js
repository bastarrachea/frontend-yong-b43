import React from 'react';


function LoginForm() {
  return (
    <form className= 'd-flex-horizontal'>
      <h3>Inicia Sesión</h3>

      <div className="form-group">
        <label>Correo Electrónico</label>
        <input type="email" className="form-control" placeholder="Enter email" />
      </div>

      <div className="form-group">
        <label>Contraseña</label>
        <input type="password" className="form-control" placeholder="Enter password" />
      </div>

      <button type="submit" className="btn btn-secondary btn-block ">Entrar</button>

        

    </form>

    

  )
}

export default LoginForm