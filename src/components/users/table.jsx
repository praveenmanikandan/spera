import { useEffect, useReducer, useState } from "react";
import firebase_app from "../../../firebase";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import UserRow from "./row";

let _users = [];

export default function Table() {
  const [users, setUsers] = useState([]);
  const [formState, setFormState] = useState({
    name: "",
    class: "",
    level: "",
  });

  const handleOnchange = (e) => {
    const name =
      e.target.id === "name" ? e.target.value.toLowerCase() : formState.name;
    const classValue =
      e.target.id === "class" ? e.target.value.toLowerCase() : formState.class;
    const level =
      e.target.id === "level" ? e.target.value.toLowerCase() : formState.level;

    const filteredUsers = _users.filter((user) => {
      const nameMatch = user.name.toLowerCase().includes(name) || !name;
      const classMatch = user.class.toLowerCase() === classValue || !classValue;
      const levelMatch = user.level.toLowerCase() === level || !level;

      return nameMatch && classMatch && levelMatch;
    });

    setUsers(filteredUsers);
    setFormState({
      name,
      class: classValue,
      level,
    });
  };

  useEffect(() => {
    const db = getFirestore(firebase_app);
    const auth = getAuth();

    const usersCollectionRef = collection(db, "users");

    const unsubscribe = onSnapshot(usersCollectionRef, (snapshot) => {
      const updatedUsers = [];
      snapshot.forEach((doc) => {
        updatedUsers.push({ ...doc.data(), uid: doc.id });
      });
      setUsers(updatedUsers);
      _users = updatedUsers;
    });

    return () => {
      unsubscribe();
    };
  }, []);


  return (
    <div className="relative mt-4 overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mt-2"
                placeholder="Name"
                required
                onChange={(e) => handleOnchange(e)}
                value={formState.name}
              />
            </th>
            <th scope="col" className="px-6 py-3">
              Class
              <select
                id="class"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mt-2"
                onChange={(e) => {
                  handleOnchange(e);
                }}
                value={formState.class}
              >
                <option value="">Select Class</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </th>
            <th scope="col" className="px-6 py-3">
              Level
              <select
                id="level"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mt-2"
                onChange={(e) => {
                  handleOnchange(e);
                }}
                value={formState.value}
              >
                <option value="">Select Level</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </th>
            <th scope="col" className="px-6 py-3">
              Expiry Date
              <input
                type="text"
                name="date"
                id="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mt-2"
                placeholder="Not available"
                disabled
              />
            </th>
            <th scope="col" className="px-6 py-3">
              Action
              <input
                type="text"
                name="action"
                id="action"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mt-2"
                placeholder="Not available"
                disabled
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return <UserRow key={user.uid} user={user} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
