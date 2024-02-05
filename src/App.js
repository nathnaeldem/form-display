import { useState } from 'react';
import Form from './Components/Form/Form';
import List from './Components/List/List';
function App() {
 const [listData,SetList]=useState([])
  const handleFormSubmit = (form) => {
    // Handle the form data in the App component
    console.log('Form data received in App:', form);
    SetList((prevUs)=>{
      return [...prevUs,{...form,id:Math.random().toString()}];
    });
  };
console.log('listdataww',listData)

  return (
    <div>
      <Form onSubmitCallback={handleFormSubmit} />
      
        <List data={listData}/>
  
    </div>
  );
}

export default App;
