# Servicios de Red (Paso D)

La red del laboratorio requiere servicios básicos para que los equipos se comuniquen, resuelvan nombres y reciban configuración automática.  
En este módulo se configura **DHCP**, que asigna direcciones IP de forma automática a los clientes.

## DHCP

### Paso 1: Instalar el rol DHCP
- Desde *Administrador del servidor* → *Administrar* → *Agregar roles y características*.  
- Seleccionar **Servidor DHCP** y completar la instalación.  
- Finalizar la configuración desde la **bandera de notificación**.  
- ⚠️ Nota: No reiniciar ni avanzar al paso 2 antes de completar la configuración final.  

### Paso 2: Crear y activar el ámbito
- Abrir *Herramientas* → *DHCP*.  
- Expander el servidor → clic derecho en **IPv4** → *Ámbito nuevo*.  
- Definir rango: **192.168.10.50 – 192.168.10.100**.  
- Máscara: **255.255.255.0**.  
- Servidor DNS: **192.168.10.10**.  
- Dominio: **inacap.local**.  
- Activar el ámbito para que los clientes reciban direcciones automáticamente.  
- ⚠️ Nota: No usar IPv6, ya que la red **REDLAB** solo trabaja con IPv4.  

## Cierre
Con estos pasos, el servicio DHCP queda operativo, permitiendo que los equipos del laboratorio obtengan configuración de red de manera automática y confiable.
