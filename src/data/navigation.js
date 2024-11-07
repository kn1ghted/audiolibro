const navigation = [
  {
    id: "2",
    label: " Kalö̀te de monte",
    path: "#",
    children: [
      {
        id: "21",
        label: "Quinto",
        path: "/quinto", // debe ser igual al slug de la página en pages.js
      },
    ],
  },
  {
    id: "3",
    label: "Convite de diriá",
    path: "#", // se usa para crear dropdowns
    children: [
      {
        id: "31",
        label: "Clave completa en 7",
        path: "/primero",
        },
    ],
  }
];

export default navigation;
