import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faUser, faX } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useSearchParams } from 'react-router-dom';

const Navbar = ({setAuthenticate, authenticate}) => {

    const menuLsit = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M HOME", "Sale", "지속가능성"];

    const [openMenu, setOpenMenu] = useState("");

    const navigate = useNavigate();

    const goToLogin = () => {
        authenticate == true ? setAuthenticate(false) : navigate("/login");
    }

    const search = (e) => {
        if(e.key === "Enter"){
            //입력한 검색어를 읽어와서 url을 바꿔준다
            let keyword = e.target.value // 인풋의 value를 event.target.value로 불러올수있음
            console.log("keyword?", keyword);

            navigate(`/?q=${keyword}`);
        }
    }

    const goToHome = () => {
        navigate("/");
    }

  return (
    <div>
        <div className="nav-top">
            <FontAwesomeIcon icon={faBars} className='menuBtn' onClick={()=>{setOpenMenu("on")}}/>

            <div className='login-button' onClick={goToLogin}>
                <FontAwesomeIcon icon={ faUser }/>
                <div>{authenticate == true ? "로그아웃" : "로그인"}</div>
            </div>
        </div>

        <div className='nav-section'>
            <img width={100} src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg" onClick={goToHome}/>
        </div>


        <div className={'menu-area ' + openMenu}>
            <FontAwesomeIcon icon={faX} className='menuCloseBtn' onClick={()=>{setOpenMenu("")}}/>
            <ul className='menu-list'>
                {menuLsit.map((menu) => (
                    <li key={menu}>{menu}</li>
                ))}
            </ul>

            <div className='search'>
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" className='search-input' onKeyPress={(e) => search(e)}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar