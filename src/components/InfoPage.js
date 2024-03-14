import React from 'react';
import '../css/LandingPage.css';
import { useNavigate } from 'react-router-dom';


const InfoPage = () => {
const navigate = useNavigate();
const navigateToLandingPage = () => {
    // 건강 프로필 입력 페이지로 이동하는 함수
    navigate('/input');
}
  return (
    <div className="landing-page">
     
      <div className='container'>
        
     <h1> Nutri Guide?</h1>
     <h2> AI 기술을 활용하여<br/><br/>
    간편한 정보 입력만으로<br/><br/>
    최적의 영양제를 추천해드립니다!</h2>
</div>


    </div>
  );
};

export default InfoPage;
