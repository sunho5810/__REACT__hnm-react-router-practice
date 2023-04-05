import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const menuLsit = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M HOME", "Sale", "지속가능성"];

  return (
    <div>
        <div>
            <div className='login-button'>
                <FontAwesomeIcon icon={ faUser }/>
                <div>로그인</div>
            </div>
        </div>

        <div className='nav-section'>
            <img width={100} src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg" />
        </div>

        <div className='menu-area'>
            <ul className='menu-list'>
                {menuLsit.map((menu) => (
                    <li key={menu}>{menu}</li>
                ))}
            </ul>

            <div className='search'>
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" className='search-input'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar