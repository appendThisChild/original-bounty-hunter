import React, {Component} from "react"
import BountyForm from "./BountyForm.js"

class Bounty extends Component {
    constructor(props){
        super(props)
        this.state = {
            editToggle: false,
            firstName: props.firstName,
            lastName: props.lastName,
            living: props.living,
            side: props.side
        }
    }
    toggler = () => {
        this.setState(prevState => ({
            editToggle: !prevState.editToggle
        }))
    }
    handleChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        this.setState({
            [e.target.name] : value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const bountyUpdates = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            living: this.state.living,
            side: this.state.side
        }
        this.props.updateBounty(this.props._id, bountyUpdates)
        this.toggler()
    }

    render(){
        const { firstName, lastName, side, living, bountyAmount, _id, deleteBounty } = this.props
        return(
            <div className={`bounty ${living ? "living" : "notLiving"}`}>
                {!this.state.editToggle ?
                    <>
                        <button onClick={this.toggler}>Edit</button>
                        <h1>{lastName},</h1>
                        <h1>{firstName}</h1>
                        <h2>{side}</h2>
                        <h4>Reward: &#x20B6; {bountyAmount * 1000}</h4>
                        <button onClick={() => deleteBounty(_id)}>Remove</button>
                    </>
                    :
                    <>
                    <button onClick={this.toggler}>Cancel</button>
                    <BountyForm 
                        className={"bountyListForm"}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        btnText="Submit"
                        {...this.state}
                    />
                    </>
                }
            </div>
        )
    }
    
}

export default Bounty;