Overlay HTML/CSS/JS para Pokémon Champions con sprites, items y variantes de overlay para OBS
Diseño del Overlay por Ale Lymon:
- Twitter: https://x.com/Ale_Lymon
- Comisiones Overlay: https://vgen.co/AleLymon

La base del widget automático fue tomada del widget de CdoDiego pero modificada para agregar muchas más funciones: https://github.com/cdoDiego

# Overlay Champions - Manual rápido

Overlay HTML/CSS/JS para OBS con soporte para:

* sprites de Pokémon
* items y megapiedras
* múltiples estilos de overlay
* formas especiales y regionales
* control desde el chat de Twitch

## Uso en OBS

Crea una Fuente de Navegador con resolución 1920x1080 con una URL como esta:

`https://soymaikikii.github.io/Overlay-Champions-Maikikii-AleLymon/index.html?canal=TUCANAL&overlay=1`

Observa que en la URL hay una parte que dice "TUCANAL", debes de borrar esa palabra y poner tu usuario de twitch en minúsculas. Por ejemplo en mi caso sería:

`https://soymaikikii.github.io/Overlay-Champions-Maikikii-AleLymon/index.html?canal=soymaikikii&overlay=1`

Puedes probar las siguientes opciones:

* `index.html?canal=TU_CANAL&overlay=1`
* `index.html?canal=TU_CANAL&overlay=1-nocam`
* `index.html?canal=TU_CANAL&overlay=2`
* `index.html?canal=TU_CANAL&overlay=2-nocam`

## Permisos

Solo el streamer o un mod del canal pueden ejecutar comandos.

## Comandos

### Pokémon

* `!poke1 incineroar` → pone un Pokémon en el slot 1
* `!poke1` → limpia solo el Pokémon del slot 1
* `!poke1 d` → marca el Pokémon como derrotado
* `!poke1 alive` → revive el Pokémon

### Items

* `!item1 leftovers` → pone un item en el slot 1
* `!item1` → quita el item del slot 1

### Comando combinado recomendado

`!slot1 incineroar ; sitrus`

Este comando coloca:

* el Pokémon
* el item

También acepta `|` y `/` como separadores.

### Limpiar slots

* `!slot1` → limpia completamente el slot 1
* `!pokel` → limpia todo el equipo
* `!pokel 1 3 5` → limpia slots específicos

## Alias de items

Se pueden usar nombres en inglés o español según el item.

Ejemplos:

* `leftovers` / `restos`
* `focus-sash` / `banda-focus` / `sash`
* `sitrus` / `baya zidra`
* `life-orb` / `vidasfera`

## Formas soportadas

Ejemplos:

* `!poke1 charizard -shiny`
* `!poke2 blastoise -mega`
* `!poke3 vulpix -alola`
* `!poke4 growlithe -hisui`
* `!poke5 tornadus -therian`
* `!poke6 rotom -wash`

## Megapiedras

Las megapiedras funcionan como items normales.
Ejemplos:

* `!item1 gengarita`
* `!item2 lucarita`
* `!item3 charizardita-x`
* `!item4 mewtwoita-y`

## Ejemplos rápidos

* `!slot1 incineroar ; sitrus`
* `!slot2 garchomp ; choice-scarf`
* `!slot3 rotom-wash ; leftovers`
* `!poke2 d`
* `!item3 life-orb`
* `!pokel`
