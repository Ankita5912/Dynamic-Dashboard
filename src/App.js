import { useState } from "react";
import Dashboard from "./Component/main";
import Navbar from "./Component/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employee from "./Pages/Employee";
import Customer from "./Pages/Customer";
import OrderPage from "./Pages/Orders";
import KanbanBoard from "./Pages/Kanban";
import Calendar from "./Pages/Calender";
import OrdersPieChart from "./Pages/Analyzer";

function App() {
  const [DashToggle, setDashToggle] = useState(false); // start closed on small screens

  const menuToggle = () => {
    setDashToggle(!DashToggle);
  };

  return (
    <BrowserRouter>
      <div className="flex h-screen w-screen bg-gray-100 overflow-hidden">
        {/* Sidebar */}
        <Navbar togglefunc={menuToggle} />
        {/* Main content area */}
        <div className={`relative grid w-screen overflow-hidden ${DashToggle ? "grid-cols-5" :"grid-cols-1"}`}>

          <div className={`relative  ${
           DashToggle === true ? "fixed" : "hidden"
            }`}>
            <Dashboard toggle={DashToggle} togglefunc={menuToggle} />
          </div>

          <main className="relative overflow-auto col-span-4 mt-16 p-6">
            <Routes>
              <Route path="/employee" element={<Employee />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/orders" element={<OrderPage />} />
              <Route path="/kanban" element={<KanbanBoard />} />
              <Route path="/calender" element={<Calendar />} />
              <Route path="/analyser" element={<OrdersPieChart/>}/>
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
