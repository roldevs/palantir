
[![Maintainability](https://api.codeclimate.com/v1/badges/d5f52e978c0e15daacc4/maintainability)](https://codeclimate.com/github/roldevs/palantir/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/d5f52e978c0e15daacc4/test_coverage)](https://codeclimate.com/github/roldevs/palantir/test_coverage) [![CircleCI](https://circleci.com/gh/roldevs/palantir.svg?style=svg)](https://circleci.com/gh/roldevs/palantir)



## Introducción

Palantir es una libería de Node para generar datos aleatorios para partidas de Rol.

Basándose inicialmente en las tablas de [Maze Rats](http://questingblog.com/maze-rats/), se ha intentado hacer un sistema muy flexible y que se pueda ampliar con otras tablas aleatorias.

## Uso

Se utiliza de la siguiente manera:

### Configurar

Primero se crea un objeto de configuración con el conector y el repositorio.
Por ejemplo:

```typescript
import connectorCreator from './lib/connectors/local';
import repositoryCreator from './lib/repository/memory';

const world: IWorldDefinition = {
  locale: 'es',
  connector: connectorCreator({
    rootPath: './definitions',
  }),
  repository: repositoryCreator({
    locale: 'es',
    elements: {},
  }),
};
```

El conector es el lugar desde el que se recibe la definición de las tablas y sus relaciones.
Por ahora puede ser desde un fichero json local `./lib/connectors/local`, definiendo la tabla directamente con el conector: `./lib/connectors/test` o accediendo a un servidor con los ficheros json: `./lib/connectors/remote`.

El repositorio es el lugar donde se van a almacenar los elementos que se quieran guardar, actualmente está disponible el repositorio memoria: `./lib/repository/memory`

En un futuro se desarrollará un conector para obtener las definiciones desde servicios web remotos y repositorios que permitan almacenar los elementos en LocalStorage (entre otros) para no perder los datos entre cargas de páginas, por ejemplo.

### Generar elementos

Llamar al closure: `world` para generar resultados

```typescript
const search: ISearchDefinition[] = [{
  ns: 'mr',
  type: 'npc_underworld',
}];

const world = worldCreator({
  locale: 'es',
  connector: connectorCreator({
    baseURL: 'https://raw.githubusercontent.com/roldevs/palantir/master/definitions/',
  }),
  repository: repositoryCreator({
    locale: 'es',
    elements: {},
  }),
});

world.get(search).then(R.compose(console.log, JSONprettify));
```

El anterior codigo permite obtener un npc generado con los datos de MazeRats.
Devolveria algo así (como es aleatorio, cada vez devuelve algo diferente):

```
{
    "text": "npc.npc_underworld",
    "related": {
      "underworld": {
        "results": [{
          "text": "npc_underworld.npc_underworld_male",
          "related": {
            "male": {
              "results": [{
                "text": "npc_underworld_male.npc_underworld_male",
                "related": {
                  "asset": {
                    "results": [{
                      "text": "Lider %{faction}",
                      "related": {
                        "faction": {}
                      }
                    }]
                  },
                  "liability": {
                    "results": [{
                      "text": "Rastro dinero"
                    }]
                  },
                  "misfortune": {
                    "results": [{
                      "text": "Despedido"
                    }]
                  },
                  "goal": {
                    "results": [{
                      "text": "Tener %{item}",
                      "related": {
                        "item": {}
                      }
                    }]
                  },
                  "method": {
                    "results": [{
                      "text": "Líder"
                    }]
                  },
                  "appearance": {
                    "results": [{
                      "text": "Estatutario"
                    }, {
                      "text": "Cincelado"
                    }, {
                      "text": "Brutal"
                    }]
                  },
                  "physical": {
                    "results": [{
                      "text": "Cicatriz ácido"
                    }]
                  },
                  "clothes": {
                    "results": [{
                      "text": "Perfumada"
                    }]
                  },
                  "personality": {
                    "results": [{
                      "text": "Cobarde"
                    }]
                  },
                  "mannerism": {
                    "results": [{
                      "text": "Ruidoso"
                    }]
                  },
                  "hobby": {
                    "results": [{
                      "text": "Coleccionista"
                    }]
                  },
                  "secret": {
                    "results": [{
                      "text": "%{npc}",
                      "related": {
                        "npc": {}
                      }
                    }]
                  },
                  "reputation": {
                    "results": [{
                      "text": "Terrorífico"
                    }]
                  },
                  "relation": {
                    "results": [{
                      "text": "Cliente"
                    }]
                  },
                  "divinity_domain": {
                    "results": [{
                      "text": "Tormentas"
                    }]
                  },
                  "male_name": {
                    "results": [{
                      "text": "Fitz"
                    }]
                  },
                  "male_surname": {
                    "results": [{
                      "text": "Grimeson"
                    }]
                  },
                  "occupation": {
                    "results": [{
                      "text": "Esclavo de galera"
                    }]
                  }
                }
              }]
            }
          }
        }]
      }
    }
  }
  ```

Como se puede ver, genera automáticamente también los datos relaciones.

Otro ejemplo:

```typescript
const search: ISearchDefinition[] = [{
  ns: 'mr',
  type: 'magic',
}];
```

```
{
  "text": "Elemento físico, Elemento etéreo",
  "related": {
    "physical_effect": {
      "results": [{
        "text": "Perforante"
      }]
    },
    "ethereal_element": {
      "results": [{
        "text": "Luz"
      }]
    }
  }
}
```

### Guardar elementos generados

Under develpment

#### Elegir uno nuevo:

```typescript
const search: ISearchDefinition[] = [{
  ns: 'mr',
  type: 'magic',
  random: ERandomOption.definition,
}];
```

Esta es la opción por defecto si no se especifica el parámetro random.

#### Elegir aleatoriamente de uno ya guardado:

```typescript
const search: ISearchDefinition[] = [{
  ns: 'mr',
  type: 'magic',
  random: ERandomOption.existing,
}];
```

### Elegir aleatoriamente uno nuevo o entre los guardados:

```typescript
const search: ISearchDefinition[] = [{
  ns: 'mr',
  type: 'magic',
  random: ERandomOption.all,
}];
```

## Posibles elementos a generar

La siguiente tabla muestra todos los elemntos que se pueden obtener:

## Instalación y ejecución

Teniendo instalado [NodeJS](https://nodejs.org/es/) en el sistema, basta con hacer en la carpeta raíz del proyecto:

```bash
npm install
```

Y luego `npm run run` para ejecutar el codigo de _index.ts_:

```bash
npm run run
```

Inicialmente genera un jugador NPC aleatorio, pero basta con cambiar la clave de la linea `33` (actualmente: `magic`) por otra de las listas de posibles elementos a generar para obtener otros datos.


## Rebuild semantic

`gulp` should be globally installed

```
cd semantic
gulp build
```