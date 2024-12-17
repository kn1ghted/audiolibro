const navigation = [
  {
    id: "2",
    label: " Kalö̀te de monte",
    path: "#",
    children: [
      // PATH debe ser igual al slug de la página en pages.js
      {
        id: "20",
        label: "Claves compuestas en 5/4",
        path: "/claves-5", 
      },
      {
        id: "21",
        label: "Quinta Clave Completa",
        path: "/quinta-completa", 
      },
      {
        id: "22",
        label: "Quinta Clave Abierta",
        path: "/quinta-abierta", 
      },
      {
        id: "23",
        label: "Quinto 5 de 4",
        path: "/quinto-5-4",
      },
      {
        id: "24",
        label: "Quinto 4 de 5",
        path: "/quinto-4-5",
      },
      {
        id: "25",
        label: "Quintí",
        path: "/quinti",
      },
      {
        id: "26",
        label: "Quinté",
        path: "/quinte",
      },
      {
        id: "27",
        label: "Quintú",
        path: "/quintu",
      },
    ],
  },
  {
    id: "3",
    label: "Convite de Diriá",
    // se usa para crear dropdowns
    path: "#", 
    children: [
      {
        id: "30",
        label: "Claves compuestas en 7/8",
        path: "/claves-7", 
      },
      {
        id: "31",
        label: "Clave completa en 7",
        path: "/completa-7",
      },
      {
        id: "32",
        label: "Clave abierta en 7",
        path: "/abierta-7",
      },
      {
        id: "33",
        label: "Séptima",
        path: "/septima",
      },
      {
        id: "35",
        label: "Séptimo 4:3",
        path: "/septimo-4-3",
      },
      {
        id: "36",
        label: "Séptimo 3:4",
        path: "/septimo-3-4",
      },
    ],
  }
];

export default navigation;
