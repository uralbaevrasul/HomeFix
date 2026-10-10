import { useState } from "react";

export default function XavfsizlikSozlamalari({ onOrqaga }) {
  const [favquloddaYordam, setFavquloddaYordam] = useState(true);
  const [eslatma, setEslatma] = useState(true);
  const [xabarnoma, setXabarnoma] = useState(true);

  const sozlamalar = [
    {
      nom: "Favqulodda yordam tugmasi",
      qiymat: favquloddaYordam,
      ozgartirish: setFavquloddaYordam,
    },
    {
      nom: "Xavfsizlik eslatmalari",
      qiymat: eslatma,
      ozgartirish: setEslatma,
    },
    {
      nom: "Buyurtma xabarnomalari",
      qiymat: xabarnoma,
      ozgartirish: setXabarnoma,
    },
  ];

  return (
    <section className="max-w-2xl mx-auto px-5 py-12">
      <button onClick={onOrqaga} className="text-blue-600 mb-6">
        ← Boshqaruv paneliga qaytish
      </button>

      <h1 className="text-3xl font-bold">Xavfsizlik sozlamalari</h1>

      <div className="bg-white border rounded-2xl p-6 mt-8 space-y-6">
        {sozlamalar.map((sozlama) => (
          <label
            key={sozlama.nom}
            className="flex items-center justify-between gap-4"
          >
            <span>{sozlama.nom}</span>

            <input
              type="checkbox"
              checked={sozlama.qiymat}
              onChange={(event) =>
                sozlama.ozgartirish(event.target.checked)
              }
              className="w-5 h-5 accent-blue-600"
            />
          </label>
        ))}
      </div>

      <p className="text-sm text-slate-500 mt-4">
        Ushbu sozlamalar hozircha faqat sahifa ochiq turgan vaqt davomida ishlaydi.
      </p>
    </section>
  );
}