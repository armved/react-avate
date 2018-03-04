module.exports = {
  description: 'Redux reducer',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Reducer name',
    },
  ],
  actions: [
    {
      type: 'add',
      path: '../../src/reducers/{{ camelCase name }}Reducer.js',
      templateFile: './reducer/templates/reducer.hbs',
    },
  ],
};
