import { useState } from "react";
import { categories } from "/src/assets/category.js";

export default function AuthForm({ handleSubmitForm }) {
  const defaultFomData = {
    url: "",
    color: "",
    category: "",
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(defaultFomData);

  const [inputErrors, setInputErrors] = useState({
    url: "",
    color: "",
    category: "",
    username: "",
    password: "",
  });

  // const [touched, setTouched] = useState({
  //   url: false,
  //   color: false,
  //   category: false,
  //   username: false,
  //   password: false,
  // });

  const validationRules = {
    url: (value) => {
      if (!value.trim()) return "URL is required";
      if (!/^https?:\/\/.+\..+/.test(value)) return "Please enter a valid URL";
      return "";
    },
    color: (value) => {
      if (!value.trim()) return "Color is required";
      if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value))
        return "Please enter a valid hex color (e.g., #ff0000)";
      return "";
    },
    category: (value) => {
      if (!value.trim()) return "Category is required";
      return "";
    },
    username: (value) => {
      if (!value.trim()) return "Username is required";
      if (value.length < 3) return "Username must be at least 3 characters";
      return "";
    },
    password: (value) => {
      if (!value.trim()) return "Password is required";
      if (value.length < 6) return "Password must be at least 6 characters";
      return "";
    },
  };

  const validateFormField = (name, value) => {
    return validationRules[name] ? validationRules[name](value) : "";
  };

  function handleInputChange(e) {
    const { name, value } = e.target;
    console.log(name, value);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate immediately on every keystroke
    const error = validateFormField(name, value);
    setInputErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    // if (touched[name]) {
    //   const error = validateFormField(name, value);
    //   setInputErrors((prev) => ({
    //     ...prev,
    //     [name]: error,
    //   }));
    // }
  }
  function handleClear() {
    setFormData(defaultFomData);
  }

  return (
    <>
      <div className="max-w-7xl mx-auto mt-8 px-4">
        <htmlForm className="mb-10 rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/70 to-neutral-800/40 p-8 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="mb-8 flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              New bookmark
            </p>
            <h2 className="text-2xl font-semibold">
              Store website credentials safely
            </h2>
            <p className="text-sm text-neutral-400">
              Fill the details below. Your brand color helps us render a
              matching favicon.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* <!-- Website URL Input --> */}
              <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Website URL
                </span>
                <input
                  type="url"
                  name="url"
                  value={formData.url}
                  onChange={handleInputChange}
                  placeholder="https://example.com"
                  className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
                  required
                />
                {inputErrors.url && (
                  <span className="text-xs text-orange-600">
                    {inputErrors.url}
                  </span>
                )}
              </label>

              {/* <!-- Color Picker --> */}
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Favicon color
                    </p>
                    <p className="text-xs text-neutral-500">
                      Select the accent color we should render.
                    </p>
                  </div>
                  <input
                    type="color"
                    name="color"
                    value={formData.color}
                    onChange={handleInputChange}
                    className="h-12 w-12 cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 p-1 shadow-inner shadow-black/50"
                    readOnly
                  />
                </div>
                <div className="mt-5 flex items-center gap-3 text-xs text-neutral-500">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800/80 text-[10px] font-semibold uppercase text-neutral-400">
                    Hex
                  </span>
                  {inputErrors.color && (
                    <span className="text-xs text-orange-600">
                      {inputErrors.color}
                    </span>
                  )}
                </div>
              </div>

              {/* <!-- Category Select --> */}
              <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Category
                </span>
                <select
                  onChange={handleInputChange}
                  value={formData.category}
                  name="category"
                  className="w-full bg-transparent text-base text-white outline-none"
                  required
                >
                  {categories.map((category) => (
                    <option
                      key={category.id}
                      className="bg-neutral-900 text-white"
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
                {inputErrors.category && (
                  <span className="text-xs text-orange-600">
                    {inputErrors.category}
                  </span>
                )}
              </label>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* <!-- Username Input --> */}
              <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Username
                </span>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Enter username"
                  className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
                  required
                />
                {inputErrors.username && (
                  <span className="text-xs text-orange-600">
                    {inputErrors.username}
                  </span>
                )}
              </label>

              {/* <!-- Password Input --> */}
              <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Password
                </span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                  className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
                  required
                />
                {inputErrors.password && (
                  <span className="text-xs text-orange-600">
                    Choose at least 6 characters.
                  </span>
                )}
              </label>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-xs text-neutral-500">
              By submitting you confirm the entry is safe to store.
            </div>
            <div className="flex flex-1 justify-end gap-3">
              <button
                type="reset"
                onClick={handleClear}
                className="w-full rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:border-neutral-500 hover:text-white md:w-auto"
              >
                Clear
              </button>
              <button
                type="submit"
                onClick={() => {
                  handleSubmitForm(
                    formData,
                    validateFormField,
                    defaultFomData,
                    inputErrors,
                    setInputErrors
                  );
                }}
                className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 md:w-auto"
              >
                Add Bookmark
              </button>
            </div>
          </div>
        </htmlForm>
      </div>
    </>
  );
}
