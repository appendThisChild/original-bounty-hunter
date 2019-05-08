import React, { Component } from "react"
import BountysList from "./components/BountysList.js"
import BountyForm from "./components/BountyForm.js"
import { withBounty } from "./context/BountyProvider.js"

class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            living: true,
            side: ""
        }
    }
    componentDidMount(){
        this.props.getAllBountys()
    }
    handleChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        this.setState({
            [e.target.name] : value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const newBounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            living: this.state.living,
            side: this.state.side
        }
        this.props.postNewBounty(newBounty)
        this.setState({
            firstName: "",
            lastName: "",
            living: true,
            side: ""
        })
    }

    render(){
        return(
            <div>
                <BountyForm 
                    btnText="Submit New Bounty"
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...this.state}/>
                <BountysList 
                    bountys={this.props.bountys}
                    deleteBounty={this.props.deleteBounty}
                    updateBounty={this.props.updateBounty}/>
            </div>
        )
    }
}

export default withBounty(App);