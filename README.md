
## Introducción

Orion es una libería de Node para generar datos aleatorios para partidas de Rol.

Basándose inicialmente en las tablas de [Maze Rats](http://questingblog.com/maze-rats/), se ha intentado hacer un sistema más flexible y que se pueda ampliar con otras tablas aleatorias.

## Uso

Se utiliza de la siguiente manera:

Cargar la definicion de los elementos y crear el objeto World con dicha definición:

```typescript
import { worldDefinition } from './lib/definitions/world';
const world = worldCreator(worldDefinition);
```

Cargar las traducciones (por ahora solo en Español):

```typescript
const translations = requireDir('./translations', {recurse: true});
const localize = localizeCreator({locale: 'es', debug: false, translations});
```

### Generar elementos

Pedirle al objeto world que genere un elemento:

```typescript
const e: any = world.get({
  search: [{type: 'mr_npc'}],
  count: 1,
});
```

El anterior codigo permite obtener un npc generado con los datos de MazeRats.
Devolveria algo así (como es aleatorio, cada vez devuelve algo diferente):

```
(mr_npc): mr_npc.mr_npc_civilized
- (mr_npc_civilized): mr_npc_civilized.mr_npc_civilized_female
-- (mr_npc_civilized_female): mr_npc_civilized_female.mr_npc_civilized_female
--- (mr_npc_asset): Encantador
--- (mr_npc_liability): Paranoico
--- (mr_npc_misfortune): Inculpado
--- (mr_npc_goal): Servir %{faction}
---- (mr_faction): mr_faction.mr_faction
----- (mr_faction_type): Gremio artesanos
----- (mr_faction_trait): Piadosa
----- (mr_faction_goal): Extender creencia
--- (mr_npc_reputation): Sobreeducado
--- (mr_appearance): Aguileño
--- (mr_appearance): Guapísimo
--- (mr_appearance): Imponente
--- (mr_pj_physical): Cicatriz ritual
--- (mr_clothes): Ceremoniosa
--- (mr_personality): Tranquilo
--- (mr_mannerism): Habla raro
--- (mr_background): Tejer
--- (mr_npc_secret): Adicto
--- (mr_npc_reputation): Sabio
--- (mr_npc_relation): Suministrador
--- (mr_divinity_domain): %{npc}
---- (mr_npc): mr_npc.mr_npc_underworld
----- (mr_npc_underworld): mr_npc_underworld.mr_npc_underworld_male
------ (mr_npc_underworld_male): mr_npc_underworld_male.mr_npc_underworld_male
------- (mr_npc_asset): Oye rumores
------- (mr_npc_liability): Amor prohivido
------- (mr_npc_misfortune): Condenado
------- (mr_npc_goal): Justicia
------- (mr_npc_reputation): Ambicioso
------- (mr_appearance): Estatutario
------- (mr_appearance): Sólido
------- (mr_appearance): Sólido
------- (mr_pj_physical): Pendientes
------- (mr_clothes): Llamativa
------- (mr_personality): Amargado
------- (mr_mannerism): Voz grave
------- (mr_background): Carrera caballo
------- (mr_npc_secret): Gran fortuna
------- (mr_npc_reputation): Correcto
------- (mr_npc_relation): Descendencia
------- (mr_divinity_domain): Maquinación
------- (mr_male_name): Peregrine
------- (mr_upperclass_surname): Portendorfer
------- (mr_underworld_npc): Verdugo
--- (mr_female_name): Cléofa
--- (mr_upperclass_surname): Gastrell
--- (mr_civilized_npc): Cocinero
```

Como se puede ver, genera automáticamente también los datos relaciones.

Otro ejemplo, genera 2 conjuros:

```typescript
const e: any = world.get({
  search: [{type: 'mr_magic'}],
  count: 2,
});
```

```
(mr_magic): Elemento físico, Elemento físico
- (mr_physical_effect): Reptante
- (mr_physical_element): Vidrio
(mr_magic): Elemento físico, Efecto etéreo
- (mr_physical_effect): de Agarre
- (mr_ethereal_form): Tormenta
```

### Guardar elementos generados

Es posible guardar datos generados en un buffer temporal:

```typescript
world.save(e);
```

De esta manera, al buscar elementos aleatorios, se puede especificar sobre qué queremos elegir aleatoriamente:

#### Elegir aleatoriamente uno nuevo:

```typescript
const e: any = world.get({
  search: [{type: 'mr_npc', random: ERandomOption.random}],
  count: 1,
});
```

Esta es la opción por defecto si no se especifica el parámetro random.

#### Elegir aleatoriamente de uno ya guardado:

```typescript
const e: any = world.get({
  search: [{type: 'mr_npc', random: ERandomOption.exists}],
  count: 1,
});
```

### Elegir aleatoriamente uno nuevo o entre los guardados:

```typescript
const e: any = world.get({
  search: [{type: 'mr_npc', random: ERandomOption.all}],
  count: 1,
});
```

## Posibles elementos a generar

La siguiente tabla muestra todos los elemntos que se pueden obtener:

### Utilizando datos de MazeRats

| Key | Descripción |
| - | - |
|mr_miscellaneous_item            |           |
|mr_tool_item                     |           |
|mr_treasure                      |           |
|mr_treasure_item                 |           |
|mr_treasure_trait                |           |
|mr_weapon_item                   |           |
|mr_worn_item                     |           |
|mr_valuable_material             |           |
|mr_civilized_npc                 |           |
|mr_divinity_domain               |           |
|mr_female_name                   |           |
|mr_lowerclass_surname            |           |
|mr_male_name                     |           |
|mr_mission                       |           |
|mr_npc                           |           |
|mr_npc_asset                     |           |
|mr_npc_civilized                 |           |
|mr_npc_civilized_female          |           |
|mr_npc_civilized_male            |           |
|mr_npc_goal                      |           |
|mr_npc_liability                 |           |
|mr_npc_lowerclass_female         |           |
|mr_npc_lowerclass_male           |           |
|mr_npc_method                    |           |
|mr_npc_misfortune                |           |
|mr_npc_relation                  |           |
|mr_npc_reputation                |           |
|mr_npc_secret                    |           |
|mr_npc_underworld                |           |
|mr_npc_underworld_female         |           |
|mr_npc_underworld_male           |           |
|mr_npc_upperclass_female         |           |
|mr_npc_upperclass_male           |           |
|mr_npc_wilderness                |           |
|mr_npc_wilderness_female         |           |
|mr_npc_wilderness_male           |           |
|mr_underworld_npc                |           |
|mr_upperclass_surname            |           |
|mr_wilderness_npc                |           |
|mr_appearance                    |           |
|mr_background                    |           |
|mr_clothes                       |           |
|mr_mannerism                     |           |
|mr_personality                   |           |
|mr_pj                            |           |
|mr_pj_physical                   |           |
|mr_catastrophe                   |           |
|mr_ethereal_effect               |           |
|mr_ethereal_element              |           |
|mr_ethereal_form                 |           |
|mr_insanity                      |           |
|mr_magic                         |           |
|mr_magic_ingredient              |           |
|mr_mutation                      |           |
|mr_physical_effect               |           |
|mr_physical_element              |           |
|mr_physical_form                 |           |
|mr_potion                        |           |
|mr_animal_aerial                 |           |
|mr_animal_aquatic                |           |
|mr_animal_terrestrial            |           |
|mr_monster                       |           |
|mr_monster_ability               |           |
|mr_monster_feature               |           |
|mr_monster_personality           |           |
|mr_monster_tactic                |           |
|mr_monster_trait                 |           |
|mr_monster_weakness              |           |
|mr_faction                       |           |
|mr_faction_type                  |           |
|mr_faction_trait                 |           |
|mr_faction_goal                  |           |
|mr_city_theme                    |           |
|mr_city_event                    |           |
|mr_city_district_theme           |           |
|mr_city_building                 |           |
|mr_city_upperclass_building      |           |
|mr_city_lowerclass_building      |           |
|mr_city_activity                 |           |
|mr_city_building_room            |           |
|mr_city_tactical_street_feature  |           |
|mr_city_tactical_building_feature|           |
|mr_dungeon                       |           |
|mr_dungeon_entrance              |           |
|mr_dungeon_form                  |           |
|mr_dungeon_layout                |           |
|mr_dungeon_ruination             |           |
|mr_dungeon_reward                |           |
|mr_dungeon_trick                 |           |
|mr_dungeon_room|           |
|mr_dungeon_room_detail|           |
|mr_dungeon_hazard|           |
|mr_dungeon_activity|           |
|mr_trap|           |
|mr_trap_effect|           |
|mr_trap_trigger|           |
|mr_wild_activity|           |
|mr_wild_discovery|           |
|mr_wild_hazard|           |
|mr_wild_landmark|           |
|mr_wild_region|           |
|mr_wild_structure|           |
|mr_wild_trait|           |
|mr_edible_plant|           |
|mr_plant|           |
|mr_poisonous_plant|           |
|mr_inn|           |
|mr_inn_adjective|           |
|mr_inn_name|           |
|mr_inn_quirk|           |
|mr_book_theme|           |

### Utilizando datos de Mythic

| Key                  | Descripción |
| -------------------- | ----------- |
| mythic_event         |             |
| mythic_event_focus   |             |
| mythic_event_meaning |             |

## Instalación y ejecución

Teniendo instalado [NodeJS](https://nodejs.org/es/) en el sistema, basta con hacer en la carpeta raíz del proyecto:

```bash
npm install
```

Y luego `npm run run` para ejecutar el codigo de _index.ts_:

```bash
npm run run
```

Inicialmente genera un jugador NPC aleatorio, pero basta con cambiar la clave de la linea `36` (actualmente: `mr_npc`) por otra de las listas de posibles elementos a generar para obtener otros datos.

## Mejoras

* La definición del mundo se puede cargar dinámicamente desde una url
* Dar un nombre a los elementos guardados
* Categorizar las definiciones, añadirles iconos y tener una API para acceder a ellas y así generar la UI dinámicamente.
