import { useState } from 'react';
import './styles/App.css';
import SearchPage from './pages/SearchPage';
import FoodPage from './pages/FoodPage';
import CocktailPage from './pages/CocktailPage'
import ProfilePage from './pages/ProfilePage'
import FavoritesPage from './pages/FavoritesPage'
import MenuPage from './pages/MenuPage'


import BottomNav from './components/BottomNav';

function App() {
  const [page, setPage] = useState('home');

  const handleMenu = () => setPage('menu');
  const handleSearch = () => setPage('search');
  const handleBack = () => setPage('home');
  const handleFood = () => setPage('food');
  const handleCocktails = () => setPage('cocktail');
  const handleFavorites = () => setPage('favorites');
  const handleProfile = () => setPage('profile')

  return (
    <>
      {page === 'home' && (
        <div className="overflow-hidden h-screen flex flex-col">
          {/* Top bar */}
          <div className="flex flex-row items-center justify-start p-4 flex-shrink-0 gap-4">
            <button 
              onClick={handleMenu}
              aria-label="Menu"
              className=' z-50 '
            >
              <svg className="w-10 h-10 text-farb1" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>

            <button
              className="ml-auto p-2 rounded-full hover:bg-farb1/10 focus:outline-none focus:ring-2 focus:ring-farb1 shadow transition-colors duration-200"
              onClick={handleProfile}
              aria-label="Search"
            >
              <svg className="w-10 h-10 text-farb1 drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
              </svg>
            </button>
          </div>

          {/* Centered logo/title */}
          <div className="flex-1 flex flex-col -mt-44 items-center justify-center shadow-xl">
            <div className="shadow-xl pl-10 pr-10 border-t-[2vw] border-b-[2vw]">
              <h1 className="font-kapakana text-farb3 tracking-tight tracking-wider text-center font-extrabold text-[min(25vw,150px)]">
                Feast
              </h1>
              <h1 className="-mt-10 italic font-spectral text-farb3 tracking-tight text-center text-[min(20vw,150px)]">
                & Fizz
              </h1>
            </div>
          </div>
        
        </div>
        
      )}

      {page === 'favorites' && <FavoritesPage onBack={handleBack} />}
      {page === 'food' && <FoodPage onBack={handleBack} />}
      {page === 'cocktail' && <CocktailPage onBack={handleBack} />}
      {page === 'search' && <SearchPage onBack={handleBack} />}
      {page === 'menu' && <MenuPage onBack={handleBack} />}
      {page === 'profile' && <ProfilePage onBack={handleBack} />}

  <BottomNav
    onFavorites={handleFavorites}
    onFood={handleFood}
    onCocktails={handleCocktails}
    onSearch={handleSearch}
  />

      
    </>
    
  );
}

export default App;
