# babel-options-demo
Sample demo of issues reading ```only``` and ```ignore``` options from config (.babelrc or package.json/babel).

## Overview
In this example, the root .babelrc contains:
```
{
  "only": "/transpile",
  "ignore": "node_modules",
  "presets": ["es2015", "stage-0"]
}
```
A .babelrc file exists in the /skip folder, too.
When babel is executed with the command line options,
```
babel  --only /transpile ./src -d ./dest
```
only the /transpile folder is processed, however, when the command line switch is removed,
```
babel ./src -d ./dest
```
the root .babelrc "only" option is ignored and both folders end up in the /dest output.
