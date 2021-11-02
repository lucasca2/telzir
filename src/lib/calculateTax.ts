type TCalculateTax = {
  origin: string;
  destiny: string;
  duration: number;
  plan?: string;
};

const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

const taxes = [
  { origin: '011', destiny: '016', tax: 1.9 },
  { origin: '011', destiny: '017', tax: 1.7 },
  { origin: '011', destiny: '018', tax: 0.9 },
  { origin: '016', destiny: '011', tax: 2.9 },
  { origin: '017', destiny: '011', tax: 2.7 },
  { origin: '018', destiny: '011', tax: 1.9 },
];

export const calculateTax = ({
  origin,
  destiny,
  duration,
  plan,
}: TCalculateTax): string => {
  const planMinutes = Number(plan?.split(' ')[1]) || 0;
  let tax = 0;

  tax =
    taxes.find((t) => t.origin === origin && t.destiny === destiny)?.tax || 0;

  if (tax === 0) return 'Não foi possível calcular';

  const isCallDurationLessThanPlanMinutes = duration <= planMinutes;

  if (plan && plan !== 'Sem Plano') {
    return isCallDurationLessThanPlanMinutes
      ? formatValue(0)
      : formatValue((duration - planMinutes) * (tax + tax * 0.1));
  }

  return formatValue(tax * duration);
};
