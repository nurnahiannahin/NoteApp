import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPaste } from '../redux/pasteSlice';
import { NavLink } from 'react-router-dom'
import toast from 'react-hot-toast';

const Paste = () => {


  const pastes = useSelector((state) => state.paste.pastes);

  console.log(pastes)

  const [searchItem, setSearchItem] = useState('');

  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) => 
    paste.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  function handleDeleteBtn(pasteId) {
    dispatch(removeFromPaste(pasteId));
  }
  return (
    <div>
      <div className='mt-8' >
        <input className='p-3 rounded-xl mt-3 min-w-[450px]'
          type='search'
          placeholder='search notes'
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>

      <div className='flex flex-col gap-5 mt-5'>
        {
          filteredData.length > 0 &&
          filteredData.map(
            (paste) => {
              return (
                <div className='border' key={paste?._id}>
                  <div>
                    {paste.title}
                  </div>
                  <div className='mt-3'>
                    {paste.value}
                  </div>
                  <div className='mt-3'>
                    <button>
                      <NavLink to={`/?pasteId=${paste?._id}`}>
                        Edit
                      </NavLink>
                    </button>
                    <button>
                      <NavLink to={`/paste/${paste?._id}`}>
                         view
                      </NavLink>
                    </button>
                    <button onClick={() => handleDeleteBtn(paste?._id)}>
                      Delete
                    </button>
                    <button onClick={() => {
                      navigator.clipboard.writeText(paste?.value)
                      toast.success("Copied from clipboard");
                    }}>
                      Copy
                    </button>
                    <button>
                      Share
                    </button>
                  </div>
                  <div className='mt-3'>
                    {paste.createdAt}
                  </div>
                </div>
              )
            }
          )

        }
      </div>
    </div>
  )
}

export default Paste
