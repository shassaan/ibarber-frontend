import { Container } from "@material-ui/core";
import Footer from "./Footer/Footer";
import UserHeader from "./Header/UserHeader";

const UserLayout = props =>{
    return <Container>
        <UserHeader />
        {props.children}
        <Footer/>
    </Container>
}
export default UserLayout;