# BackEnd-CoderHouse
### Sprint6
**Implementacion de usuarios**
* Vistas con handlebars:
    * `localhost:8080` : mostrar la página de inicio del comercio y los prod que se venden.
    * `localhost:8080/products/form` : con maquetado del form de creacion de un prod
    * `localhost:8080/auth/register` con maquetado del formulario de registro de un usuario
    * `localhost:8080/auth/login` con maquetado del formulario de inicio de sesión de un usuario
    
* Endpoints
    * `POST /api/sessions/register` para crear un usuario en mongo.
    * `POST /api/sessions/login` para iniciar sesión de un usuario en mongo.
    * `POST /api/sessions/signout` para cerrar sesión de un usuario en mongo.

### Sprint 7
### Refactoreo
**Vistas con handlebars**
* NAVBAR
    * usuario no logueado puede navegar entre “/”, “/auth/register” y “/auth/login”
    * usuario común logueado: puede navegar sólo entre “/” y “/orders” 
    * admin logueado: puede navegar sólo entre “/” y “/form”


* `localhost:8080` debe mostrar la página de inicio del comercio. Debe mostrar los productos paginados (incluir botones de paginación) y al menos un filtro de búsqueda (el que quieran). 
* `localhost:8080/orders` debe mostrar las órdenes del usuario logueado. Pensar la gestión de las mismas (uid por body).
* `localhost:8080/auth/register` el formulario debe fetchear correctamente para registrar un usuario (incluir google).
* `localhost:8080/auth/login` el formulario debe fetchear correctamente para iniciar sesión (incluir google).
* `localhost:8080/products/form` el formulario debe fetchear correctamente para crear un producto.
ALERTAS: de éxito y de error en formularios

**Endpoints**
* `POST /api/sessions/register` para crear un usuario en mongo con estrategia de passport.
* `POST /api/sessions/login` para iniciar sesión de un usuario en mongo  con estrategia de passport.
* `POST /api/sessions/signout` para cerrar sesión de un usuario en mongo verificando token de JWT
* `POST /api/sessions/google` para obtener las credenciales de google.
* `GET /api/sessions/google/cb` para la callback de la estrategia de google





