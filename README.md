# Visualizador de valor de criptomonedas

La página es una plataforma web que permite a los usuarios ver el valor actual de algunas criptomonedas. Para acceder a la información de los activos, el usuario debe iniciar sesión con una única credencial válida.

Este proyecto ha sido desarrollado utilizando la librería de React, Next.js, y para las pruebas unitarias se ha utilizado React Testing Library.

## Características de la página

- **Inicio de sesión:** El usuario debe iniciar sesión con una única credencial válida para poder acceder a la información de los activos. La plataforma garantiza la seguridad de las credenciales a través de un sistema de encriptación y autenticación de alta seguridad.

- **Tabla de Activos:** Una vez que el usuario ha iniciado sesión, se muestra una tabla con la información de los activos. La tabla se puede ordenar por valor de menor a mayor y por nombre alfabéticamente.

## Instrucciones para la inicialización del proyecto

Para poder utilizar este proyecto, es necesario seguir los siguientes pasos:

- Abra la terminal y acceda a la carpeta raíz del proyecto.
- Instale las dependencias necesarias mediante el comando npm install.
- Inicie el proyecto ejecutando el comando npm run dev.
- Acceda a la página web del proyecto a través de su navegador utilizando la URL http://localhost:3000/.

Por favor, asegúrese de tener instalado Node.js y NPM en su sistema antes de ejecutar estos comandos.

Si necesita ayuda adicional para la instalación de Node.js y NPM, por favor visite la documentación oficial de Node.js en https://nodejs.org/.

# Descripción del test

El objetivo de este test es validar las credenciales de inicio de sesión en el componente de Login. Al tratarse de una funcionalidad crítica en términos de seguridad y privacidad del usuario, es fundamental asegurarse de que las credenciales ingresadas sean correctas y estén validadas adecuadamente.

En este test, se verifica la validación de dos elementos cruciales en el proceso de inicio de sesión: el correo electrónico y la contraseña. En primer lugar, se valida que el correo electrónico se ingrese correctamente en el formato solicitado: **grupoASD@gmail.com**. Es importante tener en cuenta que la validación es sensible a las mayúsculas, por lo que se debe asegurar que se ingrese correctamente en este formato.

Por otro lado, se valida la contraseña ingresada. En este caso, la contraseña requerida debe cumplir con ciertos requisitos específicos para ser aceptada, como incluir al menos una mayúscula, un número y un carácter especial. La contraseña establecida para este test es **Rjs2022\***.

En resumen, al realizar este test se busca garantizar que las credenciales de inicio de sesión sean ingresadas y validadas correctamente, para proteger la información sensible del usuario y asegurar una experiencia de usuario satisfactoria.
