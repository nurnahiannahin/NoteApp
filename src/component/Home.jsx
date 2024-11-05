import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addToPaste, updateToPaste } from '../redux/pasteSlice';
import { useSelector } from 'react-redux'
const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");

    const dispatch = useDispatch();

    const allPastes = useSelector((state) => state.paste.pastes);

    useEffect(() => {
      if(pasteId) {
        const paste = allPastes.find((p) => p._id === pasteId);
        setTitle(paste.title);
        setValue(paste.value);
      }
    }, [pasteId])

    function createPaste() {
      const paste = {
        title: title,
        value: value,
        _id: pasteId || Date.now().toString(36),
        createdAt: new Date().toISOString(),
      } 
      if(pasteId) {
        // update
        dispatch(updateToPaste(paste));
      } else {
        //create 
        dispatch(addToPaste(paste));
      }

      setTitle('');
      setValue('');
      setSearchParams({});
    }
  return (
    <div>
       <div className='flex flex-row gap-5 mt-7 place-content-between'>
        <input className='p-3 rounded-xl mt-3 min-w-[450px]'
        type='text'
        placeholder='Enter title here'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <button 
          onClick={createPaste}
          className='p-3 rounded-xl mt-3 bg-rose-900 text-white rounded-2xl px-10 py-2'>
          {
            pasteId ? "Update paste" : "Create Paste"
          }
        </button>
      </div>
      <div className='mt-7'>
        <textarea className='p-4 min-w-[650px] rounded-xl'
          value={value}
          placeholder='Enter text here'
          rows={15}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Home
