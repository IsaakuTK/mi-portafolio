import { useState } from 'react';

export const useBoolean = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  const toggle = () => setValue(prev => !prev);
  const reset = () => setValue(initialValue);

  return {
    value,
    setValue,
    setTrue,
    setFalse,
    toggle,
    reset
  };
};


//USE-------->
// function Componente() {
//     const modal = useBoolean(false);
  
//     return (
//       <div>
//         <button onClick={modal.setTrue}>Abrir modal</button>
//         <button onClick={modal.setFalse}>Cerrar modal</button>
//         <button onClick={modal.toggle}>Alternar modal</button>
        
//         {modal.value && <Modal onClose={modal.setFalse} />}
//       </div>
//     );
//   }