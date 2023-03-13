import classes from "./AvailableMeals.module.css";

const pratos = [
  {
    id: 1,
    nome: "Acarajé",
    descricao:
      "Bolinho de feijão fradinho frito em azeite de dendê, recheado com vatapá, camarão seco e pimenta.",
    preco: 7.0,
  },
  {
    id: 2,
    nome: "Baião de Dois",
    descricao:
      "Prato feito com arroz, feijão-de-corda, queijo coalho, carne-seca, linguiça e temperos.",
    preco: 20.0,
  },
  {
    id: 3,
    nome: "Moqueca de Peixe",
    descricao:
      "Peixe cozido em molho de tomate, cebola, pimentão, leite de coco e azeite de dendê.",
    preco: 35.0,
  },
  {
    id: 4,
    nome: "Buchada de Bode",
    descricao:
      "Prato feito com as vísceras do bode (estômago, tripa e fígado), temperadas com cebola, coentro, pimenta e outros temperos.",
    preco: 25.0,
  },
];

const AvailableMeals = (props) => {
  return (
    <section className={classes.meals}>
      <ul>
        {pratos.map((prato) => (
          <li>
            {prato.nome}
            {prato.preco}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AvailableMeals;
