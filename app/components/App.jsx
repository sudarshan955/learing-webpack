import React from 'react';
import uuid from 'node-uuid';
import Notes from './Notes.jsx';


export default class App extends React.Component {
    constructor(props) {
        super( props )

        this.state = {
            notes : [
                {
                    id: uuid.v4(),
                    task: 'Learn Webpack'
                },
                {
                    id: uuid.v4(),
                    task: 'Learn React'
                },
                {
                    id: uuid.v4(),
                    task: 'Do laundry'
                }
            ]
        };

        this.addNote = this.addNote.bind(this);
        this.findNote = this.findNote.bind(this);
        this.editNote = this.editNote.bind(this);
    }

    render() {
        const notes = this.state.notes;

        return (
            <div>
                <button onClick={this.addNote}>+</button>
                <Notes items={notes} onEdit={this.editonEditNote} />
            </div>
        );
    }

    addNote() {
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: 'New task'
            }])
        });
    }

    findNote(noteId) {
        let notes = this.state.notes;
        return notes.findIndex( ( note ) => note.id == noteId );
    }

    editNote(noteId, task) {
        let notes = this.state.notes;
        const noteIndex = this.findNote( noteId );
        console.log( noteIndex );
        notes[noteIndex].task = task;
        this.setState( {notes} );
        console.log('note edited', noteId, task);
    }
}