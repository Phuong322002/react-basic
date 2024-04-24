import React from "react";
import { toast } from "react-toastify";
import { withRouter } from "react-router";

class formComponent extends React.Component {
    state = {
        job: '',
        salary: '',
    }
    handleTitleJob = (event) => {
        this.setState({
            job: event.target.value
        })
    }
    handleSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.job == '' && this.state.salary == '') {
            toast.error('Missing value')
            return;
        } else if (this.state.job == '') {
            toast.error('Missing job')
            return;
        } else if (this.state.salary == '') {
            toast.error('Missing salary')
            return;
        }
        let liElement = document.querySelectorAll('li');
        let convertToArr = Array.from(liElement)
        for (let i = 0; i < convertToArr.length; i++) {
            if (i == 0) {
                convertToArr[i].innerHTML = this.state.job
            } else if (i == 1) {
                convertToArr[i].innerHTML = this.state.salary
            }
        }
        this.props.addjob({ id: Math.floor(Math.random() * 1000), job: this.state.job, salary: this.state.salary })
        this.setState({
            job: '',
            salary: '',
        })
        toast.success('Submit successful')
        // setTimeout(() => {
        //     this.props.history.push('/')
        // }, 3000)
    }
    render() {
        return (
            <form>
                <label htmlFor="fname">Job's title:</label><br />
                <input type="text" value={this.state.job} onChange={(e) => { this.handleTitleJob(e) }} /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input type="text" value={this.state.salary} onChange={(e) => { this.handleSalary(e) }} /><br /><br />
                <input type="submit" value="Submit" onClick={(e) => { this.handleSubmit(e) }} />
                {/* <ul>
                <li></li>   
                <li></li>
            </ul> */}
            </form>
        )
    }

}
export default withRouter(formComponent);