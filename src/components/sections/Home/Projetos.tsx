"use client";
import OrderAnimateContents from "@/components/animations/OrderAnimateContents";
import Container from "@/components/ui/Container";
import * as React from "react";

// type IHomeProjetosProps = {};

const HomeProjetos: React.FunctionComponent = (props) => {
	const randArray = Array(1)
		.fill("")
		.map((_, i) => i);

	return (
		<Container height="dvh" className="py-20" flex="col-start">
			<h2 className="text-4xl font-bold text-start w-full">Projetos</h2>
			<p className="text-lg text-start w-full">
				Alguns dos nossos projetos juntos
			</p>

			<OrderAnimateContents
				className="w-full mt-20 carousel h-fit max-h-none"
				contents={randArray.map((e) => {
					return {
						delay: 0.1,
						content: <CardProjeto i={e} key={`card_${e}`} />,
					};
				})}
			/>
		</Container>
	);
};

function CardProjeto({ i }: { i: number }) {
	return (
		<div className="card bg-base-100 shadow-xl w-[80vw] max-w-[400px] carousel-item p-5 h-auto box-border">
			<figure className="w-full h-auto aspect-video bg-gray-300 animate-pulse rounded-lg" />
			<div className="card-body">
				<h2 className="card-title">
					Parttida! <div className="badge badge-secondary">NEW</div>
				</h2>
				<p>Esse é um dos caças</p>
				<div className="card-actions justify-end">
					<div className="card-actions justify-end">
						<div className="badge badge-outline badge-sm">NextJs</div>
						<div className="badge badge-outline badge-sm">NodeJs</div>
						<div className="badge badge-outline badge-sm">TailwindCss</div>
						<div className="badge badge-outline badge-sm">Prisma</div>
						<div className="badge badge-outline badge-sm">Express</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeProjetos;
