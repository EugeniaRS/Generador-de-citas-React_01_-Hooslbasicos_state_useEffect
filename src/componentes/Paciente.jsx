import React from "react";

const Paciente = ({ paciente, setPaciente,eliminarPaciente }) => {
  
  const { nombre, propietario, email, fecha, sintomas, id} = paciente;
 //funcion
  const handleElimminar = () => {
    const  resp= confirm('Deseas eliminar este paciente')
    if(resp){
      eliminarPaciente(id);

    }
  }
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-7 uppercase">
        Nommbre: <span className="font-normal  normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-7 uppercase">
        Propietario:{" "}
        <span className="font-normal  normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-7 uppercase">
        Email: <span className="font-normal  normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-7 uppercase">
        Fecha Alta: <span className="font-normal  normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-7 uppercase">
        Sintomas: <span className="font-normal  normal-case">{sintomas}</span>
      </p>

      <div className="flex  justify-between mt-10">
        <button
          className="py-2 px-10  bg-indigo-500  hover:bg-indigo-700  text-white font-bold uppercase  rounded-xl "
          type="button"
          onClick={() => setPaciente(paciente)}
       
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10  bg-red-500 hover:bg-red-300 uppercase text-white font-bold rounded-xl"
         onClick={ handleElimminar}        
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
