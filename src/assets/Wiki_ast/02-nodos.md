# Nodos del AST

## Idea central

Un AST se compone de nodos. Cada nodo representa una parte concreta del programa y mantiene relaciones con otros nodos.

## Tipos comunes

- Declaraciones.
- Expresiones.
- Identificadores.
- Literales.
- Operadores.

## Ejemplo mental

En `const total = 2 + 3`, el nodo raíz puede ser una declaración y dentro de ella aparecen el identificador `total` y la expresión `2 + 3`.

## Qué conviene recordar

El árbol no guarda el código tal como fue escrito, sino la estructura que importa para analizarlo o transformarlo.