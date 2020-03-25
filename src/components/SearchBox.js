import React from 'react';

const SearchBox = React.memo(
    function SearchBox(props) {
        return (
            <div className='pa2'>
                <input
                    onChange={props.searchChange}
                    className='pa3 ba b--green bg-lightest-blue'
                    type='search'
                    placeholder='search robots' />
            </div>
        );
    }
)

export default SearchBox;