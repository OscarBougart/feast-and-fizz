import { useState } from 'react';

const cocktails = [
  { name: 'Mojito', ingredients: ['White Rum', 'Sugar', 'Lime', 'Mint', 'Soda Water'] },
  { name: 'Martini', ingredients: ['Gin', 'Dry Vermouth', 'Olive'] },
  { name: 'Margarita', ingredients: ['Tequila', 'Triple Sec', 'Lime Juice', 'Salt'] },
  { name: 'Daiquiri', ingredients: ['White Rum', 'Sugar', 'Lime Juice'] },
  { name: 'Cosmopolitan', ingredients: ['Vodka', 'Triple Sec', 'Cranberry Juice', 'Lime Juice'] },
  { name: 'Negroni', ingredients: ['Gin', 'Campari', 'Sweet Vermouth'] },
  { name: 'Old Fashioned', ingredients: ['Bourbon', 'Sugar', 'Angostura Bitters', 'Orange Peel'] },
  { name: 'Mai Tai', ingredients: ['White Rum', 'Dark Rum', 'Orange Curaçao', 'Lime Juice', 'Orgeat Syrup'] },
];

function SearchPage({ onBack }) {
  const [query, setQuery] = useState('');

  // Filter cocktails by search query (case-insensitive)
  const filtered = cocktails.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="pb-20 min-h-screen flex-1 flex flex-col">
      <button className="ml-auto mb-8 justify-end mt-4 px-4 py-2 rounded" onClick={onBack}>
      </button>
      <input
        className="border p-2 rounded mb-6 mx-4"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <div className="flex flex-col">
 {filtered.map((cocktail, idx) => (
  <div
    key={cocktail.name}
    className={
      `w-full shadow pt-1 py-10 text-center text-farb1 font-bold ` +
      (idx % 2 === 0 ? 'bg-farb6' : 'bg-farb4') +
      (idx !== 0 ? ' -mt-8' : '') +
      ' rounded-t-[2rem] ' +
      (idx === filtered.length - 1 ? 'rounded-b-[2rem]' : 'rounded-b-none')
    }
  >
      <div>{cocktail.name}</div>
      <div className="text-xs font-normal text-farb2 mt-2">
        {cocktail.ingredients && cocktail.ingredients.join(', ')}
      </div>
    </div>
  ))}
  {filtered.length === 0 && (
    <div className="text-center text-gray-400">No results</div>
  )}
</div>
    </div>
  );
}

export default SearchPage;