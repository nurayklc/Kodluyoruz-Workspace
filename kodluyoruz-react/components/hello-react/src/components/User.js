import PropTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>
          Welcome {name} {surname}({age})
        </h1>
      ) : (
        "You are not Log in"
      )}
      {friends &&
        friends.map((friend) => (
          <div key={friend.id}>
            {friend.id}-{friend.name}
          </div>
        ))}
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isLoggedIn: PropTypes.bool,
  friends: PropTypes.arrayOf,
};

export default User;
