import React from "react"
import Bounty from "./Bounty.js"

const BountysList = (props) => {
    const mappedBountys = props.bountys.map((bounty, i) => 
        <Bounty 
            num={i + 1}
            deleteBounty={props.deleteBounty}
            updateBounty={props.updateBounty}
            key={bounty._id} 
            {...bounty}/>
    )
    return(
        <div className="bountyList">
            <h1>Current Fugitives</h1>
            <div>
                {mappedBountys}
            </div>
        </div>
    )
}

export default BountysList;