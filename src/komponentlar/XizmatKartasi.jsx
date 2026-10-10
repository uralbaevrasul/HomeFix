export default function XizmatKartasi({
    belgi,
    nom,
    tavsif,
    onClick,
  }) {
    return (
      <button
        onClick={onClick}
        className="text-left bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-md transition"
      >
        <div className="text-4xl mb-4">{belgi}</div>
  
        <h3 className="font-bold text-lg mb-2">{nom}</h3>
  
        <p className="text-slate-500 text-sm">{tavsif}</p>
  
        <span className="inline-block mt-4 text-blue-600 font-semibold">
          Tanlash →
        </span>
      </button>
    );
  }