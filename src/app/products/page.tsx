
async function page  () {
    const res = await fetch("http://localhost:5000/products", {
      cache: "no-store"
    });
    const products = await res.json()
    console.log(products)
  return (
    <div>
       <h1>All Products Page</h1>
   </div>
  );
};



export default page