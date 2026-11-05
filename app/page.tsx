import { FeaturedPhotos } from "@/components/home/featured-photos";
import { Hero } from "@/components/home/hero";
import { PhotographerIntro } from "@/components/home/photographer-intro";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPhotos />
      <PhotographerIntro />
    </>
  );
}
