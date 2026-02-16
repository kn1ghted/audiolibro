import kalote from "./kalote";
import diria from "./diria";
import creditos from "./creditos";

const navigation = [
  {
    id: "2",
    label: " Kalö̀te de monte",
    path: "#",
    slug: "kalote",
    children: kalote,
  },
  {
    id: "3",
    label: "Convite de Diriá",
    // se usa para crear dropdowns
    path: "#", 
    slug: "diria",
    children: diria,
  },
  {
    id: "4",
    label: "Créditos",
    path: 'creditos', 
    slug: "creditos",
    content: creditos,
    children: [],
  }
];

export default navigation;