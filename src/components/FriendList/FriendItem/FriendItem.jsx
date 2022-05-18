import PropTypes from "prop-types"

import style from './FriendItem.module.css'

function FriendItem({avatar, name, isOnline}) {
    return (
        <li className={style.item}>
            <span className={isOnline?style.statusOnline:style.statusOffline}></span>
            <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={style.name}>{name}</p>
        </li>
    );
}

export default FriendItem;

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}