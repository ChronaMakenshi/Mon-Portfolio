// @ts-ignore
import Neuneu404 from "../assets/Neuneu_404.gif"

function error() {
    return (
        <div className='col-xl-9 text-center text-white mt-4'>
            <div className="">
                <h1 className="taillepoliceNom">ERREUR 404 : Page Non Trouvée</h1>
            </div>
            <div className="mb-5 taillepolicetitreRealisation mt-5 w-75 m-auto">
                <p>
                    Nous sommes désolé mais la page que vous cherchez n'est pas ou plus
                    disponible. Nous vous suggérons de vous rendre sur
                    <a className="text-white text-decoration-none" href="/"> la page
                        d'accueil </a>
                    du site ou d'effectuer une nouvelle recherche</p>
            </div>
            <div className="">
                <p><img className="w-25 h-25" src={Neuneu404} alt="error404"/></p>
            </div>
        </div>
    );
}

export default error;