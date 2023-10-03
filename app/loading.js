import Image from "next/image";
export default function Loading() {
  return (
    <div>
      <Image
        width={400}
        height={400}
        className="w-full"
        alt="loading"
        src="/splash.webp"
      />
    </div>
  );
}
