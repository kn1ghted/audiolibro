const creditos = [
    {
      slug: "creditos",
      title: "Créditos",
      content: {
        sections: [
          {
            type: "header",
            content: "Autor y compositor",
          }, 
          {
            type: "div",
            content: `<p class="fs-2"><strong>Daniel Cuenca Alpízar</strong></p>`
          },  
          {
            type: "header",
            content: "Créditos a",
          },     
          {
            type: "div",
            content: `
                      <!-- A partir de aquí el contenido se organiza en 2 columnas responsive -->
                      <div class="row mt-4">
                        <div class="col-12 col-sm-6 mb-3">                          
                          <h4>Productor general:</h4>
                          <ul>
                            <li>Enrique Sánchez Sibaja</li>
                          </ul>
                          <h4>Productores ejecutivos:</h4>
                          <ul>
                            <li>Andrea Rodríguez Antezana</li>
                            <li>María Fernanda Cortés Víquez/li>
                          </ul>
                          <h4 class="mt-3">Grabación de percusión y colaboración en el desarrollo rítmico:</h4>
                          <ul>
                            <li>Alexis Leal Prieto</li>
                            <li>Juan Cuellar Aberle</li>
                            <li>Rafael Vargas Unfried</li>
                          </ul>
                          <h4 class="mt-3">Grabación y premezcla:</h4>
                          <ul>
                            <li>Draxe Ramírez Campos</li>
                          </ul>
                        </div>

                        <div class="col-12 col-sm-6 mb-3">
                          <h4 class="mt-3">Mezcla:</h4>
                          <ul>
                            <li>Rafael Vargas Unfried</li>
                          </ul>
                          <h4 class="mt-3">Edición de audio:</h4>
                          <ul>
                            <li>David Cuenca Alpízar</li>
                            <li>Edwin Calderón Quesada</li>
                            <li>Rafael Vargas Unfried</li>
                          </ul>
                          <h4 class="mt-3">Desarrollo de Aplicación Web:</h4>
                          <ul>
                            <li>Edwin Calderón Quesada</li>
                            <li>Dagoberto Meza Romero</li>
                          </ul>

                          <!-- Puedes añadir más bloques aquí en la columna derecha -->
                        </div>
                      </div>
                    </section>`,
          },
          {
            type: "header",
            content: "Colaboradores en el desarrollo del proyecto",
          },
          {
            type: "div",
            content: `
                      <!-- A partir de aquí el contenido se organiza en 2 columnas responsive -->
                      <div class="row mt-4">
                        <div class="col-12 col-sm-6 mb-3">
                          <ul>
                            <li>Amanda Obregón Apéstegui</li>
                            <li>Carol Campos Benavides</li>
                            <li>David Cuenca Alpízar</li>
                            <li>Enrique Sánchez Sibaja</li>
                            <li>Kate Sibaja Castro</li>
                            <li>María José Esquivel Fuentes</li>
                            <li>Noah Cuenca Chacón</li>
                          </ul>
                        </div>

                        <div class="col-12 col-sm-6 mb-3">
                          <ul>
                            <li>Pablo Vargas Unfried</li>
                            <li>Rafael A. Vargas Retana</li>
                            <li>Silvia Vargas Unfried</li>
                            <li>Tito Fuentes Sauna</li>
                            <li>Vanessa Gómez MAroto</li>
                            <li>Xímena Obregón Apéstegui</li>
                            <li><strong>Sonámbulo Psicotropical</strong></li>
                          </ul>
                        </div>
                      </div>
                    </section>`,
          },
        ],
      },
    },
  ];
  
  export default creditos;