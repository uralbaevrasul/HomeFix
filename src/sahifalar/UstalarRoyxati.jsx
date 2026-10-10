const ustalar = [
    {
      id: 1,
      ism: "Ali Valiyev",
      xizmat: "Santexnika",
      tajriba: "5 yil tajriba",
      reyting: "⭐ 4.9",
    },
    {
      id: 2,
      ism: "Hasan Karimov",
      xizmat: "Texnika ta’miri",
      tajriba: "4 yil tajriba",
      reyting: "⭐ 4.8",
    },
    {
      id: 3,
      ism: "Jasur Ahmedov",
      xizmat: "Tozalash",
      tajriba: "3 yil tajriba",
      reyting: "⭐ 4.7",
    },
  ];
  
  export default function UstalarRoyxati() {
    return (
      <section className="max-w-5xl mx-auto px-5 py-12">
        <h1 className="text-3xl font-bold">Ustalar ro‘yxati</h1>
  
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {ustalar.map((usta) => (
            <div
              key={usta.id}
              className="bg-white border rounded-2xl p-6"
            >
              <div className="text-4xl">👨‍🔧</div>
              <h2 className="font-bold text-lg mt-4">{usta.ism}</h2>
              <p className="text-blue-600 mt-2">{usta.xizmat}</p>
              <p className="text-slate-500 text-sm mt-2">{usta.tajriba}</p>
              <p className="mt-3">{usta.reyting}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }