import Nav from 'react-bootstrap/Nav';
import {motion} from "framer-motion";


function Navbar() {
    return (
        <motion.div
            className='col-xl-3 border border-2 border-white d-flex flex-column align-items-center cadre text-xl-center cadre'
            initial={{x: -550}}
            animate={{x: 0}}
            transition={{
                type: "spring",
                stiffness: 480,
                damping: 200
            }}
        >
            <Nav defaultActiveKey="/" className="flex-xl-column taille-policenav align-items-center d-xl-block h-100">
                <Nav.Link className='text-white link-info ' href="/">A propos</Nav.Link>
                <Nav.Link className='text-white link-info' href="/Realisation" eventKey="link-1">Réalisations</Nav.Link>
                <Nav.Link className='text-white link-info' href="/Contact" eventKey="link-2">Contact</Nav.Link>
            </Nav>
            <h6 className='text-light d-none d-xl-block'>Christophe Mestdagh - Copyright 2022</h6>
        </ motion.div>
    );
}

export default Navbar;