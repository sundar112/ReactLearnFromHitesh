/** @format */

import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
	const [length, setLength] = useState(8);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [charAllowed, setCharAllowed] = useState(false);
	const [Password, setPassword] = useState('');

  //useRef hook
  const passwordRef = useRef(null)

	const passwordGenerator = useCallback(() => {
		let pass = '';
		let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		if (numberAllowed) str += '0123456789';
		if (charAllowed) str += '!@#$%&*';

		for (let i = 1; i <= length; i++) {
			let char = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(char);
		}
		setPassword(pass);
	}, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {passwordRef.current?.select(), window.navigator.clipboard.writeText(Password)}, [Password])

	useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator]);

	return (
		<>
			<div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-orange-600 bg-gray-700'>
				<h1 className='text-white text-center my-3'>Password Generator</h1>
				<div className='flex shadow rounded-lg overflow-hidden mb-4'>
					<input
						type='text'
						value={Password}
						className='outline-none w-full py-1 px-3'
						placeholder='password'
						readOnly
            ref={passwordRef}
					/>
					<button onClick={copyPasswordToClipboard} className=' outline-none bg-blue-700 text-white px-2 py-2 shrink-0 hover:bg-sky-400'>
						Copy
					</button>
				</div>
				<div className='flex text-sm gap-x-2'>
					<div className='flex items-center gap-x-1'>
						<input
							type='range'
							min={6}
							max={100}
							value={length}
							className='cursor-pointer mt-1'
							onChange={(event) => {
								setLength(event.target.value);
							}}
						/>
						<label>Length: {length}</label>
					</div>
					<div className='flex items-center gap-x-1'>
						<input
							className='mt-1'
							type='checkbox'
							defaultChecked={numberAllowed}
							id='numberInput'
							onChange={() => {
								setNumberAllowed((prev) => !prev);
							}}
						/>
						<label>Numbers</label>
					</div>
					<div className='flex items-center gap-x-1'>
						<input
							className='mt-1'
							type='checkbox'
							defaultChecked={charAllowed}
							id='charInput'
							onChange={() => {
								setCharAllowed((prev) => !prev);
							}}
						/>
						<label>characters</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
