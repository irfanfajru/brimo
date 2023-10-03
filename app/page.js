import Image from "next/image";
import FastMenu from "./components/fastmenu";
import LoginButton from "./components/loginbutton";
import FaceId from "./components/faceid";

export default function Home() {
  return (
    <main className="bg-white w-screen h-screen">
      <div className="flex justify-center">
        <Image
          width={400}
          height={400}
          className="w-full md:w-auto"
          alt="login image"
          src="/login-image.png"
        />
      </div>
      <FastMenu />
      <div className="flex justify-center mt-8 p-2">
        <LoginButton />
        <FaceId />
      </div>
    </main>
  );
}
