import { useState, useRef, useEffect } from 'react';
import cocktails from '/data/cocktails.json'; 

function SearchPage({ onBack, onCocktailSelect }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const filtered = cocktails.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="sticky pb-20 min-h-screen flex-1 flex flex-col">
      <button className="  ml-auto mb-8 justify-end mt-4 px-4 py-2 rounded" onClick={onBack}>
      </button>
      <div className="pt-9 sticky top-0 z-10 bg-white dark:bg-farb4">
      <input
        ref={inputRef}
        className="border p-2 rounded mb-6 mx-4 w-[calc(100%-2rem)]"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </div>
     <div className="flex flex-col">
  {filtered.map((cocktail, idx) => (
    <button
      key={cocktail.name}
      onClick={() => onCocktailSelect(cocktail)} 
      className={
        `w-full shadow pt-1 py-10 text-center text-farbfont font-bold ` +
        (idx % 2 === 0 ? 'bg-farb6' : 'bg-farb4') +
        (idx !== 0 ? ' -mt-8' : '') +
        ' rounded-t-[2rem] ' +
        (idx === filtered.length - 1 ? 'rounded-b-[2rem]' : 'rounded-b-none')
      }
    >
      <div className="text-lg font-extrabold">{cocktail.name}</div>
      <div className="text-sm pl-12 pr-12 font-normal  text-farbfont mt-2 text-center truncate w-full">
  {cocktail.ingredients &&
    cocktail.ingredients
      .map(ing => ing.name)
      .join(', ')
  }
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

export default SearchPage;