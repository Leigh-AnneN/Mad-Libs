import React, { useState } from "react";
import './MadlibForm.css'; 

function MadlibForm({ setShowStory, createStory }) {
  const INITIAL_STATE = { noun: "", noun2: "", adjective: "", colour: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  
  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
       ...formData, 
       [name]: value }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    createStory({...formData});
    setFormData(INITIAL_STATE);
    setShowStory(true);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                required
                htmlFor='noun'
                id='noun'
                type='text'
                name='noun'
                placeholder='Noun'
                value={formData.noun}
                onChange={handleChange}
            />

            <input 
                required
                htmlFor='noun2'
                id='noun2'
                type='text'
                name='noun2'
                placeholder='Noun 2'
                value={formData.noun2}
                onChange={handleChange}
            />
             <input 
                required
                htmlFor='adjective'
                id='adjective'
                type='text'
                name='adjective'
                placeholder='Adjective'
                value={formData.adjective}
                onChange={handleChange}
            />
             <input 
                required
                htmlFor='color'
                id='color'
                type='text'
                name='color'
                placeholder='Color'
                value={formData.color}
                onChange={handleChange}
            />
        <button>Submit</button>
        </form>

    </div>
    
  );
}

export default MadlibForm;