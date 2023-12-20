import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { StyledSection } from './style';

// https://mingeesuh.tistory.com/entry/Quill-React-%EC%97%90%EB%94%94%ED%84%B0-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C-%EB%B0%8F-%EC%82%AC%EC%9D%B4%EC%A6%88-%EC%A1%B0%EC%A0%88

// 사용하고 싶은 옵션, 나열 되었으면 하는 순서대로 나열
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  [{ align: [] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ color: [] }, { background: [] }],
];

// 옵션에 상응하는 포맷, 추가해주지 않으면 text editor에 적용된 스타일을 볼수 없음
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

// React Quill 라이브러리 사용 https://www.npmjs.com/package/react-quill?activeTab=readme
// TODO 글씨가 안 써짐..
const Editor = ({ value }) => {
  return (
    // 테마 (bubble, snow, custom) https://quilljs.com/docs/themes/
    <ReactQuill
      value={value || ''}
      theme="snow"
      modules={modules}
      formats={formats}
    />
  );
};

const TextareaInputSection = ({ children }) => {
  return (
    <StyledSection>
      <label htmlFor="content">{children}</label>
      <Editor />
    </StyledSection>
  );
};

export default TextareaInputSection;
