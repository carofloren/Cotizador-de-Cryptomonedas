import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Error } from './Error';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;
const Fomrulario = ({ setMonedas }) => {
  const [cryptos, setCrypto] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas);

  const [cryptomoneda, SelectCryptomoneda] = useSelectMonedas(
    'Elige tu Cryptomoneda',
    cryptos
  );

  useEffect(() => {
    const consultarApy = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
      const response = await fetch(url);
      const resultado = await response.json();
      const arrayCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        console.log(objeto);
        return objeto;
      });
      setCrypto(arrayCriptos);
    };
    consultarApy();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([cryptomoneda, moneda].includes('')) {
      setError(true);
    }
    setError(false);
    setMonedas({
      moneda,
      cryptomoneda,
    });
  };
  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCryptomoneda />

        <InputSubmit type='submit' value='Cotizar' />
      </form>
    </>
  );
};

export default Fomrulario;
