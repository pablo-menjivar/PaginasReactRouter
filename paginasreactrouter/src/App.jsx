import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Nav from './components/Nav.jsx'
import Componentes from "./pages/20 componentes.jsx"
import InformacionPersonal from "./pages/InformacionPersonal.jsx"
import Calculadora from "./pages/Calculadora.jsx"
import Todo from "./pages/Todo.jsx"
import Form from "./pages/FormularioEstudiantes.jsx"

function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Componentes/>}/>
        <Route path="/informacionpersonal" element={<InformacionPersonal/>}/>
        <Route path="/calculadora" element={<Calculadora/>}/>
        <Route path="/todolist" element={<Todo/>}/>
        <Route path="/formularioestudiantes" element={<Form/>}/>
      </Routes>
    </Router>    
    </>
  )
}
export default App