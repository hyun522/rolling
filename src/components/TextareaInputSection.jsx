import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { StyledSection } from './style';

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  [{ align: [] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ color: [] }, { background: [] }],
];

export const formats = [
  'bold',
  'italic',
  'underline',
  'strike',
  'align',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'background',
  'color',
  'link',
  'width',
];

const modules = {
  toolbar: {
    container: toolbarOptions,
  },
};

const Editor = ({ initialValue = '', content, setContent }) => {
  // const [quillValue, setQuillValue] = useState(initialValue);

  const handleOnChange = (value) => {
    setContent(value);
  };

  return (
    <ReactQuill
      value={content}
      theme="snow"
      modules={modules}
      formats={formats}
      onChange={handleOnChange}
    />
  );
};
const TextareaInputSection = ({ children, content, setContent }) => {
  return (
    <StyledSection>
      <label htmlFor="content">{children}</label>
      <Editor content={content} setContent={setContent} />
    </StyledSection>
  );
};

export default TextareaInputSection;
