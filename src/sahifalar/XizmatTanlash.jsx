import XizmatKartasi from "../komponentlar/XizmatKartasi";
import xizmatlar from "../malumotlar/xizmatlar";

export default function XizmatTanlash({ onTanlash }) {
  return (
    <section className="max-w-6xl mx-auto px-5 py-12">
      <h1 className="text-3xl font-bold">Xizmatni tanlang</h1>

      <p className="text-slate-500 mt-2 mb-8">
        Sizga kerakli xizmat turini tanlang.
      </p>

      <div className="grid md:grid-cols-3 gap-5">
        {xizmatlar.map((xizmat) => (
          <XizmatKartasi
            key={xizmat.id}
            belgi={xizmat.belgi}
            nom={xizmat.nom}
            tavsif={xizmat.tavsif}
            onClick={() => onTanlash(xizmat.nom)}
          />
        ))}
      </div>
    </section>
  );
}