
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
Por ahora puede ser desde un fichero json local `./lib/connectors/local` o definiendo la tabla directamente con el conector: `./lib/connectors/test`.

El repositorio es el lugar donde se van a almacenar los elementos que se quieran guardar, actualmente está disponible el repositorio memoria: `./lib/repository/memory`

En un futuro se desarrollará un conector para obtener las definiciones desde servicios web remotos y repositorios que permitan almacenar los elementos en LocalStorage (entre otros) para no perder los datos entre cargas de páginas, por ejemplo.

### Generar elementos

Buscar un elemento con el sistema de búsqueda y procesar sus relaciones o sus posibles opciones:

```typescript
const searchObject = searchCreator(world);
const elementObject = elementCreator(world);

const search: ISearchDefinition[] = [{
  ns: 'mr',
  type: 'npc_underworld',
}];

// Buscar elementos segun el criterio de busqueda
searchObject.find(search).then((elements: ISearchResult) => {
  // Para cada elemento...
  R.forEach((element: IElement | IElementDefinition) => {
    // ... procesar sus opciones y sus relaciones
    elementObject.get(element).then((data: IOptionalElementDefinition) => {
      // Mostrar el resultado en la consola
      console.log(JSONprettify(data));
    });
  }, elements);
});
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

### Utilizando datos de MazeRats (mr namespace)

| Key | Descripción |
| - | - |
|miscellaneous_item            |           |
|tool_item                     |           |
|treasure                      |           |
|treasure_item                 |           |
|treasure_trait                |           |
|weapon_item                   |           |
|worn_item                     |           |
|valuable_material             |           |
|civilized_npc                 |           |
|divinity_domain               |           |
|female_name                   |           |
|lowerclass_surname            |           |
|male_name                     |           |
|mission                       |           |
|npc                           |           |
|npc_asset                     |           |
|npc_civilized                 |           |
|npc_civilized_female          |           |
|npc_civilized_male            |           |
|npc_goal                      |           |
|npc_liability                 |           |
|npc_lowerclass_female         |           |
|npc_lowerclass_male           |           |
|npc_method                    |           |
|npc_misfortune                |           |
|npc_relation                  |           |
|npc_reputation                |           |
|npc_secret                    |           |
|npc_underworld                |           |
|npc_underworld_female         |           |
|npc_underworld_male           |           |
|npc_upperclass_female         |           |
|npc_upperclass_male           |           |
|npc_wilderness                |           |
|npc_wilderness_female         |           |
|npc_wilderness_male           |           |
|underworld_npc                |           |
|upperclass_surname            |           |
|wilderness_npc                |           |
|appearance                    |           |
|background                    |           |
|clothes                       |           |
|mannerism                     |           |
|personality                   |           |
|pj                            |           |
|pj_physical                   |           |
|catastrophe                   |           |
|ethereal_effect               |           |
|ethereal_element              |           |
|ethereal_form                 |           |
|insanity                      |           |
|magic                         |           |
|magic_ingredient              |           |
|mutation                      |           |
|physical_effect               |           |
|physical_element              |           |
|physical_form                 |           |
|potion                        |           |
|animal_aerial                 |           |
|animal_aquatic                |           |
|animal_terrestrial            |           |
|monster                       |           |
|monster_ability               |           |
|monster_feature               |           |
|monster_personality           |           |
|monster_tactic                |           |
|monster_trait                 |           |
|monster_weakness              |           |
|faction                       |           |
|faction_type                  |           |
|faction_trait                 |           |
|faction_goal                  |           |
|city_theme                    |           |
|city_event                    |           |
|city_district_theme           |           |
|city_building                 |           |
|city_upperclass_building      |           |
|city_lowerclass_building      |           |
|city_activity                 |           |
|city_building_room            |           |
|city_tactical_street_feature  |           |
|city_tactical_building_feature|           |
|dungeon                       |           |
|dungeon_entrance              |           |
|dungeon_form                  |           |
|dungeon_layout                |           |
|dungeon_ruination             |           |
|dungeon_reward                |           |
|dungeon_trick                 |           |
|dungeon_room|           |
|dungeon_room_detail|           |
|dungeon_hazard|           |
|dungeon_activity|           |
|trap|           |
|trap_effect|           |
|trap_trigger|           |
|wild_activity|           |
|wild_discovery|           |
|wild_hazard|           |
|wild_landmark|           |
|wild_region|           |
|wild_structure|           |
|wild_trait|           |
|edible_plant|           |
|plant|           |
|poisonous_plant|           |
|inn|           |
|inn_adjective|           |
|inn_name|           |
|inn_quirk|           |
|book_theme|           |

### Utilizando datos de Mythic (mythic namespace)

| Key                  | Descripción |
| -------------------- | ----------- |
| event         |             |
| event_focus   |             |
| event_meaning |             |

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

* Mover el numero de elementos a buscar directamente al motor de busqueda
* La definición del mundo se puede cargar dinámicamente desde una url: Conector WebService
* Implementar otros repositorios: Base de datos, LocalStorage, etc
* Terminar la implementacion de la persistencia en repositorio
* Dar un nombre a los elementos guardados
* Categorizar las definiciones, añadirles iconos y tener una API para acceder a ellas y así generar la UI dinámicamente.
