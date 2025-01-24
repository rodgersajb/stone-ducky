
import About from "./components/about";
import PopularDishes from "./components/populardishes";
import Visit from "./components/visit";
import Header from "./components/header";
import GroupsAndCatering from "./components/groupsAndCatering";
import UpdatesAndHappenings from "./components/updatesAndHappenings";

export default function Home() {
  return (
    <main className="bg-whiteBG w-full overflow-x-hidden flex flex-col ">
      <Header />

      <About />

      <section className="lg:w-[95%] lg:m-auto">
        <PopularDishes />
      </section>
      <section className="lg:w-[95%] lg:m-auto">
        <Visit />
      </section>
     <GroupsAndCatering />
    <UpdatesAndHappenings />
      
     
    </main>
  );
}
