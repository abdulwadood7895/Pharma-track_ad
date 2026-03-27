import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className=" flex  items-center justify-center border-b gap-5 border-slate-200 bg-white px-4 py-3 shadow-sm">
        
      <NavLink className="text-lg font-semibold text-slate-600"> Home</NavLink>
      <NavLink className="text-sm text-slate-600"> Login</NavLink>
      <NavLink className="text-sm text-slate-600"> Logout</NavLink>
    </nav>
  )
}
