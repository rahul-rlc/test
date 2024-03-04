import {
  Howwedoit,
  Pricesection,
  Ourservices,
  Aboutus,
  Portfolio,
  Herosection,
  Whyus,
  OurClients,
} from "@/component";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 md:gap-20">
      <Herosection />
      <Portfolio />
      <Whyus />
      <Ourservices />
      <Aboutus />
      <Howwedoit />
      <Pricesection />
      <OurClients />
    </main>
  );
}
