import React from "react"

const BountyForm = (props) => {
    const { handleSubmit, handleChange, btnText, firstName, lastName, living, className } = props
    return(
        <form className={className} onSubmit={handleSubmit}>
            {className === "bountyForm" ? 
                <h1>Add new bounty</h1>
            : null}
            <div>
                <input 
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={handleChange}
                    placeholder="Bounty's First Name"/>
                <input 
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={handleChange}
                    placeholder="Bounty's Last Name"/>
            </div>
            <span>
                Check if living:
                <input 
                    type="checkbox"
                    name="living"
                    checked={living}
                    onChange={handleChange}
                />
            </span>
            <span>
                Sith:
                <input 
                    type="radio"
                    name="side"
                    value="Sith"
                    onChange={handleChange}
                />
            </span>
            <span>
                Jedi:
                <input 
                    type="radio"
                    name="side"
                    value="Jedi"
                    onChange={handleChange}
                />
            </span>
            <button>{btnText}</button>
        </form>
    )
}

export default BountyForm;