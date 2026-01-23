

import React from "react";


function Navbar() {
const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      
      <span className="navbar-brand">🍕 App</span>

      <div className="d-flex gap-2 ms-auto">

        {/* visibles */}
        <button className="btn btn-outline-light">🍕 Home</button>

        {/*con token */}
        {token && (
          <>
            <button className="btn btn-outline-light">🔓 Profile</button>
            <button className="btn btn-outline-warning">🔒 Logout</button>
          </>
        )}

        {/*sin token */}
        {!token && (
          <>
            <button className="btn btn-outline-success">🔐 Login</button>
            <button className="btn btn-outline-primary">🔐 Register</button>
          </>
        )}

        {/* SIEMPRE visible */}
        <button className="btn btn-warning">
          🛒 Total: ${total}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;