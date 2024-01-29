import OrderAnimateContents from "@/components/animations/OrderAnimateContents";
import TextTypeAnimate from "@/components/animations/TextTypeAnimate";
import Container from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";
import * as React from "react";

const HomeIntro: React.FC = () => {
	return (
		<Container height="dvh" className="relative" flex="col-center">
			<div className="mockup-code rounded-lg bg-[#0b0b0b] text-white ">
				<OrderAnimateContents
					contents={[
						{
							content: (
								<pre key={"1"} data-prefix={"$"}>
									<code>
										<TextTypeAnimate
											content="sudo exec YouAreGay()"
											delay={0.05}
										/>
									</code>
								</pre>
							),
							delay: 0.1,
						},
						{
							content: (
								<pre key={"2"} data-prefix={"$"}>
									<code className="text-green-600">true</code>
								</pre>
							),
							delay: 1.8,
						},
					]}
				/>
			</div>
			<p className="text-xl text-center absolute bottom-5">
				<ChevronDown size={25} />
			</p>
		</Container>
	);
};

export default HomeIntro;
