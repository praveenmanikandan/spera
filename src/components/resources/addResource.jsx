import firebase_app from "../../../firebase";
import { useState, useRef } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  setDoc,
  doc,
  addDoc,
  collection,
  Firestore,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default function AddResources() {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    authorization: [{ class: "", level: "" }],
    resourceUrl: "",
    selectedFile: "",
  });
  const [errorFlag, setErrorFlag] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const fileRef = useRef();

  const handleForm = async (event) => {
    event.preventDefault();
    setErrorFlag(false);
    setErrorMsg("");
    setSuccessMsg("");

    const { name, description, authorization, resourceUrl, selectedFile } =
      formState;

    if (selectedFile != "") {
      setIsUploading(true);
      const storage = getStorage();
      const timestampString = String(new Date().getTime());

      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(
        storage,
        "resources/" + timestampString + "-" + selectedFile.name
      );
      const uploadTask = uploadBytesResumable(storageRef, selectedFile);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          setErrorMsg(error.message);
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDocument(downloadURL);
            setIsUploading(false);
            // console.log("File available at", downloadURL);
          });
        }
      );
    } else if (resourceUrl !== "") {
      await addDocument();
    } else {
      setErrorFlag(true);
    }
  };

  const addDocument = async (docUrl = "") => {
    const { name, description, authorization, resourceUrl, selectedFile } =
      formState;
    const db = getFirestore(firebase_app);
    await addDoc(collection(db, "resources"), {
      name,
      description,
      authorization,
      resourceUrl,
      docUrl,
      visibility: true,
      timestamp: new Date().toTimeString(),
    })
      .then(() => {
        setSuccessMsg("Resource Added");
        setFormState({
          name: "",
          description: "",
          authorization: [{ class: "", level: "" }],
          resourceUrl: "",
          selectedFile: "",
        });
        fileRef.current.value = "";
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
  };

  const handleOnchange = (e) => {
    if (e.target.id === "resourceUrl") {
      setFormState({
        ...formState,
        [e.target.id]: e.target.value,
        selectedFile: "",
      });
    } else {
      setFormState({
        ...formState,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSelect = (e, index) => {
    const temp = formState.authorization;
    if (e.target.id[0] == "c") {
      temp[index].class = e.target.value;
    } else {
      temp[index].level = e.target.value;
    }

    setFormState({
      ...formState,
      authorization: temp,
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormState({
        ...formState,
        selectedFile: file,
        resourceUrl: "",
      });
    }
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
            <span>Add New Resource?</span>
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
                  New Resource Details
                </h2>
                <form onSubmit={handleForm}>
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
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

                    <div className="sm:col-span-2">
                      <label
                        for="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        rows="4"
                        required
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Leave resource description..."
                        onChange={(e) => handleOnchange(e)}
                        value={formState.description}
                      ></textarea>
                    </div>

                    <div className="sm:col-span-2">
                      <div className="flex flex-row">
                        <label
                          for="message"
                          className="block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Authorization
                        </label>
                        <button
                          type="button"
                          className="px-5 py-1 ml-2 mr-2 text-sm font-medium text-center text-green-700 border border-green-700 rounded-lg hover:text-white hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                          onClick={() => {
                            const temp = formState.authorization;
                            temp.push({ class: "", level: "" });
                            setFormState({ ...formState, authorization: temp });
                          }}
                        >
                          Add
                        </button>
                        <button
                          type="button"
                          className="px-5 py-1 mr-2 text-sm font-medium text-center text-red-700 border border-red-700 rounded-lg hover:text-white hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                          onClick={() => {
                            if (formState.authorization.length > 1) {
                              const temp = formState.authorization;
                              temp.pop();
                              setFormState({
                                ...formState,
                                authorization: temp,
                              });
                            }
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {formState.authorization.map((_auth, index) => {
                      return (
                        <>
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
                                handleSelect(e, index);
                              }}
                              required
                              value={_auth.class}
                            >
                              <option selected="" value="">
                                Select Class
                              </option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
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
                                handleSelect(e, index);
                              }}
                              required
                              value={_auth.level}
                            >
                              <option selected="" value="">
                                Select Level
                              </option>
                              <option value="A">A</option>
                              <option value="B">B</option>
                              <option value="C">C</option>
                              <option value="D">D</option>
                            </select>
                          </div>
                        </>
                      );
                    })}

                    <div>
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        for="user_avatar"
                      >
                        Upload a document / Enter Video URL
                      </label>
                      <div className="flex flex-row">
                        <input
                          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          aria-describedby="user_avatar_help"
                          id="user_avatar"
                          type="file"
                          accept=".pdf, .doc"
                          onChange={handleFileUpload}
                          ref={fileRef}
                        />
                        <p className="ml-5 text-white">or</p>
                      </div>
                    </div>

                    <div>
                      <input
                        type="text"
                        id="resourceUrl"
                        className="bg-gray-50 mt-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Enter Video URL"
                        onChange={(e) => handleOnchange(e)}
                        value={formState.resourceUrl}
                      />
                    </div>

                    {errorFlag ? (
                      <p class=" text-sm text-red-600 dark:text-red-500 col-span-2">
                        <span class="font-medium">Oops!</span> Either upload a
                        document or enter a video URL!
                      </p>
                    ) : null}

                    {!!errorMsg ? (
                      <p class=" text-sm text-red-600 dark:text-red-500 col-span-2">
                        <span class="font-medium">Oops!</span> {errorMsg}
                      </p>
                    ) : null}

                    {!!successMsg ? (
                      <p class=" text-sm text-green-600 dark:text-green-500 col-span-2">
                        <span class="font-medium">Success!</span> {successMsg}
                      </p>
                    ) : null}
                  </div>

                  {isUploading ? (
                    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-5">
                      <div
                        class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                        style={{ width: `${uploadProgress.toFixed(2)}%` }}
                      >
                        {" "}
                        {uploadProgress.toFixed(2)}% Uploaded
                      </div>
                    </div>
                  ) : (
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
                      Add Resource
                    </button>
                  )}
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
