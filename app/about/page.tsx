"use client"
import { Image } from "@nextui-org/react";
import { motion, useInView } from "framer-motion";


export default function AboutPage() {
	
	const title=`Welcome to Emuna Candles, where tradition meets
	 innovation, and light blends with energy to create moments 
	 of warmth and harmony in your life.`

	const story = `Emuna Candles is more than just a brand;
	 it's a story of courage, passion, and creativity that began 
	 with the Martinez family's journey from the lush landscapes 
	 of Colombia to the bustling city of Toronto, Canada. Inspired
	  by the rich traditions of candle-making and a desire to 
	  infuse spaces with positive energy, Emuna was born in 2021.`

	const vision = `At Emuna, we believe in the power of light to 
	transform environments and uplift spirits. Our candles go beyond 
	illumination; they are crafted with intention, combining pure 
	beeswax and carefully selected essential oils to create a sensory 
	experience that nurtures the soul.`

	const Authenticity=`Our candles are handcrafted with love and expertise,
	 reflecting the heritage and dedication of our Colombian roots.`

	const Quality=`We use only the finest beeswax and natural ingredients, 
	ensuring a clean and long-lasting burn for your enjoyment.`

	const EnergyInfusion=`Each candle is designed to not only brighten your 
	space but also to promote positivity and tranquility, creating a sanctuary
	wherever it is lit.
	Join the Emuna Family by choosing Emuna Candles, you are not just purchasing
	 a product; you are embracing a story of resilience and innovation. Let our 
	 candles be a beacon of light and energy in your life's journey.`
	return (
		<div>
			<motion.h1
				initial={{ opacity: 0, y: "-100%" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="text-[18px] md:text-[25] text-primary mb-5 font-bold"
			>
				{title}
			</motion.h1>

			<div className="flex flex-wrap justify-center gap-20">
				<div className="flex items-center justify-center gap-20 ">
					<motion.div 
						initial={{ opacity: 0, x: "-100%" }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
					>
						<h1 className="text-3xl mb-4 font-bold text-primary">OUR STORY</h1>
						<p className=""> {story} </p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: "100%" }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
						className="hidden md:block relative"
					 >
						<Image isZoomed src="/imgs/Imagen1.png" alt="Ejemplo" width={900} height={400} />
					</motion.div>
				</div>

				<div className="flex items-center justify-center gap-20 ">
					<motion.div 
						initial={{ opacity: 0, x: "-100%" }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
						className=" hidden md:block relative"
					>
						<Image src="/imgs/Imagen2.png" alt="Ejemplo" width={900} height={400} />
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: "100%" }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
					>
						<h1 className="text-3xl mb-4 font-bold text-primary">Why Choose Emuna?</h1>
						<p>
							<strong className="text-primary">Authenticity:</strong> {Authenticity}
						</p>
						<p>
							<strong className="text-primary">Quality:</strong> {Quality}
						</p>
						<p>
							<strong className="text-primary">Energy Infusion:</strong> {EnergyInfusion}
						</p>

					</motion.div>
				</div>

				<div className="flex items-center justify-center gap-20 ">
					<motion.div
						initial={{ opacity: 0, x: "-100%" }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
					>
						<h1 className="text-3xl mb-4 font-bold text-primary">VISION</h1>
						<p className=""> {vision} </p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: "100%" }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
						className="hidden md:block relative"
					>
						<Image src="/imgs/Imagen3.png" alt="Ejemplo" width={900} height={400} />
					</motion.div>
				</div>
			</div>
		</div>
	);
}
