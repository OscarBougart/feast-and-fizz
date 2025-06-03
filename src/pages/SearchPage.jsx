

function SearchPage({ onBack }) {
  return (
    <div className="min-h-screen flex-1 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4">Search Page</h2>
      <input className="border p-2 rounded" placeholder="Type to Search..." />
      <button className="mt-4 px-4 py-2 bg-farb1 text-white rounded" onClick={onBack}>
        Back
      </button>
    </div>
  );
}

export default SearchPage;