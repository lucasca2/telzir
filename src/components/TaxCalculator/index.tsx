import { FC, useEffect, useState } from 'react';

import { Select } from './components/Select';
import { BrazilDDDs, Times, Plans } from './data';
import { Wrapper, Line, Column, ColumnResult } from './styles';

export const TaxCalculator: FC = () => {
  const [origin, setOrigin] = useState<any>();
  const [destiny, setDestiny] = useState<any>();
  const [time, setTime] = useState<any>();
  const [plan, setPlan] = useState<any>();

  useEffect(() => {
    if (origin && destiny && time) {
      console.log('origin', origin);
      console.log('destiny', destiny);
      console.log('time', time);
      console.log('plan', plan?.plan);

      console.log(`CALCULA COM O PLANO: ${plan?.plan || 'SEM PLANO'}`);
    }
  }, [origin, destiny, time, plan]);

  return (
    <Wrapper>
      <Line>
        <Column>
          <Select
            label="Origem"
            placeholder="Escolha a origem"
            options={BrazilDDDs}
            getOptionLabel={(option) => `${option.ddd} - ${option.city}`}
            getOptionValue={(option) => option}
            getValueLabel={(value) => `${value.ddd} - ${value.uf}`}
            value={origin}
            onChange={setOrigin}
          />
        </Column>
        <Column>
          <Select
            label="Destino"
            placeholder="Escolha o destino"
            options={BrazilDDDs}
            getOptionLabel={(option) => `${option.ddd} - ${option.city}`}
            getOptionValue={(option) => option}
            getValueLabel={(value) => `${value.ddd} - ${value.uf}`}
            value={destiny}
            onChange={setDestiny}
          />
        </Column>
        <Column>
          <Select
            label="Tempo"
            placeholder="Escolha o tempo"
            options={Times}
            getOptionLabel={(option) => `${option.time} minutos`}
            getOptionValue={(option) => option}
            getValueLabel={(value) => `${value.time} minutos`}
            value={time}
            onChange={setTime}
          />
        </Column>
      </Line>
      <Line>
        <Column>
          <Select
            label="Plano"
            placeholder="Escolha o plano"
            options={Plans}
            getOptionLabel={(option) => option.plan}
            getOptionValue={(option) => option}
            getValueLabel={(value) => value.plan}
            value={plan}
            onChange={setPlan}
          />
        </Column>
      </Line>
      <Line>
        <ColumnResult>
          <strong>Total</strong>
          <strong>R$ 0,00</strong>
        </ColumnResult>
      </Line>
    </Wrapper>
  );
};
