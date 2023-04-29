import classes from './Card.module.css';

const Card = (props) =>{
    // using classname allows us to use our own custom components......
    // just like when we work with regular html components..
    // now we can set class name in our own component in AddUser.js
    // we are mergining our external class with our internally defined class
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
}

export default Card;