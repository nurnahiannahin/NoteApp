import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addToPaste, updateToPaste } from '../redux/pasteSlice';
import { useSelector } from 'react-redux'

const ViewPaste = () => {

  const {id} = useParams()

  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.filter((p) => p._id === id)[0];

  console.log(paste)


  return (
    <div>
       <div className='flex flex-row gap-5 mt-7 place-content-between'>
        <input className='p-3 rounded-xl mt-3 min-w-[450px]'
        type='text'
        placeholder='Enter title here'
        disabled
        value={paste.title}
        onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='mt-7'>
        <textarea className='p-4 min-w-[650px] rounded-xl'
          value={paste.value}
          disabled
          placeholder='Enter text here'
          rows={15}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}

export default ViewPaste
