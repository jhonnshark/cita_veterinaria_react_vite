/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import Paciente from './Paciente';

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  // useEffect(() => {
  //   pacientes.length > 0 && console.log('Nuevo Paciente.', pacientes);
  // }, [pacientes]);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mt-10">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-2xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{' '}
            <span className="text-indigo-600 text-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-2xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes{' '}
            <span className="text-indigo-600 text-bold">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
