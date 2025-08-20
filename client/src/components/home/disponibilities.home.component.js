import { ArrowSvg } from "../_shared/_svgs/arrow.svg";

export default function DisponibilitiesHomeComponent() {
  return (
    <div className="fixed bottom-6 right-6 rounded-xl bg-white p-5 w-[234px] h-[209px] flex flex-col justify-between z-20 shadow-xl">
      <div
        className="font-thin text-sm rounded-full w-fit px-1 py-1"
        style={{
          backgroundImage: "url('/img/hero/bg-disponible.jpg')",
          backgroundPosition: "bottom",
        }}
      >
        <div className="flex gap-2 items-center bg-white rounded-full px-2 py-1">
          <img
            className="h-[32px]"
            src="/img/hero/disponible.png"
            alt="disponible"
          />
          <p className="opacity-60">Disponible</p>
        </div>
      </div>

      <p className="font-xl leading-5">Prêt à immortaliser vos moments ?</p>

      <div className="flex gap-4">
        <p className="font-thin text-sm opacity-60 tracking-tight">
          Facilisi fames sit sed phasellus amet.
        </p>
        <button className="bg-black w-fit p-4 h-fit rounded-full">
          <ArrowSvg />
        </button>
      </div>
    </div>
  );
}
