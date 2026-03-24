import Counter from "@/components/Counter/Counter";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Redux + Saga Demo</h1>
      <Counter />
    </div>
  );
}
