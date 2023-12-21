import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import RollingPaperSummary from './RollingPaperSummary';
import LeftArrow from '../assets/images/arrow_left.svg';
import RightArrow from '../assets/images/arrow_right.svg';

const StyledRollingPapers = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  & main {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 16px;
    margin-top: 50px;

    @media (min-width: 769px) and (max-width: 1247px) {
      width: 100%;
      margin-top: 50px;
      padding: 0 24px;
      gap: 16px;
      overflow: hidden;
    }

    @media (max-width: 768px) {
      padding: 0 20px;
      gap: 12px;
      overflow: hidden;
    }

    & .title {
      color: #000;
      font-family: Pretendard;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: -0.24px;
    }

    & .Overgrid {
      position: relative;
      width: 100%;
      & .grids {
        width: 100%;
        vertical-align: baseline;
        @media (max-width: 1247px) {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
          &::-webkit-scrollbar {
            display: none;
          }
        }
        @media (min-width: 1248px) {
          overflow: hidden;
        }
        & .sliders {
          display: flex;
          flex-direction: row;
          transition-timing-function: cubic-bezier(0, 0.99, 0.58, 1);
          transition: all 0.5s;
          @media (max-width: 768px) {
            gap: 12px;
            width: 100%;
            transform: unset;
          }
          @media (min-width: 768px) and (max-width: 1248px) {
            gap: 20px;
            width: 100%;
            transform: unset;
          }
          @media (min-width: 1248px) {
            max-width: 1160px;
            gap: 20px;
          }
        }
        & button {
          position: absolute;
          z-index: 2;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 39px;
          height: 40px;
          flex-shrink: 0;
          border: none;
          fill: rgba(255, 255, 255, 0.9);
          stroke-width: 1px;
          stroke: #dadcdf;
          filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.08));
          backdrop-filter: blur(2px);
          transition:
            opacity 0.3s ease,
            transform 0.3s ease;
          border-radius: 20px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          opacity: 0.8;
          display: block;

          @media (max-width: 1247px) {
            display: none;
          }
          &:hover {
            opacity: 1;
          }
        }
        & .before {
          transform: translate(-50%, -50%);
        }
        & .next {
          transform: translate(0, -50%);
          right: -20px;
        }
      }
    }
  }
`;

const RollingPapers = ({ items, list }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slider = useRef();
  const sliderBtnLeft = useRef();
  const sliderBtnRight = useRef();
  const getWindowWidth = () => {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    );
  };

  function updateButtonVisibility() {
    if (sliderBtnLeft.current && window.innerWidth > 1247) {
      sliderBtnLeft.current.style.display =
        currentIndex === 0 ? 'none' : 'block';
    } else if (sliderBtnLeft.current) {
      sliderBtnLeft.current.style.display = 'none';
    }

    if (sliderBtnRight.current && window.innerWidth > 1247) {
      const lastVisibleIndex = items.length - 4;
      sliderBtnRight.current.style.display =
        currentIndex === lastVisibleIndex ? 'none' : 'block';
    } else if (sliderBtnRight.current) {
      sliderBtnRight.current.style.display = 'none';
    }
  }
  window.addEventListener('resize', updateButtonVisibility);

  useEffect(() => {
    updateButtonVisibility();
  }, [currentIndex, window.innerWidth]);

  function moveSlider(direction) {
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else if (direction === 'right' && currentIndex < items.length - 4) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }

  useEffect(() => {
    const updateSliderPosition = () => {
      if (
        !slider.current ||
        !slider.current.querySelector('.slide') ||
        !slider.current.style
      ) {
        return;
      }
      const slideWidth =
        slider.current.querySelector('.slide').offsetWidth + 20;
      const translateXValue = -currentIndex * slideWidth;
      if (window.innerWidth <= 1247) {
        slider.current.style.transform = `translateX(0px)`;
      } else {
        slider.current.style.transform = `translateX(${translateXValue}px)`;
      }
    };

    window.addEventListener('resize', updateSliderPosition);

    updateSliderPosition();

    return () => {
      window.removeEventListener('resize', updateSliderPosition);
    };
  }, [currentIndex, items]);

  return (
    <StyledRollingPapers>
      <main>
        {list ? (
          <p className="title">인기 롤링 페이퍼 TOP10🔥</p>
        ) : (
          <p className="title">최근에 만든 롤링 페이퍼 TOP10⭐️</p>
        )}
        <div className="Overgrid">
          <div className="grids">
            <button
              onClick={() => moveSlider('left')}
              ref={sliderBtnLeft}
              className="before"
              type="button"
            >
              <img src={LeftArrow} alt="좌측 화살표" />
            </button>
            <div className="sliders" ref={slider}>
              {items.map((item) => {
                return (
                  <RollingPaperSummary
                    className="slide"
                    key={item.id}
                    item={item}
                  />
                );
              })}
            </div>
            <button
              onClick={() => moveSlider('right')}
              ref={sliderBtnRight}
              className="next"
              type="button"
            >
              <img src={RightArrow} alt="우측 화살표" />
            </button>
          </div>
        </div>
      </main>
    </StyledRollingPapers>
  );
};

export default RollingPapers;
