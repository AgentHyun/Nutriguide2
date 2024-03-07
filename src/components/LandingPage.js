import React from 'react';
import '../css/LandingPage.css';
import { useNavigate } from 'react-router-dom';
import logoImage from '../logo.png';
const LandingPage = () => {
const navigate = useNavigate();

const navigateToHealthProfile = () => {
    // 건강 프로필 입력 페이지로 이동하는 함수
    navigate('/input');
  };
const navigateToMealPlanner = () => {
    // 식단 기록 페이지로 이동하는 함수
    navigate('/input/inputMenu');
  };
const navigateToCustomNutrition = () => {
    // 맞춤 영양제 추천 페이지로 이동하는 함수
    navigate('/product');
  };

  return (
    <div className="landing-page">
      <div className="image-container">
        <img src={logoImage} alt="Background" />
      </div>
      <div className="text-container"> <h1>개인 맞춤 영양제를 찾아드립니다!</h1>
        <h2>1. <span className="action" onClick={navigateToHealthProfile}>건강 프로필을 입력하세요.</span></h2>
        <h2>2. <span className="action" onClick={navigateToMealPlanner}>일주일 동안의 식단을 기록하세요.</span></h2>
        <h2>3. <span className="action" onClick={navigateToCustomNutrition}>맞춤 영양제를 추천 받으세요!</span></h2>
      </div>
    </div>
  );
};

export default LandingPage;
