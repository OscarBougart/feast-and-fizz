import { useState, useRef, useEffect } from 'react';
import cocktails from '/data/cocktails.json'; 
import foodData from '/data/food.json';

function SearchPage({ onBack }) {
  const [query, setQuery] = useState('');
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [selectedFood, setSelectedFood] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!selectedCocktail && !selectedFood) {
      inputRef.current?.focus();
    }
  }, [selectedCocktail, selectedFood]);

  if (selectedCocktail) {
    return (
      <div className="sticky pb-20 min-h-screen flex-1 flex flex-col">
        <button className="text-farbfont mr-auto  justify-start mt-4 px-4 py-2 rounded" onClick={()=> setSelectedCocktail(null)}>
        <svg width="50px" height="50px" viewBox="0 0 1024 1024" fill="currentColor" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill=""/> </svg>
      </button>
       
        <div className="pt-6 sticky top-0 z-10 ">
          <h1 className="text-3xl text-farb3 font-extrabold text-center mb-4">{selectedCocktail.name}</h1>
        </div>
        <div className="flex flex-col items-center px-6">
          <div className="w-full italic max-w-xl text-farb3 p-6 mb-6">
            <ul className="mb-4">
              {selectedCocktail.ingredients.map((ing, i) => (
                <li key={i}>
                  {ing.amount ? `${ing.amount} ` : ''}
                  {ing.name}
                </li>
              ))}
            </ul>
            {selectedCocktail.instructions && (
              <>
                <h2 className="text-xl font-bold mb-2"></h2>
                <p>{selectedCocktail.instructions}</p>
              </>
            )}
          </div>
        </div>

      </div>
    );
  }

  if (selectedFood) {
    return (
      <div className="sticky pb-20 min-h-screen flex-1 flex flex-col">
        <button className="text-farbfont mr-auto  justify-start mt-4 px-4 py-2 rounded" onClick={()=> setSelectedFood(null)}>
        <svg width="50px" height="50px" viewBox="0 0 1024 1024" fill="currentColor" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill=""/> </svg>
      </button>
        
        <div className="pt-6 sticky top-0 z-10 ">
          <h1 className="text-3xl text-farb3 font-extrabold text-center mb-4">{selectedFood.name}</h1>
        </div>
        <div className="flex flex-col items-center px-6">
          <div className="w-full italic max-w-xl text-farb3 p-6 mb-6">
            <ul className="mb-4">
              {selectedFood.ingredients.map((ing, i) => (
                <li key={i}>
                  {ing.amount ? `${ing.amount} ` : ''}
                  {ing.name}
                </li>
              ))}
            </ul>
            {selectedFood.instructions && (
              <>
                <h2 className="text-xl font-bold mb-2"></h2>
                <p>{selectedFood.instructions}</p>
              </>
            )}
          </div>
        </div>

      </div>
    );
  }

  const filteredCocktails = cocktails.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );
  const filteredFood = foodData.filter(f =>
    f.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="sticky pb-20 min-h-screen flex-1 flex flex-col">
      <button className="text-farbfont mr-auto  justify-start mt-4 px-4 py-2 rounded" onClick={onBack}>
        <svg width="50px" height="50px" viewBox="0 0 1024 1024" fill="currentColor" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill=""/> </svg>
      </button>
      <div className="pt-9 sticky top-0 z-10 ">
        <input
          ref={inputRef}
          className="p-2 rounded-xl  mb-6 mx-4 w-[calc(100%-2rem)]"
          placeholder="Search..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        {filteredCocktails.length > 0 && (
          <div className="text-xl text- text-farb3 px-6 mt-4 mb-2 font-roboto ">Cocktails</div>
        )}
        {filteredCocktails.map((cocktail, idx) => (
          <button
            key={'cocktail-' + cocktail.name}
            onClick={() => setSelectedCocktail(cocktail)}
            className={
              `w-full shadow pt-1 py-10 text-center text-farbfont font-anticdidone ` +
              (idx % 2 === 0 ? 'bg-farb6' : 'bg-farb4') +
              (idx !== 0 ? ' -mt-8' : '') +
              ' rounded-t-[2rem] ' +
              (idx === filteredCocktails.length - 1 && filteredFood.length === 0 ? 'rounded-b-[2rem]' : 'rounded-b-none')
            }
          >
            <div className="text-lg font-extrabold">{cocktail.name}</div>
            <div className="text-sm pl-12 pr-12 font-normal text-farbfont mt-2 text-center truncate w-full">
              {cocktail.ingredients && cocktail.ingredients.map(ing => ing.name).join(', ')}
            </div>
          </button>
        ))}
        {filteredFood.length > 0 && (
          <div className="text-lg font-bold text-farb3 px-6 mt-8 mb-2">Food</div>
        )}
        {filteredFood.map((food, idx) => (
          <button
            key={'food-' + food.name}
            onClick={() => setSelectedFood(food)}
            className={
              `w-full shadow pt-1 py-10 text-center text-farbfont font-bold ` +
              (idx % 2 === 0 ? 'bg-farb4' : 'bg-farb6') +
              (idx !== 0 ? ' -mt-8' : '') +
              ' rounded-t-[2rem] ' +
              (idx === filteredFood.length - 1 ? 'rounded-b-[2rem]' : 'rounded-b-none')
            }
          >
            <div className="text-lg font-extrabold">{food.name}</div>
            <div className="text-sm pl-12 pr-12 font-normal text-farbfont mt-2 text-center truncate w-full">
              {food.ingredients && food.ingredients.map(ing => ing.name).join(', ')}
            </div>
          </button>
        ))}
        {filteredCocktails.length === 0 && filteredFood.length === 0 && (
          <div className="text-center text-gray-400">No results</div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;