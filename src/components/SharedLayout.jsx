import { Link, Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import StyledNavbar from "./StyledNavbar";

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar/>
        <Outlet/>
        <h3 className='navbar'>This is a footer</h3>
    </>

  );
};
export default SharedLayout;
