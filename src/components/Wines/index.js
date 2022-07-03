import useAxios from "../../hooks/use-axios";
import Title from "../Title";

import Card from "./Card";
import {StyledWines, Grid} from "./styles";

const Wines = ({modalHandler}) => {
  const {data, isLoading, error} = useAxios("http://localhost:8000/wines");

  const renderCards = data.map((item) => (
    <Card
      key={item.id}
      id={item.id}
      modalHandler={modalHandler}
      name={item.name}
      price={item.price}
    />
  ));

  const renderLoadingMsg = <p>Cargando vinos...</p>;

  const errorMsg = error.message;
  const renderErrorMsg = <p>{errorMsg}</p>;

  return (
    <StyledWines id="wines">
      <Title text1="Nuestros" text2="vinos" />
      <Grid>
        {errorMsg && renderErrorMsg}
        {isLoading && renderLoadingMsg}
        {!isLoading && !errorMsg && renderCards}
      </Grid>
    </StyledWines>
  );
};

export default Wines;
