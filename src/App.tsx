import Container from "./components/common/Container";
import Button from "./components/ui/Button";

export default function App() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Container className="flex min-h-screen flex-col items-center justify-center text-center">
        <p className="mb-4 text-sky-400">
          Portfolio 2026
        </p>

        <h1 className="mb-6 text-6xl font-bold">
          Yatish Balaji
        </h1>

        <p className="mb-10 max-w-2xl text-slate-400">
          Software Engineer • AI • Full Stack • Cloud
        </p>

        <Button>
          Coming Soon 🚀
        </Button>
      </Container>
    </main>
  );
}