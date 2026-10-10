import xizmatlar from "../malumotlar/xizmatlar";

export default function XizmatTurlari({
  xizmat,
  onOrqaga,
  onTanlash,
}) {
  const tanlangan = xizmatlar.find((item) => item.nom === xizmat);

  return (
    <section className="max-w-4xl mx-auto px-5 py-12">
      <button onClick={onOrqaga} className="text-blue-600 mb-6">
        ← Orqaga
      </button>

      <h1 className="text-3xl font-bold">{xizmat} xizmatlari</h1>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        {(tanlangan?.turlar ?? []).map((tur) => (
          <button
            key={tur}
            onClick={onTanlash}
            className="bg-white border rounded-xl p-5 text-left hover:border-blue-500"
          >
            <span className="font-semibold">{tur}</span>
            <p className="text-sm text-slate-500 mt-2">
              Buyurtma berish →
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}