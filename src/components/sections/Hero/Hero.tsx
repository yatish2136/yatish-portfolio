import Container from "../../common/Container";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <HeroBackground />

      <Container className="relative z-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">

          <HeroContent />

          <HeroImage />

        </div>

        <HeroStats />

      </Container>
    </section>
  );
}