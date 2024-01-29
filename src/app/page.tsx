import Header from "@/components/sections/Header";
import HomeApresentacao from "@/components/sections/Home/Apresentacao";
import HomeIntro from "@/components/sections/Home/Intro";
import HomeProjetos from "@/components/sections/Home/Projetos";

export default function Home() {
	return (
		<main className="flex min-h-dvh flex-col items-center justify-start ">
			<Header />
			<HomeIntro />
			<HomeApresentacao />
			<HomeProjetos />
		</main>
	);
}
