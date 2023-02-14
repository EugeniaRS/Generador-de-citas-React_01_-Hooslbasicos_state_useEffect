import { useState , useEffect} from "react"
import Header from "./componentes/Header"
import Formulario from "./componentes/Formulario"
import ListadoComponentes from "./componentes/ListadoComponentes"


function App() {
//Para el localStorage tenemos que sincronizar el arreglo de pacientes
//En localStorage no se pueden guardar arreglos, solo strings.
//Entonces hay que convertir ese arreglo y luego almacenarlo

  const [pacientes, setPacientes]=useState([]);
  const [paciente, setPaciente]=useState({});

  //Los useEffect se ejecutan en el orden en que los coloques 
  //No hay limite de useEffect
  //cuando le pases un array vacio  significa que se ejecuta una vez

  useEffect(() =>{
   //este useEffect va obtner lo que alla en el localStorage
   //parse convierte de un string a array
   const obtenerLS = () =>{
    const pacienteLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
   setPacientes( pacienteLS)
   }

   obtenerLS();

   //Lo que va sucerder es que va llamar la funcion obtnerLs Y DESPUES va cargar lo que contenga
  }, [])

  //Lo que se trata de hacer es escribir en localStorage cuando alla cmabios en pacientes
  useEffect( () =>{
  localStorage.setItem('pacientes',JSON.stringify(pacientes))

  },[pacientes]) // le decimos que cada que alla un cambio en pacientes ejecute el siguiente codigo

  //Para eliminar hay que identificarlo en el estado de pacientes
  const eliminarPaciente = (id) =>{
    //uso de filter() este metodo no muta el arreglo,csino  returna uno nuevo

    const pacientesActualizados= pacientes.filter( paciente =>  paciente.id !== id);
    setPacientes( pacientesActualizados)

  
  }


  return (
    <div className="container  mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
      <Formulario
       pacientes={pacientes}
      setPacientes={setPacientes}
      paciente={paciente}
      setPaciente={setPaciente}
      />
      <ListadoComponentes
      pacientes={pacientes}
      setPaciente={setPaciente}
      eliminarPaciente={eliminarPaciente}
      
      />
      </div>
  
    </div>
  )
}

export default App
