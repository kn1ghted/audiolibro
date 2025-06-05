import kalote from "./kalote";
import diria from "./diria";
import test from "./test";

const navigation = [
  {
    id: "2",
    label: " Kalö̀te de monte",
    path: "#",
    slug: "kalote",
    children: kalote,
    // children: [
    //   // PATH debe ser igual al slug de la página en pages.js
    //   {
    //     id: "20",
    //     label: "Claves compuestas en 5/4",
    //     path: "/claves-5", 
    //   },
    //   {
    //     id: "21",
    //     label: "Quinta Clave Completa",
    //     path: "/quinta-completa", 
    //   },
    //   {
    //     id: "22",
    //     label: "Quinta Clave Abierta",
    //     path: "/quinta-abierta", 
    //   },
    //   {
    //     id: "23",
    //     label: "Quinto",
    //     path: "/quinto",
    //   },
    //   {
    //     id: "24",
    //     label: "Quintí",
    //     path: "/quinti",
    //   },
    //   {
    //     id: "25",
    //     label: "Quinté",
    //     path: "/quinte",
    //   },
    //   {
    //     id: "26",
    //     label: "Quintú",
    //     path: "/quintu",
    //   },
    // ],
  },
  {
    id: "3",
    label: "Convite de Diriá",
    // se usa para crear dropdowns
    path: "#", 
    slug: "diria",
    children: diria,
    // children: [
    //   {
    //     id: "30",
    //     label: "Claves compuestas en 7/8",
    //     path: "/claves-7", 
    //   },
    //   {
    //     id: "31",
    //     label: "Clave completa en 7",
    //     path: "/completa-7",
    //   },
    //   {
    //     id: "32",
    //     label: "Clave abierta en 7",
    //     path: "/abierta-7",
    //   },
    //   {
    //     id: "33",
    //     label: "Séptima",
    //     path: "/septima",
    //   },
    //   {
    //     id: "35",
    //     label: "Séptimo",
    //     path: "/septimo",
    //   },
    // ],
  },
  {
    id: "4",
    label: "Testing",
    // se usa para crear dropdowns
    path: "#", 
    slug: "test-audios",
    children: test
  }
];

export default navigation;