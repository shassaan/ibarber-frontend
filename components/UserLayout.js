import { Container } from "@material-ui/core";
import Footer from "./Footer/Footer";
import UserHeader from "./Header/UserHeader";

const UserLayout = props =>{
    return <>
        <UserHeader />
        {props.children}
        <Footer/>
    </>
}
export default UserLayout;