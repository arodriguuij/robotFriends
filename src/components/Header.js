import React from 'react';
import CounterButton from './CounterButton';

const Header = React.memo(
    function Header() {
        return (
            <div>
                <h1 className='f2'>RoboFriends</h1>
                <CounterButton color={'red'} />
            </div>
        );
    }
)

export default Header;