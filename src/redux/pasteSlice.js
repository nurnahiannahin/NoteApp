import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
    pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state, action) => {
      // add recieved value to a variable
      const paste = action.payload;
      // push paste to storage pastes list
      state.pastes.push(paste);
      // to local storage
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste created succesfully");
    },
    updateToPaste: (state, action) => {
      //get
      const paste = action.payload
      // searching paste in storage
      const index = state.pastes.findIndex((item) => item._id === paste._id);

      if(index >= 0) {
        state.pastes[index] = paste;

        localStorage.setItem("pastes",
          JSON.stringify(state.pastes)
        );

        toast.success("Paste updated");
      }
    },
    resetAllPaste: (state, action) => {
      state.pastes = [];

      localStorage.removeItem("pastes");
    },
    removeFromPaste: (state, action) => {
      const pasteId = action.payload

      const index = state.pastes.findIndex((item) => item._id === pasteId);

      if (index >= 0) {
        state.pastes.splice(index, 1);

        localStorage.setItem("pastes", 
          JSON.stringify(state.pastes)
        );

        toast.success("Pastes deleted");
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetAllPaste, removeFromPaste } = pasteSlice.actions

export default pasteSlice.reducer