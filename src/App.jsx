import Layout from "./Components/Layout";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Overview from "./Components/Overview";
import Class_wise from "./Components/Class_wise";
import Student_wise from "./Components/Student_wise";
import Teacher_wise from "./Components/Teacher_wise";
import Reports from "./Components/Reports";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<>Login</>}></Route>
          <Route path="/" element={<Layout />}>
            <Route path="/Overview" element={<Overview />} />
            <Route path="/Class-wise" element={<Class_wise />} />
            <Route path="/Student-wise" element={<Student_wise />} />
            <Route path="/Teacher-wise" element={<Teacher_wise />} />
            <Route path="/Reports" element={<Reports />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
