import React from "react";

function CocktailCard({ cocktail, onBack, isFavorite, onToggleFavorite }) {
  if (!cocktail) return null;

  return (
    <div className="sticky pb-20 min-h-screen flex-1 flex flex-col">
      <div className="flex items-center justify-between pt-4">
        <button
          className="text-farbfont px-4 py-2 rounded"
          onClick={onBack}
        >
          <svg width="50px" height="50px" viewBox="0 0 1024 1024" fill="currentColor" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" />
          </svg>
        </button>
        <button
          className="px-4 py-2 bg-farb1 text-white rounded"
          onClick={onToggleFavorite}
        >
          <svg
            className={isFavorite ? "fill-farbbutton" : "fill-current"}
            height="30px"
            width="30px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12,22C9.63,20.17,1,13.12,1,7.31C1,4.38,3.47,2,6.5,2c1.9,0,3.64,0.93,4.65,2.48L12,5.78l0.85-1.3
              C13.86,2.93,15.6,2,17.5,2C20.53,2,23,4.38,23,7.31C23,13.15,14.38,20.18,12,22z"/>
          </svg>
        </button>
      </div>
      <div className="pt-6 sticky top-0 z-10 ">
        <h1 className="text-3xl text-farb3 font-extrabold text-center font-roboto mb-4">{cocktail.name}</h1>
      </div>
      <div className="flex flex-col items-center px-6">
        <div className="w-full  max-w-xl text-farb3 p-6 mb-6">
          <ul className="mb-4 ml-2 font-light italic text-xl -tracking-tighter font-spectral">
            {cocktail.ingredients.map((ing, i) => (
              <li key={i}>
                {ing.amount ? `${ing.amount} ` : ''}
                {ing.name}
              </li>
            ))}
          </ul>
          {cocktail.instructions && (
            <>
              <h2 className="text-xl  font-bold mb-2"></h2>
              <p className="text-md  font-overpass">{cocktail.instructions}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CocktailCard;