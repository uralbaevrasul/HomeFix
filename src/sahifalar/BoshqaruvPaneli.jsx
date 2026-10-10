export default function BoshqaruvPaneli({ onOchish }) {
    const bolimlar = [
      ["xizmatlar", "🧰", "Xizmatlar"],
      ["ustalar", "👨‍🔧", "Ustalar ro‘yxati"],
      ["buyurtma", "📋", "Buyurtma berish"],
      ["xavfsizlik", "🛡️", "Xavfsizlik sozlamalari"],
    ];
  
    return (
      <section className="max-w-6xl mx-auto px-5 py-12">
        <h1 className="text-3xl font-bold">Boshqaruv paneli</h1>
        <p className="text-slate-500 mt-2 mb-8">
          Kerakli bo‘limni tanlang.
        </p>
  
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bolimlar.map(([sahifa, belgi, nom]) => (
            <button
              key={sahifa}
              onClick={() => onOchish(sahifa)}
              className="bg-white border rounded-2xl p-6 text-left hover:border-blue-500"
            >
              <div className="text-3xl">{belgi}</div>
              <h2 className="font-bold mt-4">{nom}</h2>
              <p className="text-blue-600 text-sm mt-3">Ochish →</p>
            </button>
          ))}
        </div>
      </section>
    );
  }