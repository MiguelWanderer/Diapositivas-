# Active Directory (Paso B)

Este módulo documenta la instalación y promoción del servidor como controlador de dominio.  
Active Directory es el núcleo de la gestión de identidades y acceso en Windows Server, con soporte para controladores de dominio de solo lectura (RODC), administración visual o mediante PowerShell, y una arquitectura jerárquica que centraliza usuarios, equipos, grupos y recursos.

## Requisitos Previos
- Haber completado la instalación base del servidor (Paso A).  
- Contar con acceso administrativo al sistema.  
- Tener configurada la red del laboratorio (**REDLAB**).  

## Pasos de Instalación y Configuración

1. **Agregar roles y características**  
   - Desde el Administrador del servidor, seleccionar *Agregar roles y características*.  

2. **Instalar AD DS**  
   - Marcar el rol *Active Directory Domain Services (AD DS)* e instalarlo.  

3. **Promover el servidor a controlador de dominio**  
   - Usar el asistente de notificación para iniciar la promoción.  

4. **Crear un nuevo bosque**  
   - Definir el dominio raíz como **inacap.local**.  

5. **Verificar DNS**  
   - El servicio DNS se instala automáticamente durante el proceso.  

6. **Reiniciar el servidor**  
   - Aplicar cambios y reiniciar para finalizar la promoción.  

7. **Iniciar sesión con credenciales del dominio**  
   - Acceder con **INACAP\Administrador** para continuar el laboratorio.  

## Cierre
Con estos pasos, el servidor queda preparado como **controlador de dominio**, listo para la unión de clientes, configuración de servicios de red y aplicación de políticas de grupo.
