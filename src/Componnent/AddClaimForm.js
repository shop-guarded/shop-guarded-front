import React, { useState } from 'react';
import './AddClaimForm.css';

const AddClaimForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [stolen, setStolen] = useState(false);
  const [attachments, setAttachments] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique de soumission du formulaire ici
    console.log('Form submitted:', { title, description, stolen, attachments });
  };

  return (
    <form onSubmit={handleSubmit} className="add-claim-form">
     
      <div>
        <label htmlFor="title">Title of Claim:</label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label htmlFor="description">Describe the Claim:</label>
        <textarea 
          id="description" 
          name="description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>
          Stolen
          <input 
            type="checkbox" 
            name="stolen" 
            checked={stolen} 
            onChange={(e) => setStolen(e.target.checked)} 
          />
        </label>
      </div>
      <div>
        <label htmlFor="attachments">Add Attachments:</label>
        <input 
          type="file" 
          id="attachments" 
          name="attachments" 
          onChange={(e) => setAttachments(e.target.files[0])} 
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default AddClaimForm;
