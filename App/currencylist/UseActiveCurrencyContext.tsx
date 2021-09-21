import React from 'react';
import {useContext} from 'react';
import {
  ConversionContext,
  CurrencyUpdateAction,
} from '../CurrencyConverterContext';

export function useActiveCurrencyContext(
  isBaseCurrency?: boolean,
): [string | null, CurrencyUpdateAction] {
  const {setBaseCurrency, setQuoteCurrency, baseCurrency, quoteCurrency} =
    useContext(ConversionContext);

  function setSelected(item: string) {
    if (isBaseCurrency == null) return;
    if (isBaseCurrency) {
      setBaseCurrency(item);
    } else {
      setQuoteCurrency(item);
    }
  }

  function isSelected(): string | null {
    if (isBaseCurrency != null) {
      return isBaseCurrency ? baseCurrency : quoteCurrency;
    } else {
      return null;
    }
  }
  return [isSelected(), setSelected];
}
