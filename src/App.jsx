import { Routes, Route } from "react-router-dom";
import Optometry from "./Pages/optometry";
import DoctorList from "./Pages/DoctorList";
import Reading from "./Pages/Reading";
import Profile from "./Pages/Profile";
// import <ExaminationDoc></ExaminationDoc> from "./components/Examination";
import ExaminationDoc from "./Pages/ExaminationDoc";
import Diagnosis from "./Pages/Diagnosis";
import Procedure from "./Pages/Procedure";
import OtCounselling from "./Pages/OtCounselling";
import PrescribeMedi from "./Pages/PrescribeMedi";
import MedicinKit from "./Pages/MedicinKit";
// import Instruciton from "./Pages/Instruction";
import Instruciton from "./Pages/Instruction";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Optometry />} />
      <Route path="/doctors" element={<DoctorList />} />
      <Route path="Reading" element={<Reading/>}/>
      <Route path="Profile" element={<Profile/>}/>
      <Route path="ExaminationDoc" element={<ExaminationDoc/>}/>
      <Route path="Diagnosis" element={<Diagnosis/>}/>
      <Route path="Procedure" element={<Procedure/>}/>
      <Route path="OtCounselling" element={<OtCounselling/>}/>
      <Route path="PrescribeMedi" element={<PrescribeMedi/>}/>
      <Route path="MedicinKit" element={<MedicinKit/>}/>
      {/* <Route path="Instruction" element={<Instruciton/>}/> */}
      <Route path="Instruciton" element={<Instruciton/>}/>
    </Routes>
  );
}

export default App;
