import React, {useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
    const [value, setValue] = useState("");
    return (
        <div>
        <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            modules={TextEditor.modules}
            formats={TextEditor.formats}
            bounds={".app"}
            placeholder="Write your question here..."
        />
        </div>
    );
    }

    export default TextEditor;