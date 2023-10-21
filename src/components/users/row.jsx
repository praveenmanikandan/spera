import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import firebase_app from "../../../firebase";
import { getAuth } from "firebase/auth";

export default function UserRow({ user }) {
  const [isEdit, setIsEdit] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    class: "",
    level: "",
    startDate: "",
    endDate: "",
  });

  const [value, setValue] = useState({
    startDate: "",
    endDate: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleValueChange = (newValue) => {
    setFormState({
      ...formState,
      startDate: newValue.startDate,
      endDate: newValue.endDate,
    });
    setValue(newValue);
  };

  const handleOnchange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const editUser = async function () {
    setErrorMsg("");
    const { name, level, startDate, endDate } = formState;
    if (name == "") {
      setErrorMsg("Enter a name");
    } else if (startDate == null || endDate == null) {
      setErrorMsg("Select a valid due date");
    } else {
      const db = getFirestore(firebase_app);
      const auth = getAuth();
      await setDoc(
        doc(db, "users", user.uid),
        {
          name,
          class: formState.class,
          level,
          startDate,
          endDate,
        },
        { merge: true }
      )
        .then(() => {})
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
      setIsEdit(false);
    }
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {isEdit ? (
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Name"
            onChange={(e) => handleOnchange(e)}
            value={formState.name}
          />
        ) : (
          user.name
        )}
        {isEdit && errorMsg !== "" ? (
          <p class="mt-2 text-sm text-red-600 dark:text-red-500">
            <span class="font-medium">Oops!</span> {errorMsg}
          </p>
        ) : null}
      </th>
      <td className="px-6 py-4">
        {isEdit ? (
          <select
            id="class"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            onChange={(e) => {
              handleOnchange(e);
            }}
            value={formState.class}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        ) : (
          user.class
        )}
      </td>
      <td className="px-6 py-4">
        {isEdit ? (
          <select
            id="level"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            onChange={(e) => {
              handleOnchange(e);
            }}
            value={formState.level}
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        ) : (
          user.level
        )}
      </td>
      <td className="px-6 py-4">
        {" "}
        {isEdit ? (
          <Datepicker
            value={value}
            onChange={handleValueChange}
            useRange={false}
            className="absolute"
          />
        ) : (
          String(user.startDate) + " --- " + String(user.endDate)
        )}
      </td>
      <td className="px-6 py-4">
        {isEdit ? (
          <>
            <a
              onClick={() => {
                editUser();
              }}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
            >
              Save
            </a>
            <a
              onClick={() => {
                setIsEdit(false);
              }}
              className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer ml-2"
            >
              Cancel
            </a>
          </>
        ) : (
          <a
            onClick={() => {
              setIsEdit(true);
              setFormState({
                name: user.name,
                class: user.class,
                level: user.level,
                endDate: user.endDate,
                startDate: user.startDate,
              });
              setValue({
                startDate: user.startDate,
                endDate: user.endDate,
              });
              setErrorMsg("");
            }}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
          >
            Edit
          </a>
        )}
      </td>
    </tr>
  );
}
