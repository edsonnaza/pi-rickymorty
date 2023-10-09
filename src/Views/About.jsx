import classes from './About.module.css';
const About = (props)=>{

    return (
 <section className={classes["about-us"]}>
    <div className={classes["about"]}>
    <img  src={props.image} className={classes["pic"]} alt="" />
      <div className={classes["text"]}>
        <h2 className={classes.h2}>About Us</h2>
        <h5 className={classes.h5}>Front-end Developer & <span>Designer</span></h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
        <div className={classes["data"]}>
        <a href="#" className={classes["hire"]}>Hire Me</a>
        </div>
      </div>
    </div>
  </section>
    )
}

export default About;