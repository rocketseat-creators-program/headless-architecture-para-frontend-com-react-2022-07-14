export const FilterButton = ({
  children,
  onClick,
}: {
  children: string;
  onClick: () => void;
}) => {
  return (
    <button
      className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
