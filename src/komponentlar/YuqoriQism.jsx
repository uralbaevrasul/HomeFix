export default function YuqoriQism({ onBoshSahifa }) {
    return (
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <button
            onClick={onBoshSahifa}
            className="text-2xl font-bold text-blue-600"
          >
            HomeFix
          </button>
  
          <span className="text-sm text-slate-500">
            Uyingiz uchun ishonchli xizmatlar
          </span>
        </div>
      </header>
    );
  }