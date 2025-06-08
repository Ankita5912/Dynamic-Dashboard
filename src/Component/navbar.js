import { FiMenu } from "react-icons/fi";
import { GrSearch } from "react-icons/gr";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiDark } from "react-icons/ci";
import { useState } from "react";
import Notification from "./notification";

export default function Navbar({ togglefunc }) {
  
  const [notification, setnotification] = useState(false);

  return (
    <div className="h-16 shadow-md bg-white fixed w-full z-30 p-4 flex justify-between items-center">

      <div className="flex gap-4 items-center">
        <div><FiMenu size={22} onClick={togglefunc} style={{ cursor: "pointer" }}/></div>
        <h1 className="text-lg font-semibold">Kanban</h1>
      </div>

      <div className="sm:flex relative border h-10 w-96 md:px-3 md:py-5 items-center rounded-md border-black/15 hidden ">
        <input
        type="text"
          className="w-full placeholder-opacity-35 font-Manrope text-base font-medium outline-0 px-6"
          placeholder="Search..."
          name="task"
        />
          <button className="text-black absolute" style={{ cursor: "pointer" }}>
            <GrSearch size={20} />
          </button>
        
      </div>



      <div className="flex gap-5 items-center">
        <div className=""><CiDark size={24}/></div>
        <div onMouseEnter={() => { setnotification(!notification) }}  onMouseDown={() => { setnotification(!notification) }}><IoNotificationsOutline size={24} />{notification ? <Notification/> :<></>}</div>
        <div className="rounded-full border border-black/10 w-8 h-8"></div>
      </div>
    </div>
  );
}