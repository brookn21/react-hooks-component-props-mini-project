import React from "react"

function About(props){
    const { data } = props
    return(
        <aside>
            <img src={data.image} alt="blog logo"/>
            <p>{data.about}</p>
        </aside>
    )
}

export default About;