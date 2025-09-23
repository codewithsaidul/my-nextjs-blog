
async function page  () {
    const res = await fetch("http://localhost:5000/products", {
      next: {
        revalidate: 30
      }
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