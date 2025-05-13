import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center mb-4">Bienvenido a Mi Sitio</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Tarjeta 1</h5>
                <p className="card-text">Contenido de ejemplo usando Bootstrap.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Tarjeta 2</h5>
                <p className="card-text">Más contenido de ejemplo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
