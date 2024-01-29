"use client";
import Container from "@/components/ui/Container";
import * as React from "react";

import cn from "@/utils/cn";
import { motion, useInView } from "framer-motion";

const HomeApresentacao: React.FC = () => {
	const [sas, setSas] = React.useState("");
	const refDiv = React.useRef<HTMLDivElement>(null);
	const isInView = useInView(refDiv, { amount: 0.9 });

	const ArrayM = Array(7)
		.fill("")
		.map((_, i) => i);

	React.useEffect(() => {
		if (isInView) {
			setSas("flex-row");
		} else {
			setSas("flex-row");
		}
	}, [isInView]);

	return (
		<Container
			customRef={refDiv}
			height="dvh"
			className={cn(
				"py-20 carousel gap-3  justify-start flex-row-reverse",
				sas,
			)}
			flex="row-center"
		>
			{ArrayM.map((i) => (
				<motion.div
					key={`card_${i}`}
					layout
					className="card bg-base-100 shadow-xl w-[80vw] max-w-[400px] carousel-item p-5"
				>
					<figure className="w-full h-auto aspect-video bg-gray-300 animate-pulse rounded-lg" />
					<div className="card-body">
						<h2 className="card-title">Caça numero {i + 1}!</h2>
						<p>Esse é um dos caças</p>
						<div className="card-actions justify-end">
							<button
								type="button"
								className="btn btn-primary h-fit min-h-fit py-3 rounded-md"
							>
								Ver mais
							</button>
						</div>
					</div>
				</motion.div>
			))}
		</Container>
	);
};

export default HomeApresentacao;
