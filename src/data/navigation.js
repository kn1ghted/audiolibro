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
  },
  {
    id: "3",
    label: "Convite de Diriá",
    // se usa para crear dropdowns
    path: "#", 
    slug: "diria",
    children: diria,
  },
  /*{
    id: "4",
    label: "Testing",
    // se usa para crear dropdowns
    path: "#", 
    slug: "test-audios",
    children: test
  }*/
];

export default navigation;