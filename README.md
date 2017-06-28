## Sample NodeJS starter app

This is created as a tutorial, in order to create this app from scrath. You
will need to do the following.

Init NPM module

`npm init -y`

Install YARN

`npm install -g yarn`
`npm install -g babel-cli`

Add some dependencies. First, we will add express which is the web framerwork.
Second, we will add `morgan` which is a better logging module.

`yarn add express morgan`

Since we are starting off with EC5, we will need to install a few deps for that

`yarn add --dev babel-cli babel-preset-es2015`

Create the Babel configuration for the project

touch `.babelrc` in the root directory (of the project)

put this content in the file

```
{
  "presets": ["es2015"]
}
```

Add DB

`yarn add sequelize pg pg-hstore`

In order to work with Sequelize from the CLI, you will need `sequelize-cli`
installed. You can install it globally or call it from `./node_modules/.bin`

`./node_modules/.bin/sequelize init`
`./node_modules/.bin/sequelize model:create --name User --attributes username:string`

