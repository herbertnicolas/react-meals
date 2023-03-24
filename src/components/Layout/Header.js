import meals from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props){
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="A table full of delicious food!"/>
            </div>
        </Fragment>
    )

}