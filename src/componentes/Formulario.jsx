import {useState,useEffect} from 'react'
import Error from './Error';

const Formulario = ({pacientes, paciente, setPacientes, setPaciente}) => {
  //laf funcion que modifica SEtNombre 
  //para poder modificar el State conforme el ususario valla escrbiendo  se utiliza OnChange
  //el OnCHange es IGUAL a un eventlistener o como si registraramos un evento

  const[nombre, setNombre]= useState('');
  const[propietario, setPropietario]=  useState('');
  const[email, setEmail]=  useState('');
  const[fecha, setFecha]=  useState('');
  const[sintomas,setSintomas]= useState('');
  const[error,setError]=useState(false);


 useEffect(()=>{
  // una forma de comprobar si un objeto tiene algo
  if(Object.keys(paciente).length > 0 ){
   setNombre(paciente.nombre)
   setPropietario(paciente.propietario)
   setEmail(paciente.email)
   setFecha(paciente.fecha)
   setSintomas(paciente.sintomas)

  }
 },[paciente]) 

  const  generarId = () =>{
   const random =  Math.random().toString(36)
  const fecha = Date.now().toString(36);
  return fecha + random
  }

  const handleSubmit= (e) =>{
    e.preventDefault();
    //validacion del formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      console.log('Campo vacio')
      setError(true)
      return;
    }

    setError(false);
    //Se construye objeto que son los que va almacenar mi array[  ] Pacientes
    //objeto de paciente
     const  objetoPaciente= {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas
     }
    //Lo que hace el spreadOperator es copiar el objeto del arreglo ya existente
    // sin modificarlo y agregarle el siguiente objeto
    //gracias al  metodo inmutable (spreadOperator) nos generea un nuevo arreglo (objetoPaciente)
    // y al momento que se genra se almacena en setPacientes sin modificar elarreglo original

    if(paciente.id){
      //editando registro
      //this line le asigna el id de paciente al objeto de paciente
      objetoPaciente.id=paciente.id
      //Colocar un nuevo arraglo
      //se va iterar sobre todos los pacientes en este caso ( pacientes)
      //la variable temporal pacienteState.id nos va permitir ver en que registro estamos editando
      //como resultado nos retorna el objetoPaciente de lo contrario returna pacienteState el objeto actual sin modificacion
      const pacientesActualizados=pacientes.map(pacientesState => pacientesState.id ===paciente.id ? objetoPaciente : pacientesState)

      //map returna el arreglo nuevo 
      setPacientes(pacientesActualizados)
      setPaciente({})

    }else{
      //nuevo registro
      objetoPaciente.id=generarId();
      setPacientes([...pacientes, objetoPaciente]) 
    }

 

  //reiniciar form resetear
  setNombre('')
  setPropietario('')
  setEmail('')
  setFecha('')
  setSintomas('')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center '>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>Añade Pacientes y {' '} <span className='font-bold text-indigo-700 '>Administralos</span></p>
    
     <form 
     onSubmit={handleSubmit}
     className='bg-white shadow-md rounded-lg py-10 px-5 mb-12 mx-auto '>

      {error &&     <Error> Todos los campos deben de ser obligatorios!</Error>  }
{/*     Forma mas comun de pasar props {error && <Error mensaje= ' Todos los campos deben de ser obligatorios!'/> } */}


      <div className='mb-5'>
        <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
        <input
        id='mascota'
        type="text"
        placeholder='Nombre de la mascota'
        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
        value={nombre}
        onChange={ (e) => setNombre(e.target.value)}
        />
      </div>
      <div className='mb-5'>
        <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
        <input
        id='propietario'
        type="text"
        placeholder='Nombre de el propietario'
        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
        value={propietario}
        onChange={ (e) => setPropietario(e.target.value)}
        />
      </div>
      <div className='mb-5'>
        <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email </label>
        <input
        id='email'
        type="email"
        placeholder='Email de Propietario'
        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
        value={email}
        onChange={ (e) => setEmail(e.target.value)}
        />
      </div>
      <div className='mb-5'>
        <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Alta </label>
        <input
        id='alta'
        type="date"
        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
        value={fecha}
        onChange={ (e) => setFecha(e.target.value)}
        />
      </div>
      <div className='mb-5'>
        <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas </label>
        <textarea
        id='sintomas'
        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
        placeholder='Describe los sintomas'
        value={sintomas}
        onChange={ (e) => setSintomas(e.target.value)}
        />
      </div>
      <input
       type="submit"
       className='bg-indigo-600 w-full p-3 font-bold text-white uppercase hover:bg-indigo-700 cursor-pointer transition-all'
       value={paciente.id ?  'Editar paciente' :'Agregar Paciente'}
       />

     </form>



    </div>
  )
}

export default Formulario