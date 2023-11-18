
import Formulario from "./components/Formulario";
import ListadoEstudiantes from "./components/ListadoEstudiantes";
export default function App() {
  return (
    <div className='container mx-auto mt-20'>
      <div className='mt-12 md:flex'>
        <Formulario />
        <ListadoEstudiantes />
      </div>
    </div>
  )
}
