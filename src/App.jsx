import Loginform from "./Hooks/useState/loginform"
import Registrationform from "./Hooks/useState/registrationform"
import SimpleForm from "./Hooks/useState/simpleform"
import AssessmentForm from "./Hooks/useState/assessment"
import YouthSportsForm from "./Hooks/useState/youthsports"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"
import Toggal1 from "./Hooks/useState/thimchanger"
import Toggal from "./Hooks/useState/toggle";
import ThemeChanger from "./Hooks/useState/thimchanger"
const App = () => {
  return (
    <>
    <Loginform/>
    <Registrationform/>
    <SimpleForm/>
    <AssessmentForm/>
    <YouthSportsForm/>
    <ToastContainer/>
    <Toggal1/>
    <Toggal/>
    <ThemeChanger/>
     
    
    
    
   

    </>
  )
}

export default App