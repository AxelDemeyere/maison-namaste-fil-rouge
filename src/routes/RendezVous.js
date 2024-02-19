import Cart from "../components/Cart";

function RendezVous({ ...cart }) {
  console.log(cart);
  return (
    <>
      <Cart prestations={cart} />
      <div>
        {/* {cart.map((prestation) => {
          return <div key={prestation.id}>{prestation.name}</div>;
        })} */}
      </div>
    </>
  );
}

export default RendezVous;
