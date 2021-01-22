import React from 'react';
import { FormattedMessage } from 'react-intl';
import { validateMinLength, validateAlreadyExist } from '../validators';

describe('testing validators for', () => {
  describe('validateMinLength', () => {
    const lengthError = <FormattedMessage id="input.validateMinLength.error" />;

    it('should NOT pass validation for a string containing less than 5 characters', () => {
      expect(validateMinLength('a')).toContainEqual(lengthError);
      expect(validateMinLength('+-')).toContainEqual(lengthError);
      expect(validateMinLength('%$de')).toContainEqual(lengthError);
      expect(validateMinLength('ab1.')).toContainEqual(lengthError);
    });

    it('should NOT pass validation for a string containing spaces and less than 5 characters', () => {
      expect(validateMinLength('a b')).toContainEqual(lengthError);
      expect(validateMinLength('1     z')).toContainEqual(lengthError);
      expect(validateMinLength('   u1 _  e')).toContainEqual(lengthError);
    });

    it('should pass validation for a string containing 5 or more characters', () => {
      expect(validateMinLength('abcde')).toBeUndefined();
      expect(validateMinLength('11234z')).toBeUndefined();
      expect(validateMinLength('!+a_se')).toBeUndefined();
      expect(validateMinLength('abc1m|s0@{')).toBeUndefined();
    });

    it('should pass validation for a string containing spaces and at least 5 characters', () => {
      expect(validateMinLength('  abcde   ')).toBeUndefined();
      expect(validateMinLength('12   34 z')).toBeUndefined();
      expect(validateMinLength(' !  +a_  se ')).toBeUndefined();
      expect(validateMinLength(' 1 2 +  4 5 ')).toBeUndefined();
    });

    it('should pass validation for null, undefined or empty value', () => {
      expect(validateMinLength(null)).toBeUndefined();
      expect(validateMinLength(undefined)).toBeUndefined();
      expect(validateMinLength('')).toBeUndefined();
    });
  });

  describe('validateAlreadyExist', () => {
    const alreadyExistError = (
      <FormattedMessage id="input.validateAlreadyExist.error" />
    );

    it('should pass validation for null, undefined or empty array and/or value', () => {
      expect(validateAlreadyExist('', null)).toBeUndefined();
      expect(validateAlreadyExist('', [])).toBeUndefined();
      expect(validateAlreadyExist(undefined, [])).toBeUndefined();
      expect(validateAlreadyExist(undefined, null)).toBeUndefined();
      expect(validateAlreadyExist(undefined, undefined)).toBeUndefined();
    });

    it('should pass validation when there is no value found in the array', () => {
      expect(
        validateAlreadyExist('test', [
          { id: 0, text: 'test1' },
          { id: 1, text: 'test2' },
          { id: 2, text: 'test3' },
        ]),
      ).toBeUndefined();

      expect(
        validateAlreadyExist('st12', [
          { id: 0, text: 'test1' },
          { id: 1, text: 'test2' },
          { id: 2, text: 'test3' },
        ]),
      ).toBeUndefined();

      expect(
        validateAlreadyExist('est', [
          { id: 0, text: 'test1' },
          { id: 1, text: 'test2' },
          { id: 2, text: 'test3' },
        ]),
      ).toBeUndefined();

      expect(validateAlreadyExist('test', [])).toBeUndefined();
    });

    it('should NOT pass validation when value already exist in the array', () => {
      expect(
        validateAlreadyExist('test', [
          { id: 0, text: 'test1' },
          { id: 1, text: 'test' },
          { id: 2, text: 'test3' },
        ]),
      ).toContainEqual(alreadyExistError);

      expect(
        validateAlreadyExist('Warsaw', [
          { id: 0, text: 'Wars' },
          { id: 1, text: 'Berlin' },
          { id: 2, text: 'Warsaw' },
        ]),
      ).toContainEqual(alreadyExistError);
    });
  });
});
