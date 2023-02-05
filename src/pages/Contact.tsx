import Formulaire from "../components/Formulaire";

function Contact() {
    return (
        <div className='col-xl-9 text-center'>
            <div className='m-xl-7 mt-5'>
                <h1 className="text-danger taillepoliceNom">Contact</h1>
                <h2 className="mt-xl-5 taillepolicetitre"><a className="text-info link-primary text-decoration-none"
                                                             href="https://github.com/ChronaMakenshi">
                    <span className="text-white">&lt;</span>Mon GitHub<span className="text-white">&gt;</span></a></h2>
                <h2 className="mt-xl-5 taillepolicetitre"><a className="text-info link-primary text-decoration-none"
                                                             href="https://www.linkedin.com/in/christophe-mestdagh-3a6002217/">
                    <span className="text-white">&lt;</span>Mon LinkedIn<span className="text-white">&gt;</span></a>
                </h2>
                <Formulaire/>
            </div>
        </div>
    );
}

export default Contact;