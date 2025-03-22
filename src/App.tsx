import { useState } from 'react';
import Form from './components/Form/Form';
import TItem from './models/item';
import Stats from './components/Stats/Stats';
import sortDates from './utils/sortDates';

const App = () => {
  const [form, setForm] = useState<TItem>({ date: '', km: '' });
  const [list, setList] = useState<TItem[]>([]);

  
  const handleInputChange = (currentForm: TItem) => {
    setForm(currentForm); 
  };

  
  const handleSubmit = (newForm: TItem) => {
    if (newForm.date === '' || newForm.km === '') {
      setForm(newForm); 
      return;
    }
   
    const newList = createNewList(newForm); 
    setList(newList); 
    setForm({ date: '', km: '' }); 
  };

  
  const createNewList = (newForm: TItem) => {
    let newList: TItem[] = [];
    const km = (+newForm.km).toFixed(1); 

    if (list.length) {
      const idx = list.findIndex((el) => el.date === newForm.date);
      if (idx === -1) {
        newList = [...list, { ...newForm, km }];
        sortDates(newList); 
      } else {
        newList = list.map((item, index) => {
          if (index === idx) {
            item.km = (Number(item.km) + Number(km)).toFixed(1); 
          }
          return item;
        });
      }
    } else {
      newList = [{ ...newForm, km }];
    }

    return newList;
  };

  const handleUpdateItem = (item: TItem) => {
    setList(list.filter((el) => el.date !== item.date)); 
    setForm(item); // 
  };

  const handleRemoveItem = (date: string) => {
    setList(list.filter((el) => el.date !== date)); 
  };

  return (
    <>
      <Form form={form} onInputChange={handleInputChange} onSubmit={handleSubmit} />
      <Stats list={list} onUpdate={handleUpdateItem} onRemove={handleRemoveItem} />
    </>
  );
};

export default App;
