import React from 'react';
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

const Editor = ({ content, setContent }) => {
  const handleOnChange = (value) => {
    setContent(value.replaceAll(/<\/?p[^>]*>/g, '').replace('<br>', ''));
  };

  return (
    <ReactQuill
      value={!content ? '<br>' : `<p>${content}</p>`}
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
