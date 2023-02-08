import styled from '@emotion/styled';

const Contenedor = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;
const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;
const Img = styled.img`
  display: block;
  width: 150px;
`;
const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;
export const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Contenedor>
      <Img src={`https://cryptocompare.com/${IMAGEURL}`} alt='img crypto' />
      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          Precio mas alto del dia: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Precio mas bajo del dia : <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Ultima actualizacion: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};
