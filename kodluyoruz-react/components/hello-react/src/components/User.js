import PropTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends, address }) {
  if (!isLoggedIn) {
    return <div>You are not Log in</div>;
  }
  return (
    <div>
      {
        <h1>
          Welcome {name} {surname}({age})
        </h1>
      }
      {address.title} - {address.zip}
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
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
};

// Varsayılan değer atamak için defaultProps kullanılır.
User.defaultProps = {
  name:"İsimsiz",
  isLoggedIn: false,
};

export default User;
