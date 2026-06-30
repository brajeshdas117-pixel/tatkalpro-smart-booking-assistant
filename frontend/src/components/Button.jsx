function Button({ text, type = "button"}) {
    return (
        <button
            type={type}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition duration-300"
        >
            {text}
        </button>
        
    );
}

export default Button;