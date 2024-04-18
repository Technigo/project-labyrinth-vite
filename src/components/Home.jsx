import { useState, useEffect, useRef } from "react";
import { useUserStore } from "../stores/useUserStore";
import { Labyrinth } from "./Labyrinth";

export const Home = () => {
  const { userName, setUserName } = useUserStore();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUserName = inputRef.current.value;
    setUserName(newUserName);
    setIsSubmitted(true);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      {!isSubmitted && (
        <form onSubmit={handleSubmit}>
          <label>
            Enter your username:
            <input
              type="text"
              ref={inputRef}
              defaultValue={userName}
              placeholder="New username"
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
      {isSubmitted && <Labyrinth />}
    </div>
  );
};

// import { useEffect, useRef } from "react";
// import { useUserStore } from "../stores/useUserStore";

// export const UserInfo = () => {
//   const { userName, setUserName } = useUserStore();
//   const inputRef = useRef(null);

//   console.log("userName:", userName);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Update the global state with the input's current value
//     const newUserName = inputRef.current.value;
//     setUserName(newUserName);
//   };

//   // const handleUserNameChange = (event) => {
//   //   setUserName(event.target.value);
//   // };

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Enter your username:
//           <input
//             type="text"
//             ref={inputRef}
//             defaultValue={userName} // Set initial value to userName, not controlling ongoing input changes
//             placeholder="New username"
//             // onChange={handleUserNameChange}
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };
