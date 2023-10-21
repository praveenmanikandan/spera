import { useEffect, useReducer, useState } from "react";
import firebase_app from "../../../firebase";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import ResourceRow from "./row.jsx";

let _resources = [];

export default function Table() {
  const [resources, setResources] = useState([]);
  const [formState, setFormState] = useState({
    name: "",
  });

  const handleOnchange = (e) => {
    const name =
      e.target.id === "name" ? e.target.value.toLowerCase() : formState.name;

    const filteredResources = _resources.filter((resource) => {
      const nameMatch = resource.name.toLowerCase().includes(name) || !name;

      return nameMatch;
    });

    setResources(filteredResources);
    setFormState({
      name,
    });
  };

  useEffect(() => {
    const db = getFirestore(firebase_app);
    const auth = getAuth();

    const resourceCollectionRef = collection(db, "resources");

    const q = query(resourceCollectionRef, orderBy("timestamp"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedResources = [];
      snapshot.forEach((doc) => {
        updatedResources.push({ ...doc.data(), resourceId: doc.id });
      });
      setResources(updatedResources);
      _resources = updatedResources;
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
              Description
              <input
                type="text"
                name="date"
                id="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mt-2"
                placeholder="Not available"
                required
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
                required
                disabled
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {resources.map((resource) => {
            return (
              <ResourceRow key={resource.resourceId} resource={resource} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
