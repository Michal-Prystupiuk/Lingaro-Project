export const validateMinLength = value => {
  if (!value) return undefined;

  const isLengthValid = value.replace(/\s/g, '').length > 5;
  const error = [];

  if (!isLengthValid) {
    error.push('Name of element should have at least 5 characters');
  }

  return error.length === 0 ? undefined : error;
};
