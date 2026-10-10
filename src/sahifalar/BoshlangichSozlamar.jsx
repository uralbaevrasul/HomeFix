export default function BoshlangichSozlamalar({
    rol,
    setRol,
    onDavomEt,
  }) {
    return (
      <section className="max-w-lg mx-auto px-5 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h1 className="text-2xl font-bold">Hisob yaratish</h1>
  
          <p className="text-slate-500 mt-2 mb-6">
            HomeFix xizmatidan qanday foydalanasiz?
          </p>
  
          <div className="space-y-3">
            <button
              onClick={() => setRol("mijoz")}
              className={`w-full p-4 rounded-xl border text-left ${
                rol === "mijoz" ? "border-blue-600 bg-blue-50" : ""
              }`}
            >
              <strong>👤 Mijoz</strong>
              <p className="text-sm text-slate-500 mt-1">
                Xizmat buyurtma qilish
              </p>
            </button>
  
            <button
              onClick={() => setRol("usta")}
              className={`w-full p-4 rounded-xl border text-left ${
                rol === "usta" ? "border-blue-600 bg-blue-50" : ""
              }`}
            >
              <strong>🧰 Usta</strong>
              <p className="text-sm text-slate-500 mt-1">
                Xizmat ko‘rsatish va buyurtma olish
              </p>
            </button>
          </div>
  
          <button
            onClick={onDavomEt}
            className="w-full bg-blue-600 text-white py-3 rounded-xl mt-6"
          >
            Davom etish
          </button>
        </div>
      </section>
    );
  }