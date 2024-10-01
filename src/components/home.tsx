import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "./ui/carousel";
import { FotoLDKP1, FotoPDHM2, FotoPDHM1, FutsalHMI, PkkmbHima } from '@/assets';
import Autoplay from 'embla-carousel-autoplay';

export default function HomeContent(): JSX.Element {
	const list_photo = [FotoLDKP1.src, FotoPDHM1.src, FotoPDHM2.src, FutsalHMI.src, PkkmbHima.src]

	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);
	
	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<div className="w-full px-4 md:px-8 lg:px-16 xl:px-52 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 max-lg:py-8">
			<div className="flex flex-col gap-6 w-full lg:w-1/2">
				<p className="font-open-sans font-semibold py-2 px-4 md:px-8 w-fit bg-orange-600 rounded-2xl text-white text-sm md:text-base">
					Tahun 2024/2025
				</p>
				<h1 className="font-open-sans font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
					HIMPUNAN MAHASISWA UNIS TEKNIK INFORMATIKA
				</h1>
				<p className="font-open-sans font-semibold text-sm md:text-base">
					HIMAUNTIKA adalah suatu organisasi mahasiswa Teknik Informatika yang
					bergaris koordinasi vertikal BEM FAKULTAS TEKNIK dan bertujuan untuk
					meningkatkan kualitas serta kreatifitas mahasiswa Teknik Informatika
					dalam bidang komputerisasi.
					<br /><br />
					Himpunan Mahasiswa Program Studi Teknik Informatika didirikan pada tanggal 03 Maret 2015 bertempat di Universitas Islam Syekh-Yusuf Tangerang.
				</p>
				<div>
					<button className="bg-blue-600 py-2 px-8 md:px-12 text-white font-bold text-sm font-open-sans uppercase rounded-2xl hover:bg-blue-500 transition-colors duration-300">
						Join Us
					</button>
				</div>
			</div>
			<div className="max-w-[630px] lg:w-1/2 w-full">
				<Carousel
					setApi={setApi}
					plugins={[
						Autoplay({
							delay: 2000,
							stopOnInteraction: true,
							stopOnMouseEnter: true
						})
					]}
				>
					<CarouselContent>
						{list_photo.map((v, i) => (
							<CarouselItem key={i}>
								<div className="p-1">
									<Card>
										<CardContent className="flex items-center justify-center p-0">
											<img
												src={v}
												alt={`HIMAUNTIKA activity ${i + 1}`}
												className="w-full h-auto aspect-[3/2] object-cover rounded-lg shadow-md"
											/>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="max-lg:hidden" />
					<CarouselNext className="max-lg:hidden" />
				</Carousel>
				<p className="py-2 text-center text-sm text-muted-foreground">Slide {current} of {count}</p>
			</div>
		</div>
	)
}