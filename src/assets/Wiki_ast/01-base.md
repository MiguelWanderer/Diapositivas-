# ¿Como funciona mi Wiki?

## Objetivo

Wiki_JosAst Reune la ifnromacion y pasos para hacer funcionar un Windows Server 2025, el objetivo del mismo es mostrar y dejar claro a las personas como operar si nesecitan montar un servidor de windows, cuales son sus pasos y comandos.

## ¿Qué es Windows 2025?

Windows 2025 no es una versión de escritorio como Windows 10 o 11, sino la nueva edición de Windows Server 2025, el sistema operativo empresarial de Microsoft diseñado para servidores. Está orientado a seguridad avanzada, integración con la nube híbrida (Azure), mejor rendimiento y soporte para cargas de trabajo con inteligencia artificial.

## 🚀 ¿Para qué se utiliza?
-Administrar redes y usuarios
-Control centralizado con Active Directory.
-Gestión de permisos, autenticación y seguridad.
-Ejecutar aplicaciones críticas
-Hospedar bases de datos (SQL Server, Oracle).
-Servir aplicaciones empresariales y web.
-Virtualización y nube híbrida
-Crear y administrar máquinas virtuales con Hyper-V.
-Conectar servidores locales con servicios de Azure.
-Alta disponibilidad y continuidad
-Hotpatching: aplicar parches sin reiniciar.
-Clústeres de conmutación por error para evitar caídas de servicio.
-Soporte para inteligencia artificial y cargas modernas
-Partición de GPU para IA en el perímetro.
-Escalabilidad extrema (hasta 240 TB de RAM en VMs).

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
