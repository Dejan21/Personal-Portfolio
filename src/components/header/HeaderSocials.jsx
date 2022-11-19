import React from "react";
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/dejan-jangelovski-2348871b3/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/Dejan21" target="_blank"><BsGithub /></a>
        </div>
    )
}

export default HeaderSocials;