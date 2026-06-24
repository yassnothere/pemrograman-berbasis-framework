const ProductCard = () => {
  return (
    /* 1. flex, 2. justify-center, 3. items-center (Layouting) */
    <div className="flex justify-center items-center p-6">
      {/* 4. bg-white, 5. shadow-lg, 6. rounded-xl (Styling) */}
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-sm border border-gray-200">
        {/* 7. text-2xl, 8. font-bold, 9. text-blue-600 (Typography) */}
        <h2 className="text-2xl font-bold text-blue-600 mb-2">Card</h2>
        <p className="text-gray-600">
          Ini Produk Kami.
        </p>
        {/* 10. hover:bg-blue-700 (State) */}
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Klik Detail
        </button>
      </div>
    </div>
  );
};

export default ProductCard;