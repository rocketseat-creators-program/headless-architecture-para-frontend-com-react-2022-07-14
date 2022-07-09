export interface ISmartphone {
  id: string;
  name: string;
  price: string;
  manufacturer: string;
  image: string;
  memory: string;
  storage: string;
}

export const SmartphoneItem = ({ data }: { data: ISmartphone }) => {
  const { image, manufacturer, memory, name, price, storage } = data;

  return (
    <div className="shadow-2xl rounded w-fit flex flex-col items-center p-5">
      <p>{name}</p>
      <p>Price: {price}</p>
      <p>Manufacturer: {manufacturer}</p>
      <img src={image} alt="Apple Iphone" className="w-52 h-full" />
      <p>Memory: {memory}</p>
      <p>Storage: {storage}</p>

      <a
        href="#"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
      >
        Comprar
      </a>
    </div>
  );
};
