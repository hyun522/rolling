import { useRef, useEffect } from 'react';
import { StyledSection } from './style';

const TextInputSection = ({ children }) => {
  const inputRef = useRef();
  const pRef = useRef();

  const showErrorMessage = (e) => {
    if (!e.target.value) {
      inputRef.current.classList.add('error');
      pRef.current.classList.add('error');
    } else {
      inputRef.current.classList.remove('error');
      pRef.current.classList.remove('error');
    }
  };

  useEffect(() => {
    inputRef.current.addEventListener('focusout', showErrorMessage);

    return () => {
      inputRef.current.removeEventListener('focusout', showErrorMessage);
    };
  }, []);

  return (
    <StyledSection>
      <label htmlFor="sender">{children}</label>
      <div>
        <input
          type="text"
          id="sender"
          placeholder="이름을 입력해 주세요."
          // onBlur={showErrorMessage}
          ref={inputRef}
        />
        <p ref={pRef}>값을 입력해 주세요</p>
      </div>
    </StyledSection>
  );
};

export default TextInputSection;
