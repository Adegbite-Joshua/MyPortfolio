'use client'
import PropTypes from 'prop-types';

type Props = {
  name: string;
}

const NavButton: React.FC<Props> = ({name}) => {
  return (
    <>
        <button id="NavButton">{name}</button>
    </>
  )
}

NavButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NavButton