import Footer from "./Footer/Footer";
import UserHeader from "./Header/UserHeader";

const UserLayout = props =>{
    return <div className="container-fluid">
        <UserHeader />
        {props.children}
        <Footer/>
    </div>
}
export default UserLayout;