import { useState, useRef, useEffect } from 'react';
import { StyledSection } from './style';
import ToggleArrowDown from '../assets/images/toggle-arrow-down.svg';
import ToggleArrowUp from '../assets/images/toggle-arrow-up.svg';

const ToggleDownSection = ({ children, optionType, last }) => {
  let options = [];

  if (optionType === 'relationship') {
    options = ['친구', '지인', '동료', '가족'];
  } else if (optionType === 'font') {
    options = ['Noto Sans', 'Pretendard', '나눔명조', '나눔손글씨 손편지체'];
  }

  const optionsRef = useRef();
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptions = (e) => {
    setIsOpen(!isOpen);
    e.target.classList.toggle('focus');
  };

  // TODO 토글 다운 옵션 외부 클릭해도 닫히지
  const handleCloseOptions = (e) => {
    if (
      isOpen &&
      (!optionsRef.current || !optionsRef.current.contains(e.target))
    )
      setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleCloseOptions);
    return () => {
      window.removeEventListener('click', handleCloseOptions);
    };
  }, []);

  const selectOption = (e) => {
    setSelected(e.target.textContent);
    setIsOpen(false);
  };

  return (
    <StyledSection last={last}>
      <label htmlFor={options}>{children}</label>
      <button type="button" onClick={handleOptions}>
        {selected}
        {isOpen ? (
          <img src={ToggleArrowUp} alt="드롭다운 화살표 이미지" />
        ) : (
          <img src={ToggleArrowDown} alt="드롭다운 화살표 이미지" />
        )}
      </button>
      <div className="toggle-options">
        {isOpen && (
          <ul ref={optionsRef}>
            {[...options].map((option) => {
              return (
                <li onClick={selectOption} onKeyDown={selectOption}>
                  {option}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </StyledSection>
  );
};

export default ToggleDownSection;
