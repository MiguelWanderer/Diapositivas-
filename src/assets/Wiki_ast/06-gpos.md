# Políticas de Grupo (Paso E)

Las **GPO** permiten aplicar configuraciones de forma centralizada a usuarios y equipos del dominio.  
En este módulo se documenta la creación y aplicación de una directiva que limita el acceso al **Panel de control** en los equipos del laboratorio.

El procedimiento se divide en tres momentos:  
1. Crear y vincular la GPO en la OU correspondiente.  
2. Configurar la restricción dentro del editor de directivas.  
3. Verificar el efecto desde el cliente con una sesión de dominio.  

⚠️ Nota: Para trabajar con GPO es necesario contar con un grupo de equipos; en este laboratorio se simula mediante máquinas virtuales en **VirtualBox**.

## Aplicación de Políticas de Grupo

### Paso 1: Crear y vincular la GPO
- Abrir *Herramientas* → *Administración de directivas de grupo*.  
- Ubicar la OU **Ventas** y crear una nueva GPO vinculada allí.  
- Asignar nombre: **GPO-Ventas**.  

### Paso 2: Configurar la restricción
- Click derecho sobre la GPO → *Editar*.  
- Entrar en *Configuración de usuario* → *Directivas* → *Plantillas administrativas* → *Panel de control*.  
- Habilitar la opción **Prohibir el acceso al Panel de control y a la configuración de PC**.  
- ⚠️ Nota: No confundir con opciones similares en *Pantalla*.  

### Paso 3: Comprobar la aplicación en el cliente
- En el cliente, ejecutar: `gpupdate /force`.  
- Cerrar sesión y volver a entrar.  
- Verificar que el Panel de control esté bloqueado.  
- Si no se actualiza la política o no se reinicia sesión, el cambio no se aplicará.  

## Cierre
Con estos pasos, la GPO queda aplicada en la OU **Ventas**, bloqueando el acceso al Panel de control para los usuarios del laboratorio.
