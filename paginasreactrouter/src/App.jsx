import {BrowserRouter as Router, Routes, Route} from 'react-router'

import Nav from './components/Nav.jsx'
import Componentes from "./pages/20 componentes.jsx"
import ProfileCard from "./pages/InformacionPersonal.jsx"
import Calculadora from "./pages/Calculadora.jsx"
import Todo from "./pages/Todo.jsx"
import Formulario from './pages/FormularioEstudiantes.jsx'


function App() {

  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Componentes/>}/>
        <Route path="/informacionpersonal" element={<ProfileCard/>}/>
        <Route path="/calculadora" element={<Calculadora/>}/>
        <Route path="/todolist" element={<Todo/>}/>
        <Route path="/formularioestudiantes" element={<Formulario/>}/>
      </Routes>
    </Router>    
    </>
  )
}
export default App