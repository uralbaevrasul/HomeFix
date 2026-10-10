export default function BuyurtmaBerish({
    xizmat,
    onOrqaga,
    onYuborish,
  }) {
    function yuborish(event) {
      event.preventDefault();
      onYuborish();
    }
  
    return (
      <section className="max-w-lg mx-auto px-5 py-12">
        <form
          onSubmit={yuborish}
          className="bg-white p-8 rounded-2xl shadow-sm space-y-4"
        >
          <button
            type="button"
            onClick={onOrqaga}
            className="text-blue-600"
          >
            ← Orqaga
          </button>
  
          <h1 className="text-2xl font-bold">Buyurtma berish</h1>
  
          <p className="text-slate-500">
            Tanlangan xizmat: {xizmat || "Ko‘rsatilmagan"}
          </p>
  
          <input
            required
            placeholder="Manzil"
            className="w-full border rounded-xl p-3"
          />
  
          <input
            required
            type="date"
            className="w-full border rounded-xl p-3"
          />
  
          <input
            required
            type="time"
            className="w-full border rounded-xl p-3"
          />
  
          <textarea
            placeholder="Qo‘shimcha ma’lumot"
            rows={4}
            className="w-full border rounded-xl p-3"
          />
  
          <button className="w-full bg-blue-600 text-white p-3 rounded-xl">
            Ustalarni ko‘rish
          </button>
        </form>
      </section>
    );
  }