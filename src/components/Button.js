const Button = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="px-5 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg hover:from-green-500 hover:to-green-700 transition shadow-lg"
  >
    {label}
  </button>
);

export default Button;
