const DataDisplay = ({ data }) => (
  <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-6 rounded-xl shadow-md">
    <h2 className="text-xl font-semibold mb-4 text-gray-800">Submitted Data</h2>
    {data.length > 0 ? (
      <ul className="space-y-3">
        {data.map((item, index) => (
          <li
            key={index}
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:scale-105"
          >
            {item}
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-500">No data has been submitted yet.</p>
    )}
  </div>
);

export default DataDisplay;
