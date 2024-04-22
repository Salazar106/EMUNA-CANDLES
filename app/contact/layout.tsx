export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-2 md:py-10">
			<div className="inline-block text-center px-0 md:px-10 lg:px-20 justify-center">
				{children}
			</div>
		</section>
	);
}
