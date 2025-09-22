import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-7xl text-rose-500">My Nextjs Blog</h1>

      {/* <div>
        <h2 className="text-2xl font-bod mb-5">Normal Image</h2>
        <img
          src="https://images.pexels.com/photos/5615067/pexels-photo-5615067.jpeg"
          alt="next image"
          width={500}
          height={500}
          className="mx-auto"
        />
      </div> */}

      <div>
        <h2 className="text-2xl font-bod mb-5">Next Optimized Image</h2>
        <Image
          src="https://images.pexels.com/photos/5615067/pexels-photo-5615067.jpeg"
          alt="next image"
          width={500}
          height={500}
          className="mx-auto"
        />
      </div>
    </div>
  );
}
