import React from 'react';

export default class Note extends React.Component {
    constructor(props) {
        super( props );

        this.renderTask = this.renderTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.renderEditTask = this.renderEditTask.bind(this);
        this.finishEdit = this.finishEdit.bind(this);
        this.checkEnter = this.checkEnter.bind(this);

        this.state = {
            editing : false
        };
    }

    render() {
        const editing = this.state.editing;

        return(
            editing ? this.renderEditTask() : this.renderTask()
        )
    }

    editTask() {
        this.setState( {
            editing: true
        } );
    }

    renderEditTask() {
        return <input type='text'
                      autoFocus={true}
                      defaultValue={this.props.task}
                      onBlur={this.finishEdit}
                      onKeyPress={this.checkEnter} />;
    }

    checkEnter(e) {
        if ( e.key == 'Enter' ) {
            this.finishEdit(e);
        }
    }

    renderTask() {
        return <div onClick={this.editTask}>{this.props.task}</div>;
    }

    finishEdit(e) {
        this.props.onEdit(e.target.value);
        this.setState({
            editing: false
        });
    }
}