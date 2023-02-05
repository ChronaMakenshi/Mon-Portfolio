import CarouselRealisation from "../components/CarouselRealisation";

function Realisation() {
    return (
        <div className='col-xl-9'>
            <div className='m-5'>
                <h1 className="text-danger text-center taillepoliceNom">Mes Réalisations</h1>
                <CarouselRealisation/>
            </div>
        </div>
    );
}

export default Realisation;