import { FC, useEffect, useState } from 'react';

import { calculateTax } from '../../lib/calculateTax';
import { Button } from '../Button';
import { Select } from './components/Select';
import { BrazilDDDs, Durations, Plans } from './data';
import { Wrapper, Line, Column, ColumnResult, ColumnAction } from './styles';

export const TaxCalculator: FC = () => {
  const [origin, setOrigin] = useState<any>();
  const [destiny, setDestiny] = useState<any>();
  const [duration, setDuration] = useState<any>();
  const [plan, setPlan] = useState<any>();

  const [result, setResult] = useState<string>('');

  const [originOptions, setOriginOptions] = useState(BrazilDDDs);
  const [destinyOptions, setDestinyOptions] = useState(BrazilDDDs);

  useEffect(() => {
    if (origin) {
      setDestinyOptions(BrazilDDDs.filter((dest) => dest.ddd !== origin.ddd));
    }
  }, [origin]);

  useEffect(() => {
    if (origin && destiny && duration) {
      const value = calculateTax({
        origin: origin.ddd,
        destiny: destiny.ddd,
        duration: duration.time,
        plan: plan?.name,
      });

      setResult(value);
    }
  }, [origin, destiny, duration, plan]);

  return (
    <Wrapper>
      <Line>
        <Column>
          <Select
            label="Origem"
            placeholder="Escolha a origem"
            options={originOptions}
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
            options={destinyOptions}
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
            options={Durations}
            getOptionLabel={(option) => `${option.time} minutos`}
            getOptionValue={(option) => option}
            getValueLabel={(value) => `${value.time} minutos`}
            value={duration}
            onChange={setDuration}
          />
        </Column>
      </Line>
      <Line>
        <Column>
          <Select
            label="Plano"
            placeholder="Escolha o plano"
            options={Plans}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option}
            getValueLabel={(value) => value.name}
            value={plan}
            onChange={setPlan}
          />
        </Column>
      </Line>
      <Line>
        <ColumnResult>
          <strong>Total</strong>
          <strong>{result === 'R$ 0,00' ? 'Grátis' : result}</strong>
        </ColumnResult>
      </Line>
      {result && plan && plan.name !== 'Sem Plano' && (
        <Line>
          <ColumnAction>
            <Button>Contratar</Button>
          </ColumnAction>
        </Line>
      )}
    </Wrapper>
  );
};
