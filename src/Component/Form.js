import {useState} from "react";

export default function Form({setCards}) {
    const [formId, setFormId] = useState(4);
    const [formTitle, setFormTitle] = useState('');
    const [formContent, setFormContent] = useState('');

    const handleCards = e => {
        setFormTitle(e.target.value);
    }
    
    const handleTitleChange = e => {
        setFormTitle(e.target.value);
    }

    const handleContentChange = e => {
        setFormContent(e.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        setCards(
            cards => [{id: formId, title: formTitle, content: formContent}, ...cards]
        );
    }

    const handleIncrement = e => {
        setFormId( formId + 1 );
      };    

    return (
        <form className='my-5 mx-auto' style={{maxWidth: '450px'}} onSubmit={handleSubmit}>
            <h1 className="text-center py-5">C'est par ici que ca se passe.</h1>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Titre</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={handleTitleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Contenu</label>
                <input type="text" className="form-control" id="exampleInputPassword1" 
                        onChange={handleContentChange}/>
            </div>
            <button type="submit" className="btn btn-primary"
                        onClick={handleIncrement}
            >Submit</button>
        </form>
    )
}