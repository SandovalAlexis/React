import "bootstrap/dist/css/bootstrap.css";

function Cabecera(props){
   return <div className="alert alert-info text-center mb-0"> 
         <h1>
            &#127813;
            {props.titulo}
            &#127813;
          </h1>
   </div> 
}

export default Cabecera;
