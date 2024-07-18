import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useFilterSort } from './FilterSortContext';

const NavigationBar: React.FC = () => {
  const { sortByValue, setSortByValue, setFilterByValue } = useFilterSort();

  const handleSortChange = (selectedSort: string) => {
    if (selectedSort === sortByValue) {
      setSortByValue(`${sortByValue}.desc`);
    } else {
      setSortByValue(selectedSort);
    }
  };

  const handleFilterChange = (selectedFilter: string) => {
    setFilterByValue(selectedFilter);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="sort-dropdown">
            Sort By
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleSortChange('popularity.desc')}>
              Popularity
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortChange('release_date.asc')}>
              Release Date - Ascending
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortChange('vote_average.desc')}>
              Vote Average
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortChange('revenue.desc')}>
              Revenue
            </Dropdown.Item>
            {/* Add more sorting options as needed */}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="filter-dropdown">
            Filter By Genre
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleFilterChange('genre')}>
              Action
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterChange('genre')}>
              Comedy
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterChange('genre')}>
              Drama
            </Dropdown.Item><Dropdown.Item onClick={() => handleFilterChange('genre')}>
              Suspense
            </Dropdown.Item><Dropdown.Item onClick={() => handleFilterChange('genre')}>
              
            </Dropdown.Item>
            {/* Add more genre options */}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default NavigationBar;



// // NavigationBar.tsx
// import React from "react";
// import SortBy from "./SortBy";

// const NavigationBar: React.FC = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           Order by:{" "}
//         </a>
//         <SortBy />
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Popularity
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Release date
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Vote average
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Revenue
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavigationBar;

// /////REVISARRRR/////

// // import Dropdown from 'react-bootstrap/Dropdown';
// // import DropdownButton from 'react-bootstrap/DropdownButton';

// // function ButtonDarkExample() {
// //   return (
// //     <>
// //       <Dropdown data-bs-theme="dark">
// //         <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
// //           Dropdown Button
// //         </Dropdown.Toggle>

// //         <Dropdown.Menu>
// //           <Dropdown.Item href="#/action-1" active>
// //             Action
// //           </Dropdown.Item>
// //           <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
// //           <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
// //           <Dropdown.Divider />
// //           <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
// //         </Dropdown.Menu>
// //       </Dropdown>

// //       <DropdownButton
// //         id="dropdown-button-dark-example2"
// //         variant="secondary"
// //         title="Dropdown button"
// //         className="mt-2"
// //         data-bs-theme="dark"
// //       >
// //         <Dropdown.Item href="#/action-1" active>
// //           Action
// //         </Dropdown.Item>
// //         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
// //         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
// //         <Dropdown.Divider />
// //         <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
// //       </DropdownButton>
// //     </>
// //   );
// // }

// // export default ButtonDarkExample;

// // // NavigationBar.tsx
// // import React from 'react';

// // const NavigationBar: React.FC = () => {
// //   return (
// //     <nav className="navbar navbar-expand-lg bg-danger">
// //       <div className="container-fluid">
// //         <a className="navbar-brand" href="#">Filtros</a>
// //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// //           <li className="nav-item dropdown">
// //             <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
// //               Año
// //             </a>
// //             <ul className="dropdown-menu">
// //               {/* Agregar más elementos según sea necesario */}
// //             </ul>
// //           </li>
// //           <li className="nav-item dropdown">
// //             <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
// //               Género
// //             </a>
// //             <ul className="dropdown-menu">
// //               <li><a className="dropdown-item" href="#">Acción</a></li>
// //               <li><a className="dropdown-item" href="#">Comedia</a></li>
// //               {/* Agregar más elementos según sea necesario */}
// //             </ul>
// //           </li>
// //           {/* Repetir la estructura para los demás elementos */}
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default NavigationBar;
