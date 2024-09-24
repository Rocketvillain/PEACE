import { NavLink } from "react-router-dom"
import '../css/Main.css';

function Main() {
    return (
        <>
        <div className="main-container">
            <div className="brand-container">
                <div className="brand-background">
                    <img src="/images/main3.png" className="main-logo"/>
                    <span className="main-title">Healing Pets</span>
                    <img src="/images/main4.png" className="main-logo"/>
                </div>
            </div>
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink to="/hospitalview">
                        <img src="/images/main1.png" alt="병원 검색하기" />
                        <span>병원<br/>
                            검색하기</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/hosreser">
                        <img src="/images/main2.png" alt="병원 예약하기" />
                        <span>병원<br/>
                            예약하기</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/expenses">
                        <img src="/images/main3.png" alt="진료비 확인하기" />
                        <span>진료비<br/>
                            확인하기</span>
                    </NavLink>
                </li>
                <NavLink to="/beautyreserpage">
                        <span>미용 예약</span>
                    </NavLink>
                    <NavLink to="/reserpage">
                        <span>진료 및 수술 예약</span>
                    </NavLink>
                    <li className="nav-item">
                    <NavLink to="/usercontrol">
                        <img src="/images/main2.png" alt="관리자 회원 관리" />
                        <span>관리자 회원 관리</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/resercontrol">
                        <img src="/images/main2.png" alt="관리자 예약 관리" />
                        <span>관리자 예약 관리</span>
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className="footer-container">
            우리 가족을 위한 최고의 서비스, 경기도 동물병원의 정보를 한 눈에!
        </div>
        </>
    )
}

export default Main;                                     