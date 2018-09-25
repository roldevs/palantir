
## Introducción

Orion es una libería de Node para generar datos aleatorios para partidas de Rol.

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
    baseURL: 'https://raw.githubusercontent.com/rmoliva/orion/master/definitions/',
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
  "text": "npc_underworld.npc_underworld_female",
  "related": {
    "female": {
      "search": [{
          "ns": "mr",
          "type": "npc_underworld_female"
      }],
      "results": [{
          "text": "npc_underworld_female.npc_underworld_female",
          "related": {
            "asset": {
              "search": [{
                  "ns": "mr",
                  "type": "npc_asset"
                }],
              "results": [{
                  "text": "Imitador"
                }]
            },
            "liability": {
              "search": [{
                  "ns": "mr",
                  "type": "npc_liability"
                }],
              "results": [{
                  "text": "Hereje"
                }]
            },
            "misfortune": {
              "search": [{
                  "ns": "mr",
                  "type": "npc_misfortune"
                }],
              "results": {
                  "text": "Chantajeado"
                }]
            },
            "goal": {
              "search": [{
                  "ns": "mr",
                  "type": "npc_goal"
                }
              ],
              "results": [{
                  "text": "Forjar %{item}",
                  "related": {
                    "item": {
                      "search": [{
                          "ns": "mr",
                          "type": "item",
                          "random": "all"
                        }],
                      "results": []
                    }
                  }
                }
              ]
            },
            "method": {
              "search": [{
                  "ns": "mr",
                  "type": "npc_reputation"
                }],
              "results": [{
                  "text": "Influyente"
                }]
            },
            "appearance": {
              "search": [{
                  "ns": "mr",
                  "type": "appearance"
                }],
              "count": 3,
              "results": [{
                  "text": "Elegante"
                }, {
                  "text": "Sonrojado"
                }, {
                  "text": "Avejentado"
                }]
            },
            "physical": {
              "search": [{
                  "ns": "mr",
                  "type": "pc_physical"
                }],
              "results": [{
                  "text": "Piel cobriza"
                }]
            },
            "clothes": {
              "search": [{
                  "ns": "mr",
                  "type": "clothes"
                }],
              "results": [{
                  "text": "Talla grande"
                }]
            },
            "personality": {
              "search": [{
                  "ns": "mr",
                  "type": "personality"
                }],
              "results": [{
                  "text": "Desconfiado"
                }]
            },
            "mannerism": {
              "search": [{
                  "ns": "mr",
                  "type": "mannerism"
                }],
              "results": [{
                  "text": "Habla florido"
                }]
            },
            "hobby": {
              "search": [{
                  "ns": "mr",
                  "type": "hobby"
                }],
              "results": [{
                  "text": "Dibujar"
                }]
            },
            "secret": {
              "search": [{
                  "ns": "mr",
                  "type": "npc_secret"
                }],
              "results": [{
                  "text": "Ilusión"
                }]
            },
            "reputation": {
              "search": [{
                  "ns": "mr",
                  "type": "npc_reputation"
                }],
              "results": [{
                  "text": "Fiestero"
                }]
            },
            "relation": {
              "search": [{
                  "ns": "mr",
                  "type": "npc_relation"
                }],
              "results": [{
                  "text": "Cliente"
                }]
            },
            "divinity_domain": {
              "search": [{
                  "ns": "mr",
                  "type": "divinity_domain"
                }],
              "results": [{
                  "text": "La forja"
                }]
            },
            "male_name": {
              "search": [{
                  "ns": "mr",
                  "type": "female_name"
                }],
              "results": [{
                  "text": "Démona"
                }]
            },
            "male_surname": {
              "search": [{
                  "ns": "mr",
                  "type": "upperclass_surname"
                }],
              "results": [{
                  "text": "Philliphent"
                }]
            },
            "occupation": {
              "search": [{
                  "ns": "mr",
                  "type": "underworld_npc"
                }],
              "results": [{
                  "text": "Ratero"
                }]
            }
          }
        }
      ]
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
  "text": "Elemento físico, Forma física",
  "related": {
    "physical_element": {
      "search": [{
          "ns": "mr",
          "type": "physical_element"
        }],
      "results": [{
          "text": "Obsidiana"
        }]
    },
    "physical_form": {
      "search": [{
          "ns": "mr",
          "type": "physical_form"
        }],
      "results": [{
          "text": "Ojo"
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

## Mejoras

* Implementar otros repositorios: Base de datos, LocalStorage, etc
* Terminar la implementacion de la persistencia en repositorio
* Dar un nombre a los elementos guardados
* Categorizar las definiciones, añadirles iconos y tener una API para acceder a ellas y así generar la UI dinámicamente.
