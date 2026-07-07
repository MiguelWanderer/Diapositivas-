# Wiki_ast

## Objetivo

Wiki_ast reúne el material base sobre el Árbol de Sintaxis Abstracta (AST) para usarlo como apoyo en las diapositivas del proyecto.

## ¿Qué es un AST?

Un AST es una representación en forma de árbol de la estructura lógica de un programa. No guarda detalles de formato como espacios, saltos de línea o paréntesis innecesarios; se enfoca en la sintaxis relevante.

## ¿Para qué sirve?

- Analizar código fuente.
- Construir compiladores e intérpretes.
- Aplicar transformaciones automáticas.
- Detectar errores o patrones en el código.
- Generar documentación o visualizaciones.

## Idea básica

Cada nodo del árbol representa una parte del programa:

- Una expresión.
- Una instrucción.
- Una declaración.
- Un literal.
- Un identificador.

## Ejemplo simple

Código:

```js
const total = 2 + 3
```

Estructura conceptual:

- Declaración `const`
- Identificador `total`
- Expresión binaria `2 + 3`
  - Literal `2`
  - Operador `+`
  - Literal `3`

## Puntos clave

1. El AST abstrae la sintaxis superficial.
2. Su forma depende del lenguaje.
3. Es una base común para análisis y transformación de código.

## Próximos temas

- Nodos del AST.
- Diferencia entre AST y parse tree.
- Ejemplos con JavaScript.
- Uso de AST en herramientas reales.
