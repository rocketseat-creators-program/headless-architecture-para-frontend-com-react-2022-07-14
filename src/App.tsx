import { FilterButton } from "./components/FilterButton";
import { SmartphoneItem } from "./components/SmartphoneItem";

function App() {
  return (
    <div className="">
      <section className="max-w-5xl m-auto shadow-lg py-24 mt-12">
        <h1 className="text-center text-3xl text-blue-700 font-bold">
          Celulares a Preço de Fábrica
        </h1>

        <div className="flex w-full space-x-6 mt-12">
          <div className="flex flex-col shadow items-center p-6 w-full">
            <label className="text-lg font-bold">Armazenamento</label>
            <div className="flex space-x-2 mt-6">
              <FilterButton onClick={() => {}}>Todos</FilterButton>
              <FilterButton onClick={() => {}}>64GB</FilterButton>
              <FilterButton onClick={() => {}}>128GB</FilterButton>
              <FilterButton onClick={() => {}}>256GB</FilterButton>
            </div>
          </div>

          <div className="flex flex-col shadow items-center p-6 w-full">
            <label className="text-lg font-bold">Marca</label>
            <div className="flex space-x-2 mt-6">
              <FilterButton onClick={() => {}}>Todas</FilterButton>
              <FilterButton onClick={() => {}}>Apple</FilterButton>
              <FilterButton onClick={() => {}}>Samsung</FilterButton>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-around space-y-12 mt-12">
          <SmartphoneItem
            data={{
              id: "1",
              image:
                "https://images.unsplash.com/photo-1592950630581-03cb41342cc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
              manufacturer: "Apple",
              memory: "64GB",
              name: "Iphone X",
              price: "R$ 1.999,00",
              storage: "64GB",
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
