import { Fragment } from "react";
let Navbar = () => {
    
    return (
        <div className="flex px-4 justify-between h-14 items-center bg-red-500">
            <div className="font-bold">Task Manager</div>
            <button className="rounded-2xl bg-orange-400 px-3 py-1 font-bold text-black cursor-pointer active:scale-90">New Task</button>
        </div>
    )
}

export default Navbar;