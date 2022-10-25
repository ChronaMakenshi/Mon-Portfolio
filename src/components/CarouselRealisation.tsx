import Carousel from 'react-bootstrap/Carousel';
import { realisationsList } from "../datas/realisationsList";

function CarouselRealisation() {
	return (
		<Carousel className="text-center pb-5">
			{realisationsList.map(realisationsList =>
				<Carousel.Item>
					<h3 className="text-primary taillepolicetitreRealisation p-3"><span className="text-white">&lt;</span>{realisationsList.name}<span className="text-white">&gt;</span></h3>
					<img
						className="d-block m-auto"
						src={realisationsList.image}
						width={realisationsList.width}
						height={realisationsList.height}
						alt={realisationsList.name}
					/>
					<h4 className="text-white p-2 taillepoliceaproops">{realisationsList.programme}</h4>
					<h5 className='taillepoliceaproops'><a className="text-info link-primary text-decoration-none" href={realisationsList.github}>GITHUB</a></h5>
				</Carousel.Item>
			)}
		</Carousel>
	);
}

export default CarouselRealisation;




