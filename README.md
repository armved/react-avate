# React-Avate - Boilerplate ruled by modern standarts

### What includes
  * Component and Reducer generator.
  * LESS preprocessor (Autoprefixer).
  * Flowtype.
  * Configured ESlint (Prettier).
  * HMR (Hot module replacemant).
  * Code spliting.
  * Assets loading.

### Usage

#### Clone:
 ```bash
git clone https://github.com/armved/react-avate.git
```

#### Dependencies:
 ```bash
npm install
```
or
 ```bash
yarn install
```
#### Change React-Avate to your project name in .env and package.json.

#### If you are using assets (photos, fonts, etc.) you can load them easily. First add it in assets folder then import it in assets/index.js

#### Making new component or reducer:
 ```bash
yarn gen
```
#### If you are generating reducer don't forget add it in rootReducer.

#### Dev server:
Webpack dev server starts in 8080 port (Check .env file for ENV=DEV)
 ```bash
yarn start
```
#### Build:
For deployment perfomance and extracted CSS in .env change ENV to PROD 
 ```bash
yarn build
```

## Contributors
| <img src="https://avatars3.githubusercontent.com/u/20437842?v=4" width="100px;"/><br /> | <img src="https://avatars2.githubusercontent.com/u/26979773?v=4" width="100px;"/><br /> |
| --- | --- |
| [<b>Avetik Harutyunyan (armved) </b>](https://github.com/armved "armved") | [<b>Gegham Samvelyan (VamOSGS)</b>](https://github.com/VamOSGS "VamOSGS") |
