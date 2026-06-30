function InputField({
  label,
  type,
  placeholder,
  rightElement,
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label}
      </label>

      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        {rightElement && (
          <div className="absolute inset-y-0 right-3 flex items-center">
            {rightElement}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputField;