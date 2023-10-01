import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    {/* Add navigation  */}
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      Hero
    </section>
    <section className="padding">
      PopularProducts
    </section>
    <section className="padding">
      SuperQuality
    </section>
    <section className="padding-x py-10">
      Services
    </section>
    <section className="padding">
      SpecialOffers
    </section>
    <section className="padding bg-pale-blue">
      CustomerReviews
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      Subscribe
    </section>
    <section className="padding-x padding-y bg-black pb-t">
      Footer
    </section>
  </main>
);

export default App;
