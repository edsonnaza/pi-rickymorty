import classes from './About.module.css';

const About = () => {
    return (<>
    <div className={classes.about}>
        <h1 className={classes['about-h1']}>Hi, I'm Edson</h1>
        <h2 className={classes['about-h2']}>I love to build amazing apps.</h2>
    
            <p>
            I am currently based in Ciudad del Este, Paraguay, a vibrant border city known as the "Triple Frontier" connecting Brazil and Argentina.  
          Being immersed in this multicultural environment allowed me to become a native speaker of Spanish and Portuguese, with an advanced level of proficiency in English.
         <br /> <br />
          With over 8 years of experience in Computer Science, including 5 years as a software engineer, I bring extensive knowledge and expertise to the table. 
          Throughout my career, I have gained hands-on experience in the software development life cycle, and consistently contributed to the success of the organizations I worked with. <br /> In addition, I hold a degree in Computer Science from Universidad Privada del Este (2017).
            </p>
    </div>
    </>)
}

export default About;