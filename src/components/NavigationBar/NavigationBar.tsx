// NavigationBar.tsx
import React from 'react';

const NavigationBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Filtros</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Item 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Item 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Item 3</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Item 4</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Item 5</a>
            </li>
            {/* Agregar más elementos según sea necesario */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;



// // NavigationBar.tsx
// import React from 'react';

// const NavigationBar: React.FC = () => {
//   return (
//     <nav className="navbar navbar-expand-lg bg-danger">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">Filtros</a>
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           <li className="nav-item dropdown">
//             <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//               Año
//             </a>
//             <ul className="dropdown-menu">
//               {/* Agregar más elementos según sea necesario */}
//             </ul>
//           </li>
//           <li className="nav-item dropdown">
//             <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//               Género
//             </a>
//             <ul className="dropdown-menu">
//               <li><a className="dropdown-item" href="#">Acción</a></li>
//               <li><a className="dropdown-item" href="#">Comedia</a></li>
//               {/* Agregar más elementos según sea necesario */}
//             </ul>
//           </li>
//           {/* Repetir la estructura para los demás elementos */}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavigationBar;
