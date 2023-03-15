import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const preco = `$${props.preco.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.nome}</h3>
        <div className={classes.description}>{props.descricao}</div>
        <div className={classes.price}>{preco}</div>
      </div>
      <MealItemForm/>
    </li>
  );
};
export default MealItem;
