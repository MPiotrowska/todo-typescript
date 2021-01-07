import React from 'react';
import Modal from 'react-modal';
import { uuid } from 'uuidv4';

import { Todo, useTodoDispatch } from '../../lib/todoContext';

export const AddForm = () => {
  // var subtitle;

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [inputValue, setInputValue]= React.useState("");
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: uuid(),
        text: inputValue,
        completed: false
      },
    });
    setInputValue("")
    setIsOpen(false);

  }

  const dispatch = useTodoDispatch();

  const handleChange = (e: any) => {
    setInputValue(e.currentTarget.value)
  }


  return (
    <div>
      <button onClick={openModal}>New todo</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel='Example Modal'
      >
        <button onClick={closeModal} >Add todo</button>

        <form onSubmit={closeModal}>
          <input value={inputValue} onChange={handleChange}/>
        </form>
      </Modal>
    </div>
  );
};
