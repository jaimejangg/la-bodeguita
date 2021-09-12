export default function Card({ lineName, productName, img }) {
  return (
    <div
      key={"ia"}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
    >
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={img} alt="" />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-blueDark">{lineName}</p>
          <p className="text-xl font-semibold text-gray-900">{productName}</p>
        </div>
      </div>
    </div>
  );
}
