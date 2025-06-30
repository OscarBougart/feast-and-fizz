import { useState, useEffect } from 'react';
import './styles/App.css';
import SearchPage from './pages/SearchPage';
import FoodPage from './pages/FoodPage';
import CocktailPage from './pages/CocktailPage'
import ProfilePage from './pages/ProfilePage'
import FavoritesPage from './pages/FavoritesPage'
import MenuPage from './pages/MenuPage'
import BottomNav from './components/BottomNav';
import SyrupsPage from './pages/SyrupsPage';
import SettingsPage from './pages/SettingsPage';
import SciencePage from './pages/SciencePage';

function getInitialFavorites() {
const stored = localStorage.getItem("favorites");
  return stored ? JSON.parse(stored): [];
}

function App() {
  const [page, setPage] = useState('home');
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); 
  const [favorites, setFavorites] = useState(getInitialFavorites);

    useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);



  function handleCocktailSelect(cocktail) {
    setSelectedCocktail(cocktail);
    setPage('cocktail');
  }

  function toggleFavorite(item) {
    setFavorites(favs =>
      favs.some(fav => fav.name === item.name)
        ? favs.filter(fav => fav.name !== item.name)
        : [...favs, item]
    );
  }

  const handleMenu = () => setMenuOpen(true); // CHANGED
  const handleMenuClose = () => setMenuOpen(false); // NEW
  const handleSearch = () => setPage('search');
  const handleBack = () => setPage('home');
  const handleFood = () => setPage('food');
  const handleCocktails = () => setPage('cocktail');
  const handleFavorites = () => setPage('favorites');
  const handleProfile = () => setPage('profile');
  const handleSyrups = () => setPage('syrups')
  const handleScience = () => setPage('science')
  const handleSettings = () => setPage('settings')

  return (
    <>
      {/* Main app content always rendered */}
      
      {page === 'home' && (
        <div className="overflow-hidden h-screen flex flex-col">
          {/* Top bar */}
          <div className="flex flex-row items-center justify-start p-4 flex-shrink-0 gap-4">
            <button 
              onClick={handleMenu}
              aria-label="Menu"
              className='z-50'
            >
              <svg className="w-10 h-10 text-farbfont" 
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
              className="ml-auto p-2 rounded-full hover:bg-farbfont/10 focus:outline-none focus:ring-2 focus:ring-farbfont shadow transition-colors duration-200"
              onClick={handleProfile}
              aria-label="Profile"
            >
              <svg className="w-10 h-10 text-farbfont drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
              </svg>
            </button>
          </div>


          {/* Centered logo/title */}
          <div className="flex-1 flex flex-col  -mt-44 items-center justify-center shadow-xl">
            <div className="shadow-xl  pl-10 backdrop-blur-sm pr-10 border-t-[2vw] border-b-[2vw] border-farbborders ">
              <h1 className="font-kapakana   text-farb3 tracking-tight tracking-wider text-center font-extrabold text-[min(25vw,150px)]">
                Feast
              </h1>
              <h1 className="-mt-10 font-roboto text-farb3 tracking-tight text-center text-[min(20vw,150px)]">
                & Fizz
              </h1>
            </div>
          </div>
        </div>
      )}



      {page === 'search' && (<SearchPage onBack={handleBack} onCocktailSelect={handleCocktailSelect} />)}
      {page === 'favorites' && 
        <FavoritesPage 
          onBack={handleBack}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          />}
      {page === 'food' && (
        <FoodPage
          onBack={handleBack}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      )}
      {page === 'cocktail' && (
        <CocktailPage
          cocktail={selectedCocktail}
          onBack={handleBack}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      )}      
      {page === 'profile' && <ProfilePage onBack={handleBack} />}
      {page === 'syrups' && <SyrupsPage onBack={handleBack} />}
      {page === 'science' && <SciencePage onBack={handleBack} />}
      {page === 'settings' && <SettingsPage onBack={handleBack} />}

      {/* MenuPage overlays on top, always rendered */}
      <MenuPage 
        open={menuOpen} 
        onClose={handleMenuClose} 
        onProfile={handleProfile}
        onFavorites={handleFavorites}
        onRecepie={handleFood} 
        onScience={handleScience}
        onSyrups={handleSyrups}   // <-- here
        onSettings={handleSettings}
        
/>


      
      
      <BottomNav
        currentPage={page}
        onFavorites={handleFavorites}
        onFood={handleFood}
        onCocktails={handleCocktails}
        onSearch={handleSearch}
      />

    </>
  );
}

export default App;