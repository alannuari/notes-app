import React from 'react';

class AddNotes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: {title: '', body: ''},
            titleLimit : {inputTitle: '', limit: 50, char: 50}
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        if (event.target.value.length <= 50) {
            this.setState((prevState) => {
                return {
                    titleLimit : {
                        ...prevState.titleLimit,
                        inputTitle: event.target.value,
                        char: prevState.titleLimit.limit - event.target.value.length
                    },
                    note: {
                        ...prevState.note,
                        title: event.target.value,
                    }
                }
            });
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                note: {
                    ...prevState.note,
                    body: event.target.value,
                }
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state.note);
        this.setState((prevState) => {
            return {
                note: {
                    title: '',
                    body: ''
                },
                titleLimit : {
                    ...prevState.titleLimit,
                    inputTitle: '',
                    char: 50
                }
            }
        });
    }
    
    render() { 
        return (
            <div className='note-input'>
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className={`note-input__title__char-limit ${this.state.titleLimit.char === 0 ? 'zero' : ''}`}>Sisa karakter: {this.state.titleLimit.char}</p>
                    <input className='note-input__title' type='text' value={this.state.note.title} onChange={this.onTitleChangeEventHandler} placeholder='Ini adalah judul ...' required />
                    <textarea className='note-input__body' type='text' value={this.state.note.body} onChange={this.onBodyChangeEventHandler} placeholder='Tuliskan catatanmu di sini ...' required />
                    <button type='submit'>Buat</button>
                </form>
            </div>
        );
    }
}
 
export default AddNotes;