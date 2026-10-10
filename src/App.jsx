import { useState } from "react";
import BoshlangichSozlamalar from "./sahifalar/BoshlangichSozlamar";
import XizmatTanlash from "./sahifalar/XizmatTanlash";
import MijozRoyxatdanOtish from "./sahifalar/MijozRoyxatdanOtish";
import UstaRoyxatdanOtish from "./sahifalar/UstaRoyxatdanOtish";
import BoshqaruvPaneli from "./sahifalar/BoshqaruvPaneli";
import XizmatTurlari from "./sahifalar/XizmatTurlari";
import BuyurtmaBerish from "./sahifalar/BuyurtmaBerish";
import UstalarRoyxati from "./sahifalar/UstalarRoyxati";
import XavfsizlikSozlamalari from "./sahifalar/XavfsizlikSozlamalari";
import BoshSahifa from "./sahifalar/BoshSahifa";
import YuqoriQism from "./komponentlar/YuqoriQism";
import PastkiQism from "./komponentlar/PastkiQism";


export default function App() {
  const [sahifa, setSahifa] = useState("bosh");
  const [tanlanganXizmat, setTanlanganXizmat] = useState("");
  const [rol, setRol] = useState("mijoz");

  function sahifaniOch(nom) {
    setSahifa(nom);
  }

  function sahifaniChiqar() {
    switch (sahifa) {
      case "xizmatlar":
        return (
          <XizmatTanlash
            onTanlash={(xizmat) => {
              setTanlanganXizmat(xizmat);
              setSahifa("turlar");
            }}
          />
        );

      case "boshlash":
        return (
          <BoshlangichSozlamalar
            rol={rol}
            setRol={setRol}
            onDavomEt={() =>
              setSahifa(rol === "mijoz" ? "mijozRoyxat" : "ustaRoyxat")
            }
          />
        );

      case "mijozRoyxat":
        return (
          <MijozRoyxatdanOtish
            onTugatish={() => setSahifa("panel")}
          />
        );

      case "ustaRoyxat":
        return (
          <UstaRoyxatdanOtish
            onTugatish={() => setSahifa("panel")}
          />
        );

      case "panel":
        return <BoshqaruvPaneli onOchish={sahifaniOch} />;

      case "turlar":
        return (
          <XizmatTurlari
            xizmat={tanlanganXizmat}
            onOrqaga={() => setSahifa("xizmatlar")}
            onTanlash={() => setSahifa("buyurtma")}
          />
        );

      case "buyurtma":
        return (
          <BuyurtmaBerish
            xizmat={tanlanganXizmat}
            onOrqaga={() => setSahifa("turlar")}
            onYuborish={() => setSahifa("ustalar")}
          />
        );

      case "ustalar":
        return <UstalarRoyxati />;

      case "xavfsizlik":
        return (
          <XavfsizlikSozlamalari
            onOrqaga={() => setSahifa("panel")}
          />
        );

      default:
        return <BoshSahifa onOchish={sahifaniOch} />;
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <YuqoriQism onBoshSahifa={() => setSahifa("bosh")} />

      <main className="flex-1">
        {sahifaniChiqar()}
      </main>

      <PastkiQism />
    </div>
  );
}