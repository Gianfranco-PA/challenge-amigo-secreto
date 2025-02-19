# Amigo Secreto

Este proyecto es una aplicación web diseñada para realizar un sorteo del juego del amigo secreto. Permite ingresar los nombres de los amigos y, presionando el botón de sorteo, elegir de forma aleatoria a uno de ellos.

## Características

- **Agregar amigos:** Ingresa y guarda los nombres de los amigos.
- **Lista de amigos:** Visualiza en pantalla todos los amigos que han sido agregados.
- **Sorteo aleatorio:** Selecciona al azar a un amigo como “amigo secreto”.
- **Validaciones:** Se muestra una alerta si se intenta agregar un nombre vacío o sortear con menos de dos amigos.

## Cómo Utilizarlo

1. **Agregar amigos:**
   - Escribe el nombre de un amigo en el campo de texto que aparece en la sección "Digite el nombre de sus amigos".
   ![1er paso: escribir el nombre de un amigo](assets/README/1-ingresar-nombre.png)
   - Haz clic en el botón “Añadir” para que el nombre se agregue a la lista.
   ![2do paso: presionar boton añadir](assets/README/2-presionar-añadir.png)
   - Repite el proceso para agregar todos los amigos que desees.
   ![3er paso: repetir el proceso para todos los amigos](assets/README/3-repetir-proceso.png)

2. **Realizar el sorteo:**
   - Asegúrate de haber agregado al menos dos amigos.
   - Haz clic en el botón “Sortear amigo”.
   - El resultado del sorteo se mostrará en la sección “Resultado”.

   ![4to paso: presionar Sortear amigo](assets/README/4-sorteo.png)

## Alertas

- Si intentas agregar un amigo sin escribir un nombre, aparecerá un mensaje pidiendo que ingreses un nombre.
![Alerta de falta ingresar un amigo](assets/README/alerta-1-no-amigo.png)
- Si intentas realizar el sorteo con menos de dos amigos, se mostrará una alerta indicando el requisito mínimo.
![Alerta de insuficientes amigos](assets/README/alerta-2-falta-amigos.png)
