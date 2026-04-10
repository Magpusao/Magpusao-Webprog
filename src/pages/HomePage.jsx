import Button from '../components/Button';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-green-900 bg-green-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-green-500">
              Welcome
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-green-900 sm:text-4xl">
              Welcome to the Matcha Gallery
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-green-600 sm:text-base">
              Dive into the world's most vibrant, delicious, and deeply satisfying green tea. Explore our carefully curated collection of the finest matcha creations.
            </p>
            <div className="mt-6">
              <Button to="/about" variant="primary">
                Taste More
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-green-300 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-center overflow-hidden rounded-[1.25rem] bg-green-100 aspect-video">
              <img src="https://ychef.files.bbci.co.uk/1280x720/p0lgrs69.jpg" alt="Matcha preparation" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-green-900 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-green-500">
            Tea Stats
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-green-900">
            Our Global Impact
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border-2 border-green-900 bg-green-50 p-5 shadow-sm hover:shadow-md transition">
            <p className="text-2xl font-bold text-green-900">1M+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-green-500">
              Cups Brewed
            </p>
          </div>

          <div className="rounded-3xl border-2 border-green-900 bg-green-50 p-5 shadow-sm hover:shadow-md transition">
            <p className="text-2xl font-bold text-green-900">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-green-500">
              Regions
            </p>
          </div>

          <div className="rounded-3xl border-2 border-green-900 bg-green-50 p-5 shadow-sm hover:shadow-md transition">
            <p className="text-2xl font-bold text-green-900">24/7</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-green-500">
              Sipping
            </p>
          </div>

          <div className="rounded-3xl border-2 border-green-900 bg-green-50 p-5 shadow-sm hover:shadow-md transition">
            <p className="text-2xl font-bold text-green-900">04</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-green-500">
              Grades
            </p>
          </div>
        </div>
      </section>
    
    <section className="border-y-2 border-green-900 bg-green-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-green-500">
            Featured Creations
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-green-900">
            Hall of Flavor
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">

          <article className="rounded-3xl border-2 border-green-900 bg-white p-4 shadow-lg hover:-translate-y-1 transition duration-300">
            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-green-100">
              <img src="https://cdn.loveandlemons.com/wp-content/uploads/2023/06/iced-matcha-latte.jpg" alt="Iced Matcha Latte" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-green-900">
              The Perfect Iced Latte
            </h3>
            <p className="mt-3 text-sm leading-6 text-green-600">
              Smooth, creamy, and vibrantly green. The quintessential modern matcha drink.
            </p>
            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-green-900 bg-white p-4 shadow-lg hover:-translate-y-1 transition duration-300">
            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-green-100">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqcidksiLXdDigwsERb0Gpe1ExLt1OFpEX8w&s" alt="Matcha Dessert" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-green-900">
              Matcha Dessert Heaven
            </h3>
            <p className="mt-3 text-sm leading-6 text-green-600">
              A delicate balance of earthy green tea and rich sweetness that melts in your mouth.
            </p>
            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-green-900 bg-white p-4 shadow-lg hover:-translate-y-1 transition duration-300">
            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-green-100">
              <img src="https://abeautifulmess.com/wp-content/uploads/2024/04/matcha-boba-recipe.jpg" alt="Matcha Boba" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-green-900">
              The Boba Champion
            </h3>
            <p className="mt-3 text-sm leading-6 text-green-600">
              Chewy tapioca pearls meet premium matcha for the ultimate refreshing treat.
            </p>
            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
}

export default HomePage;