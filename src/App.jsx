import { Routes, Route } from "react-router-dom";
import Optometry from "./Pages/optometry";
import DoctorList from "./Pages/DoctorList";
import Reading from "./Pages/Reading";
import ExaminationDoc from "./Pages/ExaminationDoc";
// import Diagnosis from "./Pages/Diagnosis";
import Diagnosis from "./components/Diagnosis";
import Procedure from "./components/Procedure";
import OtCounselling from "./components/OtCounselling";
import PrescribeMedi from "./components/PrescribeMedi";
import MedicinKit from "./components/MedicinKit";
import Instruciton from "./components/Instruction";
import CaseHistory from "./Pages/CaseHistory";
import Draw from "./Pages/Draw";
import DoctorWaitingList from "./components/DocWaitingList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Optometry />} />
      <Route path="/doctorsList" element={<DoctorList />} />
      <Route path="/DoctorWaitingList" element={<DoctorWaitingList/>}/>
      <Route path="/reading" element={<Reading />} />
      <Route path="/examinationDoc" element={<ExaminationDoc />} />
      <Route path="/diagnosis" element={<Diagnosis />} />
      <Route path="/procedure" element={<Procedure />} />
      <Route path="/otCounselling" element={<OtCounselling />} />
      <Route path="/prescribeMedi" element={<PrescribeMedi />} />
      <Route path="/medicinKit" element={<MedicinKit />} />
      <Route path="/instruction" element={<Instruciton />} />
      <Route path="/CaseHistory" element={<CaseHistory/>}/>
      <Route path="/Draw" element={<Draw/>}/>
    </Routes>
  );
}

export default App;
