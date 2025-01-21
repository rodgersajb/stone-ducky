
import CaterComponent from "./components/caterComponent";

export const metadata = {
  title: "Catering ",
  description:
    "Planning an event? Stone Ducky offers full-service catering with a menu crafted to your needs. Conveniently located near St. John’s for seamless event planning",
};

export default async function Cater() {
  return (
    <main className="overflow-x-hidden">
      <CaterComponent />
      
      
    </main>
  );
}
