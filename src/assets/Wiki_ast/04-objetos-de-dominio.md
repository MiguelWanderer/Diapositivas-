# Cliente de Dominio (Paso C)

Este módulo documenta la creación de la **Unidad Organizativa (OU)**, los usuarios y el grupo dentro del dominio **inacap.local** para continuar con el laboratorio.

## Creación de OU, usuarios y grupo

1. **Abrir consola de Active Directory**  
   - Desde *Administrador del servidor* → *Herramientas* → *Usuarios y equipos de Active Directory*.  

2. **Crear OU Ventas (J-Ventas)**  
   - Click derecho en *inacap.local* → *Nuevo* → *Unidad organizativa* → Nombre: **Ventas**.  

3. **Crear usuarios en la OU Ventas**  
   - Click derecho en *Ventas* → *Nuevo* → *Usuario*.  
   - Crear al menos 2 usuarios (ejemplo: **ATSJOS**).  
   - Definir contraseña segura (la misma usada en todo el laboratorio).  
   - Desmarcar la opción *El usuario debe cambiar la contraseña en el próximo inicio*.  

4. **Crear grupo J-Ventas**  
   - Click derecho en *Ventas* → *Nuevo* → *Grupo*.  
   - Asignar nombre: **J-Ventas**.  

5. **Agregar usuarios al grupo J-Ventas**  
   - Desde cada cuenta de usuario → pestaña *Miembro de* → *Agregar* → incluir en **J-Ventas**.  

## Cierre
Con estos pasos, el dominio **inacap.local** ya cuenta con una estructura básica de OU, usuarios y grupos, lista para aplicar políticas y servicios de red en los siguientes módulos.
