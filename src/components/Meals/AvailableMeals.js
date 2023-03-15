import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const pratos = [
  {
    id: 'm1',
    nome: 'Sushi',
    descricao: 'Finest fish and veggies',
    preco: 22.99,
  },
  {
    id: 'm2',
    nome: 'Schnitzel',
    descricao: 'A german specialty!',
    preco: 16.5,
  },
  {
    id: 'm3',
    nome: 'Barbecue Burger',
    descricao: 'American, raw, meaty',
    preco: 12.99,
  },
  {
    id: 'm4',
    nome: 'Green Bowl',
    descricao: 'Healthy...and green...',
    preco: 18.99,
  },
];

const AvailableMeals = (props) => {
  const meals = pratos.map((prato) => (
    <MealItem
      key={prato.id}
      nome={prato.nome}
      descricao={prato.descricao}
      preco={prato.preco}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>  
      </Card>
    </section>
  );
};

export default AvailableMeals;
