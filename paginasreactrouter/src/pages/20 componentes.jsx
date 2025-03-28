import Text from "./components/Text.jsx";
import Navbar from "./components/Navbar.jsx";
import Buttons from "./components/Buttons.jsx";
import Alert from "./components/Alert.jsx";
import Card from "./components/Card.jsx";
import Form from "./components/Form.jsx";
import List from "./components/List.jsx";
import Badges from "./components/Badges.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import Spinner from "./components/Spinner.jsx";
import Pages from "./components/Pages.jsx";
import Dropdown from "./components/Dropdown.jsx";
import Toast from "./components/Toast.jsx";
import Collapse from "./components/Collapse.jsx";
import Tooltip from "./components/Tooltip.jsx";
import Modal from "./components/Modal.jsx";
import Breadcrumb from "./components/Breadcrumb.jsx";
import Carousel from "./components/Carousel.jsx";
import Accordion from "./components/Accordion.jsx";
import Formcheck from "./components/Formcheck.jsx";
import Inputgroup from "./components/Inputgroup.jsx";
import React from "react"

function Componentes() {
  return (
    <>
      <Text tamaño={"titulo-principal"} texto={"20 componentes de Bootstrap"}/>
      <div className="container">
        <Text tamaño={"titulo"} texto={"1. Barra de navegación"}/>
        <Navbar/>
        <Text tamaño={"titulo"} texto={"2. Botones de diferentes colores"}/>
        <Buttons/>
        <Text tamaño={"titulo"} texto={"3. Alerta de Bootstrap"}/>
        <Alert/>
        <Text tamaño={"titulo"} texto={"4. Card de Bootstrap"}/>
        <Card/>
        <Text tamaño={"titulo"} texto={"5. Formulario de Bootstrap"}/>
        <Form/>
        <Text tamaño={"titulo"} texto={"6. Lista no ordenada de Bootstrap"}/>
        <List/>
        <Text tamaño={"titulo"} texto={"7. Insignias de Bootstrap"}/>
        <Badges/>
        <Text tamaño={"titulo"} texto={"8. Barra de progreso de Bootstrap"}/>
        <ProgressBar/>
        <Text tamaño={"titulo"} texto={"9. Spinner de Bootstrap"}/>
        <Spinner/>
        <Text tamaño={"titulo"} texto={"10. Paginación de Bootstrap"}/>
        <Pages/>
        <Text tamaño={"titulo"} texto={"11. Dropdown de Bootstrap"}/>
        <Dropdown/>
        <Text tamaño={"titulo"} texto={"12. Toast de Bootstrap"}/>
        <Toast/>
        <Text tamaño={"titulo"} texto={"13. Contenido colapsable de Bootstrap"}/>
        <Collapse/>
        <Text tamaño={"titulo"} texto={"14. Tooltip de Bootstrap"}/>
        <Tooltip/>
        <Text tamaño={"titulo"} texto={"15. Modal de Bootstrap"}/>
        <Modal/>
        <Text tamaño={"titulo"} texto={"16. Breadcrumb de Bootstrap"}/>
        <Breadcrumb/>
        <Text tamaño={"titulo"} texto={"17. Carrusel de Bootstrap"}/>
        <Carousel/>
        <Text tamaño={"titulo"} texto={"18. Acordeón de Bootstrap"}/>
        <Accordion/>
        <Text tamaño={"titulo"} texto={"19. Form check de Bootstrap"}/>
        <Formcheck/>
        <Text tamaño={"titulo"} texto={"20. Input group de Bootstrap"}/>
        <Inputgroup/>
      </div>
    </>
  )
}
export default Componentes