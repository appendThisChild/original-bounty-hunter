import React, { Component } from "react"
import axios from "axios"

const BountyContext = React.createContext()

class BountyProvider extends Component {
    constructor(){
        super()
        this.state = {
            bountys: []
        }
    }
    getAllBountys = () => {
        axios.get("/bounty").then(res => 
            this.setState({bountys: res.data})
        ).catch(err => console.log(err))
    }
    postNewBounty = (newBounty) => {
        axios.post("/bounty", newBounty).then(res => {
            this.setState(prevState => ({
                bountys: [...prevState.bountys, res.data]
            }))
        })
    }
    deleteBounty = _id => {
        axios.delete(`/bounty/${_id}`).then(res => {
            this.setState(prevState => ({
                bountys: prevState.bountys.filter(bounty => bounty._id !== _id)
            }))
        })
    }
    updateBounty = (_id, updates) => {
        axios.put(`/bounty/${_id}`, updates).then(res => {
            this.setState(prevState => ({
                bountys: prevState.bountys.map(bounty => bounty._id === _id ? res.data : bounty)
            }))
        })
    }

    render(){
        return(
            <BountyContext.Provider 
                value={{
                    bountys: this.state.bountys,
                    getAllBountys: this.getAllBountys,
                    postNewBounty: this.postNewBounty,
                    deleteBounty: this.deleteBounty,
                    updateBounty: this.updateBounty
                }}>
                {this.props.children}
            </BountyContext.Provider>
        )
    }
}

export default BountyProvider;

export const withBounty = C => props => (
    <BountyContext.Consumer>
        {value => <C {...value} {...props}/>}
    </BountyContext.Consumer>
)