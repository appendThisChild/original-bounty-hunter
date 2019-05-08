import React from "react"

const BountyForm = (props) => {
    const { handleSubmit, handleChange, btnText, firstName, lastName, living } = props
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                placeholder="First Name"/>
            <input 
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                placeholder="Last Name"/>
            <span> Check if living: </span>
            <input 
                type="checkbox"
                name="living"
                checked={living}
                onChange={handleChange}
                placeholder="First Name"/>
            <label> Sith: </label>
            <input 
                type="radio"
                name="side"
                value="Sith"
                onChange={handleChange}/>
            <label> Jedi: </label>
            <input 
                type="radio"
                name="side"
                value="Jedi"
                onChange={handleChange}/>
            <button>{btnText}</button>
        </form>
    )
}

export default BountyForm;