import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = () => {
    return(
        <form className={classes.form}>
            <Input input={{id:"amount", type:"number"}} label="Amount"/>
            <button className={classes.form}>+ Add</button>
        </form>
    )
}
export default MealItemForm;