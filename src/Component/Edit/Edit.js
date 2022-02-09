import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";
import { useForm } from "react-hook-form";

function Edit(props) {
    const editor = useRef(null)
	const [content, setContent] = useState('')
	const {
		
		setValue,
		
	  } = useForm();
	
	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}
	const {name, id} = props
	

	return (
            <JoditEditor
            	ref={editor}
                value={content}
				name={name}
				id= {id}
                config={config}
		tabIndex={1} // tabIndex of textarea
		onBlur={newContent => setContent(newContent)} 
                onChange={newContent => {setValue("edit", newContent.value)}}
            />
        );
}

export default Edit