import { title } from "@/components/primitives";
import Image from 'next/image';
import "@/styles/about.css"


export default function AboutPage() {
	return (
		<div className="flex flex-wrap justify-center ">
			{/* <h1 className={title()}>About us</h1> */}
			<div className="flex items-center justify-center gap-20 ">
				<div>
					<h1 className={title()}>About us</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem architecto atque neque? Molestias eveniet ut, modi necessitatibus dolor quia vero voluptates quis qui impedit ullam delectus cupiditate illum reprehenderit libero.</p>
				</div>
				<div className="relative">
					<Image src="/image/Imagen1.png" alt="Ejemplo" width={900} height={400} />
				</div>
			</div>

			<div className="flex items-center justify-center gap-20 ">
				<div className="relative">
					<Image src="/image/Imagen2.png" alt="Ejemplo" width={900} height={400} />
				</div>
				<div>
					<h1 className={title()}>Mision</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem architecto atque neque? Molestias eveniet ut, modi necessitatibus dolor quia vero voluptates quis qui impedit ullam delectus cupiditate illum reprehenderit libero.</p>
				</div>
			</div>

			<div className="flex items-center justify-center gap-20 ">
				<div>
					<h1 className={title()}>Vision</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem architecto atque neque? Molestias eveniet ut, modi necessitatibus dolor quia vero voluptates quis qui impedit ullam delectus cupiditate illum reprehenderit libero.</p>
				</div>
				<div className="relative">
					<Image src="/image/example.jpg" alt="Ejemplo" width={900} height={400} />
				</div>
			</div>
		</div>
	);
}
