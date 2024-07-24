import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Despre Noi</h5>
            <p>
              Suntem dedicați să oferim cele mai bune produse și servicii pentru
              clienții noștri. Vizitează pagina noastră pentru mai multe
              informații.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Link-uri Utile</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Acasă
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Produse
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Servicii
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>Adresă: Strada Exemplului, Nr. 123, București, Moldova</p>
            <p>Telefon: +373 123 456</p>
            <p>Email: info@example.com</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Toate drepturile rezervate.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
