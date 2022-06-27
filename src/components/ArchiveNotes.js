import React from 'react';
import Empty from './Empty';
import NotesItem from './NotesItem';

const ArchiveNotes = ({ notes, onDelete, onChangeArchive }) => {

    const archivedNotes = notes.length ? [] : notes.filter((note) => note.archived === true);

    return (
        <>
            <h2>Arsip</h2>
            {archivedNotes.length === 0 ? (
                <Empty />
            ) : (
                <div className='notes-list'>
                    {archivedNotes.map((note, idx) => {
                        return (
                            <NotesItem key={idx} note={note} onDelete={onDelete} onChangeArchive={onChangeArchive} />
                        );
                    })}
                </div>
            )}
        </>
    );
}
 
export default ArchiveNotes;