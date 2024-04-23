import React from "react";

class ChildComponent extends React.Component {
    state = {
        status: false
    }
    handeleShowHide(){
        this.setState({
            status: !this.state.status
        })
    }
    handleDelete = (item) =>{
        console.log('qq',item)
           this.props.deletehob(item)
           
    }
   
    render() {
        console.log('props', this.props)
        const { first, last, job, ten, ho } = this.props;
        console.log('props',this.props);
        const {status} = this.state
        let a;
        return (
            <>
                {first && <div>this is the firstName {first}</div>}
                {last && <div>this is the lastName {last}</div>}
                {status === false ? <div><button onClick={()=>{this.handeleShowHide()}}>show</button></div> 
                 : 
                <> <div id="list-job">
                    {job && job.map((item, index) => {
                        console.log(item)
                            return (
                                <div key={item.id}>{item.job} - {item.salary}$  <></> <button onClick={()=>{this.handleDelete(item)}}>delete</button>  </div>
                            )
                       })}
                </div> 
                <div><button onClick={()=>{this.handeleShowHide()}}>hide</button></div>
                </>}
                <div>{ten}</div>
                <div>{ho}</div>
            </>
        );
    }
}

export default ChildComponent;
