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
  ],
  actions: data => {
    let componentTemplate;

    switch (data.type) {
      case 'Stateless': {
        componentTemplate = './component/templates/stateless.hbs';
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
        path: '../../src/components/{{ properCase name }}/index.jsx',
        templateFile: componentTemplate,
      },
      {
        type: 'add',
        path: '../../src/components/{{ properCase name }}/styles.less',
        templateFile: './component/templates/styles.less',
      },
    ];
  },
};
