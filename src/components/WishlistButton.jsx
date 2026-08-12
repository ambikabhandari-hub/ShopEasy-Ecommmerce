import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

function WishlistButton({ product }) {
  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useContext(WishlistContext);

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <button
      onClick={handleWishlist}
      className="text-3xl absolute top-3 right-3"
    >
      {isInWishlist(product.id) ? "❤️" : "🤍"}
    </button>
  );
}

export default WishlistButton;