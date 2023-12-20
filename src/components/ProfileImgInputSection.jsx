import { useRef } from 'react';
import {
  StyledSection,
  ProfileImgInput,
  FlexDiv,
  ProfileImgList,
  RoundImg,
} from './style';
import DefaultProfileImg from '../assets/images/default-profile-img.png';
import SampleImg1 from '../assets/images/sample-profile-img-1.png';
import SampleImg2 from '../assets/images/sample-profile-img-2.png';

const ProfileImgInputSection = ({ children }) => {
  const imgRef = useRef();

  const handleChangeProfileImg = (e) => {
    imgRef.current.src = e.target.src;
  };

  return (
    <StyledSection>
      <label htmlFor="profileImgURL">{children}</label>
      <ProfileImgInput>
        <img
          src={DefaultProfileImg}
          alt="기본 프로필 이미지"
          width="80px"
          height="80px"
          ref={imgRef}
          className="selected-profile-img"
        />
        <FlexDiv>
          <span>프로필 이미지를 선택해 주세요!</span>
          <ProfileImgList>
            <RoundImg
              src={SampleImg1}
              alt="샘플 프로필 이미지"
              onClick={handleChangeProfileImg}
            />
            <RoundImg
              src={SampleImg2}
              alt="샘플 프로필 이미지"
              onClick={handleChangeProfileImg}
            />
            <RoundImg
              src={SampleImg1}
              alt="샘플 프로필 이미지"
              onClick={handleChangeProfileImg}
            />
            <RoundImg
              src={SampleImg2}
              alt="샘플 프로필 이미지"
              onClick={handleChangeProfileImg}
            />
            <RoundImg
              src={SampleImg1}
              alt="샘플 프로필 이미지"
              onClick={handleChangeProfileImg}
            />
            <br />
            <RoundImg
              src={SampleImg2}
              alt="샘플 프로필 이미지"
              onClick={handleChangeProfileImg}
            />
            <RoundImg
              src={SampleImg1}
              alt="샘플 프로필 이미지"
              onClick={handleChangeProfileImg}
            />
            <RoundImg
              src={SampleImg2}
              alt="샘플 프로필 이미지"
              onClick={handleChangeProfileImg}
            />
            <RoundImg
              src={SampleImg1}
              alt="샘플 프로필 이미지"
              onClick={handleChangeProfileImg}
            />
            <RoundImg
              src={SampleImg2}
              alt="샘플 프로필 이미지"
              onClick={handleChangeProfileImg}
            />
          </ProfileImgList>
        </FlexDiv>
      </ProfileImgInput>
    </StyledSection>
  );
};

export default ProfileImgInputSection;
