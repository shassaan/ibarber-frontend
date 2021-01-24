import { Form, FormControl, Navbar } from 'react-bootstrap';
const UserHeader = () => {
    return <Navbar bg="dark">
        <Navbar.Brand href="#home">
            {` `}
            
        </Navbar.Brand>
        
                <FormControl type="text" placeholder="Search"/>
            
    </Navbar>
}

export default UserHeader;