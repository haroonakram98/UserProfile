import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import userImage from '../src/images/programmer.png';

function App() {
  const projects = [
    { name: 'Tujjar', discription: 'Tujjar is an ecommerce website and it is developed in simple Html Css.' },
    { name: 'Healthwire', discription: 'Healthwire provide healthcare services to pharmacies, hospitals, clinics etc' },
    { name: 'EliteRewards', discription: 'EliteRewards is an ecommerce website and it is developed in simple Html Css.' },
    { name: 'Pick your sheet', discription: 'Pick your sheet is a website which provide notes facilities' },
  ];

  return (
    <div>
      {/* Bootstrap Navbar with Black Color */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* Brand: User Name */}
          <span className="navbar-brand">Waqar Tarar</span>
        </div>
      </nav>

      {/* User Image in Top-right Corner */}
      <div className="user-image">
        <img src={userImage} alt="Profile" className="rounded-circle" width="50" height="50" />
      </div>

      <div className="container bootstrap snippets bootdey">
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-4 col-sm-5">
              <div className="thumbnail">
                <img src={userImage} alt="Profile Picture" />
              </div>
              <br />
              <div className="list-group">
                <a href="#/" className="list-group-item">
                  <i className="fab fa-instagram"></i> &nbsp;&nbsp;@waqar_tarar
                  <i className="fa fa-chevron-right list-group-chevron"></i>
                </a>
                <a href="#/" className="list-group-item">
                  <i className="fab fa-twitter"></i> &nbsp;&nbsp;@waqartarar01
                  <i className="fa fa-chevron-right list-group-chevron"></i>
                </a>
                <a href="#/" className="list-group-item">
                  <i className="fab fa-facebook"></i> &nbsp;&nbsp;Waqar Tarar
                  <i className="fa fa-chevron-right list-group-chevron"></i>
                </a>
                <a href="#/" className="list-group-item">
                  <i className="fas fa-envelope"></i> &nbsp;&nbsp;waqartara01@gmail.com
                  <i className="fa fa-chevron-right list-group-chevron"></i>
                </a>
              </div>
            </div>

            <div className="col-md-8 col-sm-7">
              <h2>Waqar Tarar</h2>
              <h4>Senior Software Engineer At Innovative Private Limited</h4>
              {/* ... existing code ... */}
              <hr />
              <ul className="pr-list">
                <li><h2>Projects</h2></li>
                {projects.map((item) => (
                  <li key={item.name}>
                    <strong>{item.name}</strong>
                    <p>{item.discription}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer fixed-bottom py-3 bg-dark text-white">
        <div className="container text-center">
          <span className="text-muted">Copyrights @ 2020 Govt of Pakistan - All Rights reserved - P.IA 00874353 </span>
        </div>
      </footer>

    </div>
  );
}

export default App;
