import Datepicker from "react-tailwindcss-datepicker";
import firebase_app from "../../../firebase";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";

export default function AddUser() {
  const [value, setValue] = useState({
    startDate: "",
    endDate: "",
  });

  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    name: "",
    class: "Select Class",
    level: "Select Level",
    startDate: "",
    endDate: "",
  });
  const [errorFlag, setErrorFlag] = useState({
    class: false,
    level: false,
    dueDate: false,
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleValueChange = (newValue) => {
    setFormState({
      ...formState,
      startDate: newValue.startDate,
      endDate: newValue.endDate,
    });
    setValue(newValue);
  };

  const handleForm = async (event) => {
    event.preventDefault();
    setErrorFlag({ class: false, level: false, dueDate: false });
    setErrorMsg("");
    setSuccessMsg("");
    let isError = false;
    let _errorFlag = { class: false, level: false, dueDate: false };
    const { email, password, name, level, startDate, endDate } = formState;
    if (formState.class == "Select Class") {
      isError = true;
      _errorFlag.class = true;
    }
    if (level == "Select Level") {
      isError = true;
      _errorFlag.level = true;
    }
    if (startDate == "" || endDate == "") {
      isError = true;
      _errorFlag.dueDate = true;
    }
    if (isError == false) {
      const auth = getAuth(firebase_app);
      console.log(auth);
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          const db = getFirestore(firebase_app);
          await setDoc(doc(db, "users", user.uid), {
            name,
            class: formState.class,
            level,
            startDate,
            endDate,
          })
            .then(() => {
              setSuccessMsg("User Added");
              setFormState({
                email: "",
                password: "",
                name: "",
                class: "Select Class",
                level: "Select Level",
                startDate: "",
                endDate: "",
              });
              setValue({
                startDate: "",
                endDate: "",
              });
            })
            .catch((error) => {
              const errorMessage = error.message;
              setErrorMsg(errorMessage);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    }
    setErrorFlag(_errorFlag);
  };

  const handleOnchange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  console.log(formState);

  return (
    <>
      <div>
        <h2>
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border ${
              open ? "border-b-0" : ""
            } border-gray-200 rounded-t-xl focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800`}
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
            onClick={() => setOpen(!open)}
          >
            <span>Add New User?</span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className={`${open ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 ">
            <section className="bg-white dark:bg-gray-900">
              <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  User Details
                </h2>
                <form onSubmit={handleForm}>
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="sm:col-span-2">
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        User Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@flowbite.com"
                        required
                        onChange={(e) => handleOnchange(e)}
                        value={formState.email}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        User Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        placeholder="pass@123"
                        onChange={(e) => handleOnchange(e)}
                        value={formState.password}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Name"
                        required
                        onChange={(e) => handleOnchange(e)}
                        value={formState.name}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="class"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Class
                      </label>
                      <select
                        id="class"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        onChange={(e) => {
                          handleOnchange(e);
                        }}
                        required
                        value={formState.class}
                      >
                        <option selected="" value="">
                          Select Class
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                      {errorFlag.class ? (
                        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                          <span class="font-medium">Oops!</span> Choose Class!
                        </p>
                      ) : null}
                    </div>
                    <div>
                      <label
                        htmlFor="level"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Level
                      </label>
                      <select
                        id="level"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        onChange={(e) => {
                          handleOnchange(e);
                        }}
                        required
                        value={formState.level}
                      >
                        <option selected="" value="">
                          Select Level
                        </option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                      </select>
                      {errorFlag.level ? (
                        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                          <span class="font-medium">Oops!</span> Choose Level!
                        </p>
                      ) : null}
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="duedate"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Due Date
                      </label>
                      <Datepicker
                        value={value}
                        onChange={handleValueChange}
                        useRange={false}
                      />
                      {errorFlag.dueDate ? (
                        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                          <span class="font-medium">Oops!</span> Choose Due
                          Date!
                        </p>
                      ) : null}
                      {errorMsg !== "" ? (
                        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                          <span class="font-medium">Oops!</span> {errorMsg}
                        </p>
                      ) : null}
                      {successMsg !== "" ? (
                        <p class="mt-2 text-sm text-green-600 dark:text-green-500">
                          <span class="font-medium">Alright!</span> {successMsg}
                          !
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-2 float-right"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                    Add User
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
