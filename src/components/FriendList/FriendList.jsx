import PropTypes from 'prop-types'
import FriendItem from './FriendItem'
import style from './FriendList.module.css'

const FriendList = ({ friends }) => {
    return (
        <ul className={style.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
            <FriendItem 
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />
            ))}
        </ul>
    )
 }

export default FriendList

FriendList.propTypes = {
   friends: PropTypes.arrayOf(PropTypes.shape({
           avatar: PropTypes.string.isRequired,
           name: PropTypes.string.isRequired,
           isOnline: PropTypes.bool.isRequired,
       })).isRequired, 
}