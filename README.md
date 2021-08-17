## Build App
    $ ng build -op dist/example
    $ ng build --output-path=dist/example

    $ ng build --prod --base-href http://localhost/HttpRequests/ --deploy-url http://localhost/HttpRequests/ --output-path=/c/IISApps/HttpRequests

`--base-href` indica la url base para nuestras paginas de nuestra aplicacion, y `--deploy-url` indica la carpeta bajo la cual nuestra aplicación encontrará los recursos necesarios para su ejecución


> Extracted from
> https://qastack.mx/programming/51182322/whats-the-difference-between-base-href-and-deploy-url-parameters-of-angular


## Configurations
La siguiente configuracion permite que se resuelva un problema ocurrido con typescript que forzaba  a las variables a ser inicializadas.

Especificamente ocurria con esta linea de codigo.

```ts
// app.component.ts
@ViewChild('user') userInput: ElementRef;
```
```json
// tsconfig.json
    "lib": [
      "es2018",
      "dom"
    ],
    > "strictPropertyInitialization": false <
  },
  "angularCompilerOptions": {
```

## Github Authentication

  $ git remote set-url origin https://alejogtz:<token>@github.com/alejogtz/custom-api-doc.git

  $ git push -u origin master

> Información extraida de una pregunta en stackoverflow
> https://stackoverflow.com/questions/18935539/authenticate-with-github-using-a-token
