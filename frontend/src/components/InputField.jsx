function InputField({ label, type, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />
    </div>
  )
}

export default InputField