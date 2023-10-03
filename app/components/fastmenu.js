import Image from "next/image";

const fastmenus = [
  {
    name: "Promo",
    src: "/promo.webp",
  },
  {
    name: "Pulsa/Data",
    src: "/pulsadata.webp",
  },
  {
    name: "Dompet Digital",
    src: "/dompetdigital.webp",
  },
  {
    name: "QRIS",
    src: "/qris.webp",
  },
  {
    name: "BRIZZI",
    src: "/brizzi.webp",
  },
  {
    name: "Catatan Keuangan",
    src: "/catatankeuangan.webp",
  },
];

export default function FastMenu() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-primary font-bold flex">
          Fast Menu
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 self-center ml-1"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
          </svg>
        </h1>
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex overflow-x-auto scrollbar-hide px-10 space-x-8 w-screen md:w-96">
          {fastmenus.map((v, i) => (
            <div
              key={v.name}
              className="flex-shrink-0 w-16 text-center space-y-2"
            >
              <Image
                key={v.name}
                width={60}
                height={60}
                alt={v.name}
                className="w-16"
                src={v.src}
              />
              <p className="text-sm font-semibold text-break md:text-md">
                {v.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
