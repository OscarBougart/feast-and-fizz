function MenuPage({
  open,
  onClose,
  onProfile,
  onFavorites,
  onRecepie,
  onSyrups,
  onScience,
  onSettings,
  children
}) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/40 duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div
        className={`
          fixed top-0 left-0 z-50 h-full bg-transparent dark:bg-farb4 shadow-xl transition-transform duration-500
          ${open ? 'translate-x-0' : '-translate-x-full'}
          w-2/3
        `}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={onClose}
          aria-label="Close menu"
        >
          &times;
        </button>
        <nav className="text-farbfont flex flex-col items-start gap-5 mt-12 px-4">
          <button
            className="flex items-center gap-3 text-farbfont text-lg font-bold px-4 py-2 rounded hover:bg-farb6 transition text-left"
            onClick={() => { onProfile(); onClose(); }}
          >
            {/* Profile Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
            </svg>
            Profile
          </button>
          <button
            className="flex items-center gap-3 text-farbfont text-lg font-bold px-4 py-2 rounded hover:bg-farb6 transition text-left"
            onClick={() => { onRecepie(); onClose(); }}
          >
            {/* Book Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M20 2H8a2 2 0 0 0-2 2v15" />
              <path d="M16 2v4a2 2 0 0 0 2 2h4" />
            </svg>
            Recepie Book
          </button>
          <button
            className="flex items-center gap-3 text-farbfont text-lg font-bold px-4 py-2 rounded hover:bg-farb6 transition text-left"
            onClick={() => { onSyrups(); onClose(); }}
          >
            {/* Syrup Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M20 2H8a2 2 0 0 0-2 2v15" />
              <path d="M16 2v4a2 2 0 0 0 2 2h4" />
            </svg>
            Syrup
          </button>
          <button
            className="flex items-center gap-3 text-farbfont text-lg font-bold px-4 py-2 rounded hover:bg-farb6 transition text-left"
            onClick={() => { onScience(); onClose(); }}
          >
            {/* Science Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M20 2H8a2 2 0 0 0-2 2v15" />
              <path d="M16 2v4a2 2 0 0 0 2 2h4" />
            </svg>
            Science
          </button>
          
          <button
            className="flex items-center gap-3 text-farbfont text-lg font-bold px-4 py-2 rounded hover:bg-farb6 transition text-left"
            onClick={() => { onSettings(); onClose(); }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M20 2H8a2 2 0 0 0-2 2v15" />
              <path d="M16 2v4a2 2 0 0 0 2 2h4" />
            </svg>
            Settings
          </button>
          <button
            className="flex items-center gap-3 text-farbfont text-lg font-bold px-4 py-2 rounded hover:bg-farb6 transition text-left"
            onClick={() => { onFavorites(); onClose(); }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.04 3 12.5 4 13 5.09C13.5 4 14.96 3 16.5 3C19.5 3 22 5.5 22 8.5C22 13.5 12 21 12 21Z" />
            </svg>
            Favorites
          </button>
        </nav>
        {children}
      </div>
    </>
  );
}
export default MenuPage;
