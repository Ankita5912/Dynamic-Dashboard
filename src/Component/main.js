import { FiMenu } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { BsFillPeopleFill } from "react-icons/bs";
import { LuKanban } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { GrAnalytics } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Dashboard({ toggle, togglefunc }) {
  return (
    <div
      className={`h-full left-0 sm:w-[20%] w-[50%] bg-slate-700 z-50 px-6 py-4 text-white flex flex-col ${
        toggle === true ? "fixed" : "hidden"
      }`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Kanban</h1>
        <div>
          <FiMenu
            size={22}
            onClick={togglefunc}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      <div className="flex flex-col my-10">

        <div className="flex flex-col gap-3 mt-4">
          <h1 className="text-white/30">PAGES</h1>
          <div className="flex flex-col gap-3 pl-2">
            <Link to="/orders" className="flex gap-3 items-center">
              <AiOutlineShoppingCart/>
              <h1>Orders</h1>
            </Link>

            <Link to="/employee" className="flex gap-3 items-center">
              <GoPeople />
              <h1>Employees</h1>
            </Link>

            <Link to="/customer" className="flex gap-3 items-center">
              <BsFillPeopleFill/>
              <h1>Customers</h1>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-4">
          <h1 className="text-white/30">APPS</h1>
          <div className="flex flex-col gap-3 pl-2">
            <Link to="/kanban" className="flex gap-3 items-center">
              <LuKanban/>
              <h1>Kanban</h1>
            </Link>

            <Link to="/calender" className="flex gap-3 items-center">
              <SlCalender/>
              <h1>Calender</h1>
            </Link>

            <Link to="/analyser" className="flex gap-3 items-center">
              <GrAnalytics/>
              <h1>Analyser</h1>
            </Link>
            
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-4">

          <h1 className="text-white/30">ACCOUNT</h1>
          <div className="flex flex-col gap-3 pl-2">

            <div className="flex gap-3 items-center">
              <IoSettingsSharp/>
              <h1>Setting</h1>
            </div>
            
          </div>
        </div>



        <div className="flex flex-col gap-5 bottom-5 absolute">
          <div className="flex flex-col gap-3">

            <div className="flex gap-3 items-center">
              <BiLogOut size={20}/>
              <h1>Logout</h1>
            </div>
            
          </div>
        </div>
        

      </div>
    </div>
  );
}
