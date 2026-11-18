1.  ¿Qué se imprime si cambias el 0 por 2000? ¿Cambia el orden?

Respuesta: El orden no cambia (se imprime 1, 3, 2). Lo único que cambia es que el mensaje "2. La pizza está lista" tardará 2 segundos más en aparecer.

 Menciona dos operaciones de una aplicación real (por ejemplo, una app de domicilios) que deberían ser asíncronas y explica por qué.

Respuesta:

La pasarela de pagos al procesar una tarjeta: Porque espera la respuesta externa de un banco y no debe congelar la interfaz de la aplicación.

El rastreo del GPS en tiempo real: Porque consultar coordenadas de manera constante requiere peticiones de red asíncronas para no bloquear la ejecución del programa.

2.  ¿Qué pasa si en dividir quitas el return después de llamar al callback con el error?

Respuesta: El código continuaría ejecutándose y llegaría a la línea de abajo (callback(null, a / b)), lo que provocaría que el callback se ejecute dos veces por error (intentando enviar un error y un resultado exitoso al mismo tiempo).

 ¿Por qué conviene que el error sea el primer parámetro y no el segundo?

Respuesta: Es una convención estándar en Node.js que permite estandarizar la validación: lo primero que hace cualquier función al recibir un callback es verificar si existe un error (if (err)) antes de procesar cualquier dato.

3.  En el ejemplo de Promise.all, ¿por qué el tiempo total es de unos 2 segundos?Respuesta: Porque Promise.all ejecuta todas las promesas al mismo tiempo (en paralelo). El tiempo total no es la suma de todas (que daría 4.5 segundos), sino el de la tarea que más demora en completarse (los 2 segundos de la opción 'A').   
 ¿Qué pasa si en una cadena olvidas el return dentro de un .then()?Respuesta: El siguiente .then() no esperará a que esa sub-promesa termine, por lo que recibirá undefined en lugar de los datos reales, rompiendo la cadena lógica de ejecución.

 