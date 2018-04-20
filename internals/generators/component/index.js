module.exports = {
  description: 'React component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name',
    },
    {
      type: 'list',
      name: 'type',
      message: 'Type of the component',
      default: 'Stateless',
      choices: () => ['Stateless', 'Stateful'],
    },
    {
      type: 'list',
      name: 'withContainer',
      message: 'Create container for this component?',
      default: 'No',
      choices: () => ['Yes', 'No'],
    },
  ],
  actions: (data) => {
    let componentTemplate;
    switch (data.type) {
      case 'Stateless': {
        componentTemplate = './component/templates/stateless.hbs';
        break;
      }
      case 'Stateful': {
        componentTemplate = './component/templates/stateful.hbs';
        break;
      }
      default: {
        componentTemplate = './component/templates/stateless.hbs';
        break;
      }
    }
    return [
      {
        type: 'add',
        path: '../../src/components/{{ properCase name }}/{{ properCase name }}.jsx',
        templateFile: componentTemplate,
      },
      {
        type: 'add',
        path: '../../src/components/{{ properCase name }}/{{ properCase name }}Styles.less',
        templateFile: './component/templates/styles.less',
      },
      data.withContainer === 'Yes'
        ? {
          type: 'add',
          path: '../../src/components/{{ properCase name }}/index.js',
          templateFile: './component/templates/container.hbs',
        }
        : {
          type: 'add',
          path: '../../src/components/{{ properCase name }}/index.js',
          templateFile: './component/templates/export.hbs',
        },
    ];
  },
};
