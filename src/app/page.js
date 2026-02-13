import About from "./components/about";
import PopularDishes from "./components/populardishes";
import Visit from "./components/visit";
import Header from "./components/header";
import GroupsAndCatering from "./components/groupsAndCatering";
import UpdatesAndHappenings from "./components/updatesAndHappenings";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col bg-rustic-wood bg-repeat">
      <Header />

      <About />
      <section className="w-full h-[150px] bg-cover lg:h-[275px] lg:bg-contain bg-flying-ducks"></section>
      <section className="m-auto w-full lg:w-3/4">
        <PopularDishes />
      </section>
      <section className="w-full h-[150px] bg-cover lg:h-[275px] lg:bg-contain bg-flying-ducks"></section>
      <section className="lg:w-[95%] lg:m-auto">
        <Visit />
      </section>
      <GroupsAndCatering />
      <UpdatesAndHappenings />
    </main>
  );
}
