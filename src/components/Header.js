import React from 'react';

const Header = ({ onSearch }) => {
    return (
        <div className='note-app__header'>
            <h1>Notes App</h1>
            <div className='note-search'>
                <input type='text' placeholder='Cari catatan ...' onChange={(e) => onSearch(e)} />
            </div>
        </div>
    );
}
 
export default Header;