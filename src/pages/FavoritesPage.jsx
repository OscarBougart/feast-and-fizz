import { useState } from "react";

function FavoritesPage({ favorites = [], onBack, toggleFavorite }) {
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");

  const filtered = favorites.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  if (selected) {
    return (
      <div className="sticky pb-20 min-h-screen flex-1 flex flex-col">
        <button className="text-farbfont mr-auto  justify-start mt-4 px-4 py-2 rounded" onClick={()=> setSelected(null)}>
          <svg width="50px" height="50px" viewBox="0 0 1024 1024" fill="currentColor" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill=""/> </svg>
        </button>
        <button
          className="mt-4 px-4 py-2 bg-farb1 text-white rounded"
          onClick={() => toggleFavorite(selected)}
        >
          {favorites.some(fav => fav.name === selected.name) ? "Remove from Favorites" : "Add to Favorites"}
        </button>
        <div className="pt-6 sticky top-0 z-10 ">
          <h1 className="text-3xl text-farb3 font-extrabold text-center mb-4">{selected.name}</h1>
        </div>
        <div className="flex flex-col items-center px-6">
          <div className="w-full italic max-w-xl text-farb3 p-6 mb-6">
            <ul className="mb-4">
              {selected.ingredients &&
                selected.ingredients.map((ing, i) => (
                  <li key={i}>
                    {ing.amount ? `${ing.amount} ` : ""}
                    {ing.name}
                  </li>
                ))}
            </ul>
            {selected.instructions && (
              <>
                <h2 className="text-xl font-bold mb-2"></h2>
                <p>{selected.instructions}</p>
              </>
            )}
          </div>
        </div>
        
      </div>
    );
  }

  return (
    <div className="sticky pb-20 min-h-screen flex-1 flex flex-col">
      <button className="text-farbfont mr-auto  justify-start mt-4 px-4 py-2 rounded"onClick={() => setSelected(onBack)}>
        <svg width="50px" height="50px" viewBox="0 0 1024 1024" fill="currentColor" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill=""/> </svg>
      </button>
      <div className="pt-9 sticky top-0 z-10 ">
        <input
          className="border rounded-xl p-2 rounded mb-6 mx-4 w-[calc(100%-2rem)]"
          placeholder="Search favorites..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        {filtered.map((item, idx) => (
          <button
            key={item.name}
            onClick={() => setSelected(item)}
            className={
              `w-full shadow pt-1 py-10 text-center text-farbfont font-bold ` +
              (idx % 2 === 0 ? 'bg-farb6' : 'bg-farb4') +
              (idx !== 0 ? ' -mt-8' : '') +
              ' rounded-t-[2rem] ' +
              (idx === filtered.length - 1 ? 'rounded-b-[2rem]' : 'rounded-b-none')
            }
          >
            <div className="text-lg font-extrabold">{item.name}</div>
            <div className="text-sm pl-12 pr-12 font-normal text-farbfont mt-2 text-center truncate w-full">
              {item.ingredients && item.ingredients.map(ing => ing.name).join(', ')}
            </div>
          </button>
        ))}
        {filtered.length === 0 && (
          <div className="text-center text-gray-400">No results</div>
        )}
      </div>
    </div>
  );
}

export default FavoritesPage;