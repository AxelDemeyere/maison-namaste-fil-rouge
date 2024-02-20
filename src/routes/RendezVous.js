import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Cart from "../components/Cart";

function RendezVous() {
  const location = useLocation();
  const [cart, setCart] = useState({
    prestations: [],
    total: 0,
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const cartParam = searchParams.get("cart");

    if (cartParam) {
      const decodedCart = JSON.parse(decodeURIComponent(cartParam));
      setCart(decodedCart);
    }
  }, [location]);

  return (
    <>
      <Cart prestation={cart.prestations} total={cart.total} />
      <p> {cart.prestations}</p>
    </>
  );
}

export default RendezVous;
