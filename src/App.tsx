import { FilterButton } from "./components/FilterButton";
import { SmartphoneItem } from "./components/SmartphoneItem";
import { useSmartphones } from "./hooks/useSmartphones";

function App() {
  const { setManufacturer, setStorage, smartphones } = useSmartphones();

  return (
    <div className="">
      <section className="max-w-5xl m-auto shadow-lg py-24 mt-12">
        <h1 className="text-center text-3xl text-blue-700 font-bold">
          Celulares a Preço de Fábrica
        </h1>

        {/* <pre>{JSON.stringify({ manufacturer, storage }, null, 2)}</pre> */}

        <div className="flex w-full space-x-6 mt-12">
          <div className="flex flex-col shadow items-center p-6 w-full">
            <label className="text-lg font-bold">Armazenamento</label>
            <div className="flex space-x-2 mt-6">
              <FilterButton onClick={() => setStorage("")}>Todos</FilterButton>
              <FilterButton onClick={() => setStorage("64GB")}>
                64GB
              </FilterButton>
              <FilterButton onClick={() => setStorage("128GB")}>
                128GB
              </FilterButton>
              <FilterButton onClick={() => setStorage("256GB")}>
                256GB
              </FilterButton>
            </div>
          </div>

          <div className="flex flex-col shadow items-center p-6 w-full">
            <label className="text-lg font-bold">Marca</label>
            <div className="flex space-x-2 mt-6">
              <FilterButton onClick={() => setManufacturer("")}>
                Todas
              </FilterButton>
              <FilterButton onClick={() => setManufacturer("Apple")}>
                Apple
              </FilterButton>
              <FilterButton onClick={() => setManufacturer("Samsung")}>
                Samsung
              </FilterButton>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-around space-y-12 mt-12">
          {smartphones?.map((smartphone) => (
            <SmartphoneItem data={smartphone} key={smartphone.id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
