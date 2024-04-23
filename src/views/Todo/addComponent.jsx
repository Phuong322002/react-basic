import React from "react";
import { toast } from 'react-toastify';
import { withRouter } from "react-router-dom";

class addComponent extends React.Component {

    state = {
        job: ''
    }

    handleJobInput = (e) => {
        this.setState({
            job: e.target.value
        })
    }

    handleAdd = () => {
        console.log('wr', this.props)
        if (this.state.job == '') {
            toast.error("Missing value")
            return
        }
        this.props.addJob({
            id: Math.floor(Math.random() * 100),
            job: this.state.job
        })
        this.setState({
            job: ''
        })
        toast.success("Wow so easy!")

    }

    render() {

        const { job } = this.state
        return (
            <div className="todo-Add">
                <input type="text" value={job} onChange={(e) => { this.handleJobInput(e) }} />
                <button onClick={() => { this.handleAdd() }}>Add</button>
            </div>

        )
    }
}

export default withRouter(addComponent);