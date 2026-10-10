export default function BoshSahifa({ onOchish }) {
    return (
      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="bg-blue-600 text-white rounded-3xl p-8 md:p-14">
          <p className="font-semibold text-blue-100 mb-3">
            HOMEFIX — UY XIZMATLARI
          </p>
  
          <h1 className="text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
            Uyingizdagi muammolarni biz bilan oson hal qiling
          </h1>
  
          <p className="mt-5 text-blue-100 max-w-xl">
            Tozalash, santexnika va maishiy texnika ta’miri uchun
            kerakli mutaxassisni toping.
          </p>
  
          <button
            onClick={() => onOchish("xizmatlar")}
            className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold"
          >
            Xizmat tanlash
          </button>
        </div>
  
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {[
            ["✓", "Ishonchli ustalar", "Mutaxassisni tanlang"],
            ["⏱", "Vaqtni tejash", "Buyurtmani tez yuboring"],
            ["🏠", "Uy uchun xizmatlar", "Kerakli xizmat bir joyda"],
          ].map(([belgi, nom, matn]) => (
            <div key={nom} className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-3xl">{belgi}</div>
              <h3 className="font-bold mt-3">{nom}</h3>
              <p className="text-slate-500 mt-2">{matn}</p>
            </div>
          ))}
        </div>
  
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => onOchish("boshlash")}
            className="bg-slate-900 text-white px-5 py-3 rounded-xl"
          >
            Ro‘yxatdan o‘tish
          </button>
  
          <button
            onClick={() => onOchish("panel")}
            className="border px-5 py-3 rounded-xl"
          >
            Boshqaruv paneli
          </button>
        </div>
      </section>
    );
  }