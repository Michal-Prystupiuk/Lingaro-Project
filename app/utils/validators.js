import React from 'react';
import { FormattedMessage } from 'react-intl';

/** @type {(value?: string) => any} */
export const validateMinLength = value => {
  if (!value) return undefined;

  const isLengthValid = value.replace(/\s/g, '').length > 4;
  const error = [];

  if (!isLengthValid) {
    error.push(<FormattedMessage id="input.validateMinLength.error" />);
  }

  return error.length === 0 ? undefined : error;
};

/** @type {(value?: string, array?: [{id: number, text: string}]) => any} */
export const validateAlreadyExist = (value, array) => {
  if (!value || !array) return undefined;

  const isValueInArray = array.find(element => element.text === value);
  const error = [];

  if (isValueInArray) {
    error.push(<FormattedMessage id="input.validateAlreadyExist.error" />);
  }

  return error.length === 0 ? undefined : error;
};
