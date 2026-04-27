import Counter from "@/components/Counter/Counter";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Redux + Saga Demo</h1>
      <Image
        src="/images/cat.jpg"
        alt="Hero background"
        width={200}
        height={300}
        preload
        loading="eager"
      />
      <Counter />
    </div>
  );
}
