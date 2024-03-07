import { Outlet, Link } from "react-router-dom";
import NavigationBar from "../Navbar/navbar.jsx";

export default function Root() {
    return (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%'}}>
            <NavigationBar />
            <Outlet />
          </div>
        </>
    );
}