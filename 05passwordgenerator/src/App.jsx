import { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback( () => {
    let str = "ABCDEFGHIJKLMNOPQRSTYWZabcdefghijklmnopkrstuvwxyz";
    let pass = "";

    if (numberAllowed) str += "1234567890";
    if (characterAllowed) str += "+_!@#$%^&*()_}{[]|";

    for (let i = 0; i <= length; i++) {
      let newPass = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(newPass);
    }

    setPassword(pass);
  },[length,numberAllowed,characterAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,10);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed]);

  return (
    <div className="bg-black h-screen w-full mx-auto ">
      <div className="bg-gray-700 w-1/3  mx-auto rounded-lg py-3">
        <div className="text-center text-4xl text-orange-700">
          password Generator
        </div>
        <div className="flex gap-3 mt-2">
          <input
            type="text"
            className="w-full rounded-md"
            value={password}
            placeholder="Password"
            ref={passwordRef}
            readOnly
          />
          <button
            className="bg-white px-4 py-2 rounded-md text-black"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="mt-2 flex items-center justify-between px-3 ">
          <div className="flex items-center gap-3 ">
            <input
              type="range"
              className="w-full rounded-md"
              min={6}
              max={100}
              value={length || null}
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-green-700">Length({length})</label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="w-full rounded-md"
              value={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label className="text-green-700">Number</label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="w-full rounded-md"
              value={characterAllowed}
              onChange={() => setCharacterAllowed((prev) => !prev)}
            />
            <label className="text-green-700">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
