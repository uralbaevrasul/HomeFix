export default function UstaRoyxatdanOtish({ onTugatish }) {
    function yuborish(event) {
      event.preventDefault();
      onTugatish();
    }
  
    return (
      <section className="max-w-lg mx-auto px-5 py-12">
        <form
          onSubmit={yuborish}
          className="bg-white rounded-2xl p-8 shadow-sm space-y-4"
        >
          <h1 className="text-2xl font-bold">Usta sifatida ro‘yxatdan o‘tish</h1>
  
          <input
            required
            placeholder="Ism va familiya"
            className="w-full border rounded-xl p-3"
          />
  
          <input
            required
            type="tel"
            placeholder="Telefon raqami"
            className="w-full border rounded-xl p-3"
          />
  
          <select
            required
            defaultValue=""
            className="w-full border rounded-xl p-3"
          >
            <option value="" disabled>Xizmat yo‘nalishi</option>
            <option>Tozalash</option>
            <option>Santexnika</option>
            <option>Texnika ta’miri</option>
          </select>
  
          <input
            required
            placeholder="Tajriba (yil)"
            type="number"
            min="0"
            className="w-full border rounded-xl p-3"
          />
  
          <button className="w-full bg-blue-600 text-white p-3 rounded-xl">
            Ariza yuborish
          </button>
        </form>
      </section>
    );
  }