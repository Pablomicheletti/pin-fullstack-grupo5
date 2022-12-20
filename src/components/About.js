import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function about() {
  return (
    
     <Accordion>
       <Accordion.Item eventKey="0" style={{ width:800}}>
         <Accordion.Header >Sobre Nosotros</Accordion.Header>
         <Accordion.Body>
          Patrimonio natural de la humanidad desde 1984 y una de las 7 maravillas naturales del mundo desde 2011, el Parque Nacional Iguazú es un universo natural único. Lleno de vida, abundante vegetación y 275 saltos, entre ellos la Garganta del Diablo, cayendo a 82 metros de altura, es el lugar ideal para conectar con la naturaleza.
        
         </Accordion.Body>
       </Accordion.Item>
       <Accordion.Item eventKey="1" style={{ width:800}}>
         <Accordion.Header>Ubicacion</Accordion.Header>
         <Accordion.Body>
         Las Cataratas del Iguazú forman parte de Brasil y Argentina, 2 tercios de su extensión se encuentran en el lado argentino.

         </Accordion.Body>
       </Accordion.Item>
     </Accordion>
  );
}

export default about