const creditos = [
    {
      slug: "creditos",
      title: "Créditos",
      content: {
        sections: [
          {
            type: "header",
            content: "Autor y cocreador rítmico",
          }, 
          {
            type: "div",
            content: `<p class="fs-2"><strong>Daniel Cuenca Alpízar</strong></p>`
          },  
          {
            type: "header",
            content: "Créditos a:",
          },     
          {
            type: "div",
            content: `
                      <!-- A partir de aquí el contenido se organiza en 2 columnas responsive -->
                      <div class="row mt-4">
                        <div class="col-12 col-sm-6 mb-3">
                          <h3></h3>
                          <h4>Patrocinador</h4>
                          <ul>
                            <li>Enrique Sánchez Sibaja</li>
                          </ul>
                          <h4 class="mt-3">Grabación de percusión y cocreadores rítmicos</h4>
                          <ul>
                            <li>Rafael Vargas Unfried</li>
                            <li>Juan Cuellar Aberle</li>
                            <li>Alexis Leal Prieto</li>
                          </ul>
                          <h4 class="mt-3">Grabación y premezcla</h4>
                          <ul>
                            <li>Draxe Ramírez Campos</li>
                          </ul>
                        </div>

                        <div class="col-12 col-sm-6 mb-3">
                          <h4 class="mt-3">Mezcla</h4>
                          <ul>
                            <li>Rafael Vargas Unfried</li>
                          </ul>
                          <h4 class="mt-3">Edición</h4>
                          <ul>
                            <li>Rafael Vargas Unfried</li>
                            <li>David Cuenca Alpízar</li>
                            <li>Edwin Calderón Quesada</li>
                          </ul>
                          <h4 class="mt-3">Desarrollo de Aplicación Web</h4>
                          <ul>
                            <li>Edwin Calderón Quesada</li>
                            <li>Dagoberto Meza Romero</li>
                          </ul>

                          <!-- Puedes añadir más bloques aquí en la columna derecha -->
                        </div>
                      </div>
                    </section>`,
          },
        ],
      },
    },
  ];
  
  export default creditos;