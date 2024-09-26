import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    semi: true,
  },
  formatters: true,
  isInEditor: false,
  rules: {
    'no-console': ['off'],
    'antfu/no-top-level-await': ['off'],
  },
});
