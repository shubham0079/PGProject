import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Home from './home'
import State from './component/state'
import LL from './component/ll'
import Instruction from './component/instruction'
import Category from './component/Category'
import Info from './component/info'
import RegDoctor from './component/RegDoctor'
import FindDoctor from './component/FindDoctor'
import RegSchool from './component/RegSchool'
import InstructionSchool from './component/InstrctionSchool'
import FindDrivingS from './component/FindDrivingS'
import VideoPlayer from './component/videoll'
import TutorialLL from './component/TutorialLL'
import SampleQuestion from './component/sampleQuestion'
import Marathi from './component/marathi'
import English from './component/english'
import LLTest from './component/LLTest'
import PdfViewer from './component/LLTest'
import DL from './component/dl'
import Footer from './component/footer'
import Header from './component/header'
import MotorVehiclesAct from './component/MoterVA'
import Mva1 from './component/mva1'
import Mva2 from './component/mva2'
import Mva3 from './component/mva3'
import DashBoard from './component/Dashboard'
import Rsc from './component/Rsc'
import Rsc1 from './component/Rsc1'
import Rsc2 from './component/Rsc2'
import Rsc3 from './component/Rsc3'
import Rsc4 from './component/Rsc4'
import RoadSafetyvideo from './component/RoadSafetyvideo'
import RoadSafetyvideo1 from './component/RoadSafetyvideo1'
import FileUpload from './component/FileUpload'
import CheckboxLL from './component/llcheckbox'
import Acknowledgement from './component/acknowledgement'
import PhotoSign from './component/photo-sign'
import SlotBooking from './component/llslot'
import FAQ from './component/FAQ'
import FAQ1 from './component/FAQ1'
import FAQ2 from './component/FAQ2'
import FAQ3 from './component/FAQ3'
import FAQ4 from './component/FAQ4'
import Form3 from './component/form3'
import Contactus from './component/contactus'
import Feedback from './component/Feedback'
import InstructionDL from './component/instructionDL'
import DLDetails from './component/dldetails'
import DLInfo from './component/dlInfo'
import TutorialDL from './component/TutorialDL'
import Quiz from './component/quiz'





function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup></Signup>}>HELLO</Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/state' element={<State></State>}></Route>
      <Route path='/navigationbar' element={<Navigator></Navigator>}></Route>
      <Route path='/ll' element={<LL></LL>}></Route>
      <Route path='/instruction' element={<Instruction></Instruction>}></Route>
      <Route path='/Category' element={<Category></Category>}></Route>
      <Route path='/info' element={<Info></Info>}></Route>
      <Route path='/regdoctor' element={<RegDoctor></RegDoctor>}></Route>
      <Route path='/finddoctor' element={<FindDoctor></FindDoctor>}></Route>
      <Route path='/finddrivings' element={<FindDrivingS></FindDrivingS>}></Route>
      <Route path='/RegSchool' element={<RegSchool></RegSchool>}></Route>
      <Route path='/InstrctionSchool' element={<InstructionSchool></InstructionSchool>}></Route>
      <Route path='/videoll' element={<VideoPlayer></VideoPlayer>}></Route>
      <Route path='/tutorialll' element={<TutorialLL></TutorialLL>}></Route>
      <Route path='/samplequestion' element={<SampleQuestion></SampleQuestion>}></Route>
      <Route path='/marathi' element={<Marathi></Marathi>}></Route>
      <Route path='/english' element={<English></English>}></Route>
      <Route path='/lltest' element={<LLTest></LLTest>}></Route>
      <Route path='/dl' element={<DL></DL>}></Route>
      <Route path='/footer' element={<Footer></Footer>}></Route>
      <Route path='/header' element={<Header></Header>}></Route>
      <Route path='/moterva' element={<MotorVehiclesAct></MotorVehiclesAct>}></Route>
      <Route path='/mva1' element={<Mva1></Mva1>}></Route>
      <Route path='/mva2' element={<Mva2></Mva2>}></Route>
      <Route path='/mva3' element={<Mva3></Mva3>}></Route>
      <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
      <Route path='/rsc' element={<Rsc></Rsc>}></Route>
      <Route path='/rsc1' element={<Rsc1></Rsc1>}></Route>
      <Route path='/rsc2' element={<Rsc2></Rsc2>}></Route>
      <Route path='/rsc3' element={<Rsc3></Rsc3>}></Route>
      <Route path='/rsc4' element={<Rsc4></Rsc4>}></Route>
      <Route path='/rsvideo' element={<RoadSafetyvideo></RoadSafetyvideo>}></Route>
      <Route path='/rsvideo1' element={<RoadSafetyvideo1></RoadSafetyvideo1>}></Route>
      <Route path='/checkboxll' element={<CheckboxLL></CheckboxLL>}></Route>
      <Route path='/acknowledgement' element={<Acknowledgement></Acknowledgement>}></Route>
      <Route path='/photosign' element={<PhotoSign></PhotoSign>}></Route>
      <Route path='/docupload' element={<FileUpload></FileUpload>}></Route>
      <Route path='/llslot' element={<SlotBooking></SlotBooking>}></Route>
      <Route path='/FAQ' element={<FAQ></FAQ>}></Route>
      <Route path='/FAQ1' element={<FAQ1></FAQ1>}></Route>
      <Route path='/FAQ2' element={<FAQ2></FAQ2>}></Route>
      <Route path='/FAQ3' element={<FAQ3></FAQ3>}></Route>
      <Route path='/FAQ4' element={<FAQ4></FAQ4>}></Route>
      <Route path='/Form3' element={<Form3></Form3>}></Route>
      <Route path='/contactus' element={<Contactus></Contactus>}></Route>
      <Route path='/feedback' element={<Feedback></Feedback>}></Route>
      <Route path='/instructiondl' element={<InstructionDL></InstructionDL>}></Route>
      <Route path='/dldetails' element={<DLDetails></DLDetails>}></Route>
      <Route path='/dlinfo' element={<DLInfo></DLInfo>}></Route>
      <Route path='/tutorialdl' element={<TutorialDL></TutorialDL>}></Route>
      <Route path='/quiz' element={<Quiz></Quiz>}></Route>
      


    </Routes>
    </BrowserRouter>
    
    
  )
}

export default App
