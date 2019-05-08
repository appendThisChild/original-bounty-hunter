import React from "react"
import Bounty from "./Bounty.js"

const BountysList = (props) => {
    const mappedBountys = props.bountys.map((bounty, i) => 
        <Bounty 
            deleteBounty={props.deleteBounty}
            updateBounty={props.updateBounty}
            key={bounty._id} 
            {...bounty}/>
    )
    return(
        <div>
            {mappedBountys}
        </div>
    )
}

export default BountysList;