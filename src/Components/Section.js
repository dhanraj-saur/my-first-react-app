


const Section = ({title, content, children})=>{
    return(
        <div className="about">
         
            <h1>{title}</h1>
            <p>{content}</p>
            {children}          
        </div>
    )
}

export default Section;