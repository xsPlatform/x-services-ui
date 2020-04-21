import ds from '../../designSystem';

export const getColor = (base, variant) => {
  if (variant) {
    return ds.color(base, variant);
  }

  return ds.color(base);
};
