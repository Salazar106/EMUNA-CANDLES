import { title } from "@/components/primitives";
import Image from 'next/image';
import "@/styles/about.css"


export default function AboutPage() {
	return (
		<div className="flex flex-wrap justify-center ">
			{/* <h1 className={title()}>About us</h1> */}
			<div className="flex items-center justify-center gap-20 ">
				<div>
					<h1 className={title()}>OUR HISTORY</h1>
					<p className="mt-5">
						Emuna Candles is more than just a brand; it's a story of courage, passion, and creativity that began with the Martinez family's journey from the lush landscapes of Colombia to the bustling city of Toronto, Canada. Inspired by the rich traditions of candle-making and a desire to infuse spaces with positive energy, Emuna was born in 2021.
					</p>
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
					<h1 className={title()}>Why Choose Emuna?</h1>
					<p>
					Authenticity: Our candles are handcrafted with love and expertise, reflecting the heritage and dedication of our Colombian roots.
Quality: We use only the finest beeswax and natural ingredients, ensuring a clean and long-lasting burn for your enjoyment.
Energy Infusion: Each candle is designed to not only brighten your space but also to promote positivity and tranquility, creating a sanctuary wherever it is lit.
Join the Emuna Family
By choosing Emuna Candles, you are not just purchasing a product; you are embracing a story of resilience and innovation. Let our candles be a beacon of light and energy in your life's journey.
					</p>
				</div>
			</div>

			<div className="flex items-center justify-center gap-20 ">
				<div>
					<h1 className={title()}> OUR VISION</h1>
					<p className="mt-5">At Emuna, we believe in the power of light to transform environments and uplift spirits. Our candles go beyond illumination; they are crafted with intention, combining pure beeswax and carefully selected essential oils to create a sensory experience that nurtures the soul.</p>
				</div>
				<div className="relative">
					<Image src="/image/Imagen3.png" alt="Ejemplo" width={900} height={400} />
				</div>
			</div>
		</div>
	);
}
