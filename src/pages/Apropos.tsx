import Typed from 'react-typed';
import {motion} from "framer-motion";

const text = '"Christophe Mestdagh"'
function Apropos() {
    return (
        <div className='col-xl-9'>
            <div className='m-5 m-xl-7'>
                <h1 className="text-info taillepolicetitre">Bonjour, je m'appelle</h1>
                <div className="text-danger text-center taillepoliceNom"><Typed strings={[text]}
                    typeSpeed={200} />
                </div>
                <div className="">
                    <motion.h2 className="text-primary taillepoliceaproops"
                        initial={{ opacity: 0, y: -690 }}
                        animate={{ opacity: 1, y: 20 }}
                        transition={{
                            delay: 1,
                            type: "spring",
                            stiffness: 350,
                            damping: 200,

                        }} ><span className="text-white">&lt;</span>Infos<span className="text-white">&gt;</span></motion.h2>
                    <motion.p className="text-white taillepolice"
                        initial={{ opacity: 0, y: -587 }}
                        animate={{ opacity: 1, y: 20 }}
                        transition={{
                            delay: 1,
                            type: "spring",
                            stiffness: 350,
                            damping: 200
                        }}
                    >J'ai fait une reconversion professionnelle et j’ai obtenu le Titre Professionnel de Niveau 5 en Développeur Web et Web Mobile.
                        Avant j’étais dans l’électrotechnique. Je recherche une alternance en Développeur Symfony PHP ou Emploi et, en parallèle,
                        je me lance en Freelance.</ motion.p>
                    <motion.h2 className="text-primary taillepoliceaproops"
                        initial={{ opacity: 0, y: -531 }}
                        animate={{ opacity: 1, y: 20 }}
                        transition={{
                            delay: 2,
                            type: "spring",
                            stiffness: 350,
                            damping: 200
                        }} ><span className="text-white">&lt;</span>Compétences programmatiques<span className="text-white">&gt;</span></motion.h2>
                    <motion.ul className="text-white taillepolice "
                        initial={{ opacity: 0, y: -403 }}
                        animate={{ opacity: 1, y: 20 }}
                        transition={{
                            delay: 2,
                            type: "spring",
                            stiffness: 350,
                            damping: 200
                        }}>
                        <li>HTML/CSS/SCSS/Bootstrap</li>
                        <li>PHP/SYMFONY/LARAVEL</li>
                        <li>JavaScript/Typescript</li>
                        <li>React/Vue.js/Angular/Vite.js</li>
                        <li>MySQL/PostgreSQL/SQLite</li>
                        <li>Wordpress</li>
                    </motion.ul>
                    <motion.h2 className="text-primary taillepoliceaproops"
                        initial={{ opacity: 0, y: -349 }}
                        animate={{ opacity: 1, y: 20 }}
                        transition={{
                            delay: 3,
                            type: "spring",
                            stiffness: 350,
                            damping: 200
                        }} ><span className="text-white">&lt;</span>Compétences graphiques<span className="text-white">&gt;</span></motion.h2>
                    <motion.ul className="text-white taillepolice "
                        initial={{ opacity: 0, y: -293 }}
                        animate={{ opacity: 1, y: 20 }}
                        transition={{
                            delay: 3,
                            type: "spring",
                            stiffness: 350,
                            damping: 200
                        }}>
                        <li>Photoshop/illustrator</li>
                        <li>Figma/Adobe xD</li>
                    </motion.ul>
                    <motion.h2 className="text-primary taillepoliceaproops"
                               initial={{opacity: 0, y: -239}}
                               animate={{opacity: 1, y: 20}}
                               transition={{
                                   delay: 4,
                                   type: "spring",
                                   stiffness: 350,
                                   damping: 200
                               }}><span className="text-white">&lt;</span>Expériences<span
                        className="text-white">&gt;</span></motion.h2>
                    <motion.p className="text-white taillepolice "
                              initial={{opacity: 0, y: -205}}
                              animate={{opacity: 1, y: 20}}
                              transition={{
                                  delay: 4,
                                  type: "spring",
                                  stiffness: 350,
                                  damping: 200
                              }}>
                        Pour plus d’informations,
                        <a className="text-info link-primary text-decoration-none"
                           href="https://cv.mestdagh-christophe.ovh/">vous pouvez jeter un oeil à mon CV ici</a>
                    </motion.p>
                </div>
            </div>
        </div>
    );

}

export default Apropos;