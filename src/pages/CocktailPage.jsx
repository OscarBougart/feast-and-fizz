import { useState } from 'react';
import cocktails from '/data/cocktails.json';
import CocktailCard from "../components/CocktailCard";


function CocktailPage({ onBack, favorites = [], toggleFavorite }) {
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [query, setQuery] = useState('');

  if (selectedCocktail) {
  return (
    <CocktailCard
      cocktail={selectedCocktail}
      onBack={() => setSelectedCocktail(null)}
      isFavorite={favorites.some(fav => fav.name === selectedCocktail.name)}
      onToggleFavorite={() => toggleFavorite(selectedCocktail)}
    />
  );
}

 const filtered = cocktails.filter(c =>
  c.name.toLowerCase().includes(query.toLowerCase()) ||
  c.ingredients.some(ing =>
    ing.name.toLowerCase().includes(query.toLowerCase())
  )
);

  return (
    <div className="sticky pb-20 min-h-screen flex-1 flex flex-col">
      <button className="text-farbfont mr-auto  justify-start mt-4 px-4 py-2 rounded" onClick={onBack}>
        <svg width="50px" height="50px" viewBox="0 0 1024 1024" fill="currentColor" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill=""/> </svg>
      </button>
      <div className="pt-9 sticky top-0 z-10 ">
        <input
          className="rounded-xl p-2 rounded mb-6 mx-4 w-[calc(100%-2rem)]"
          placeholder="Search..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        {filtered.map((cocktail, idx) => (
          <button
            key={cocktail.name}
            onClick={() => setSelectedCocktail(cocktail)}
            className={
              `w-full shadow pt-1 py-10 text-center text-farbfont font-bold ` +
              (idx % 2 === 0 ? 'bg-farb6' : 'bg-farb4') +
              (idx !== 0 ? ' -mt-8' : '') +
              ' rounded-t-[2rem] ' +
              (idx === filtered.length - 1 ? 'rounded-b-[2rem]' : 'rounded-b-none')
            }
          >
            <div className="text-lg font-extrabold">{cocktail.name}</div>
            <div className="text-sm pl-12 pr-12 font-normal text-farbfont mt-2 text-center truncate w-full">
              {cocktail.ingredients && cocktail.ingredients.map(ing => ing.name).join(', ')}
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

export default CocktailPage;  