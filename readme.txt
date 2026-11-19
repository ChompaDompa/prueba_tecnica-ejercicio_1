================================================================================
 EJERCICIO 1 - PRUEBA E2E DEL FLUJO DE COMPRA EN https://www.saucedemo.com/
 Serenity BDD (Serenity/JS) + Playwright Test + TypeScript - Patron Screenplay
================================================================================

1. DESCRIPCION
--------------
Prueba funcional automatizada (E2E) que cubre el flujo de compra completo:
  - Autenticarse con standard_user / secret_sauce
  - Agregar dos productos al carrito (Sauce Labs Backpack y Sauce Labs Bike Light)
  - Visualizar el carrito
  - Completar el formulario de compra (nombre, apellido, codigo postal)
  - Finalizar la compra hasta la confirmacion "THANK YOU FOR YOUR ORDER"

Validaciones realizadas en cada etapa:
  - URL de la pagina de productos tras el login (/inventory.html)
  - El contador del carrito muestra 2 productos
  - El carrito contiene exactamente los dos productos agregados
  - El resumen de la orden contiene los dos productos y el "Item total"
    corresponde a la suma de sus precios (29.99 + 9.99 = 39.98)
  - URL de confirmacion (/checkout-complete.html) y mensaje
    "Thank you for your order!" (comparacion sin distinguir mayusculas)

2. TECNOLOGIAS
--------------
  - Serenity/JS 3.49 (implementacion JavaScript/TypeScript de Serenity BDD)
  - Playwright Test 1.64 (runner y navegador Chromium)
  - TypeScript
  - Serenity BDD CLI 5.x (genera el reporte HTML "living documentation")

3. REQUISITOS PREVIOS
---------------------
  - Node.js 20 o superior (probado con Node.js 24.21)   -> node -v
  - Java JRE/JDK 17 o superior (lo usa el generador de reportes Serenity BDD)
                                                          -> java -version
  - Git                                                   -> git --version
  - Conexion a internet (sitio bajo prueba, dependencias npm y navegador)

4. INSTALACION
--------------
  4.1 Clonar el repositorio:
        git clone <URL_DEL_REPOSITORIO>
        cd <CARPETA_DEL_REPOSITORIO>

  4.2 Instalar dependencias (descarga tambien el jar de Serenity BDD CLI
      mediante el script "postinstall"):
        npm ci

  4.3 Instalar el navegador de Playwright:
        npx playwright install chromium
      (En Linux puede requerirse: npx playwright install --with-deps chromium)

5. EJECUCION
------------
  5.1 Ejecucion completa (headless) + generacion de reportes:
        npm test

      Este comando:
        a) limpia la carpeta target/
        b) ejecuta la prueba con Playwright Test
        c) genera el reporte Serenity BDD (aunque la prueba falle)

  5.2 Ejecucion viendo el navegador (modo headed):
        npm run test:headed

  5.3 Solo ejecutar la prueba (sin reporte Serenity):
        npm run test:execute

  5.4 Verificar tipos de TypeScript:
        npm run lint:types

  5.5 (Opcional) Usar otras credenciales mediante variables de entorno:
        PowerShell:  $env:SAUCE_USERNAME="standard_user"; $env:SAUCE_PASSWORD="secret_sauce"; npm test
        Bash:        SAUCE_USERNAME=standard_user SAUCE_PASSWORD=secret_sauce npm test

6. REPORTES
-----------
  Generados en cada ejecucion (carpeta target/, no versionada):
    - Serenity BDD:     target/site/serenity/index.html
                        (abrir con: npm run report:open)
    - Playwright HTML:  target/playwright-report/index.html
                        (abrir con: npx playwright show-report target/playwright-report)
    - Consola:          resumen paso a paso del Serenity/JS console reporter

  Evidencia versionada de la ultima ejecucion exitosa (carpeta reports/):
    - reports/serenity/index.html
    - reports/playwright-report/index.html
  Para actualizarla tras una ejecucion: npm run report:publish

  El reporte Serenity BDD incluye cada tarea y paso del actor con su
  captura de pantalla (Photographer: TakePhotosOfInteractions).

7. ESTRUCTURA DEL PROYECTO
-------------------------
  playwright.config.ts        Configuracion de Playwright + Serenity/JS
                              (baseURL, reporters, fotografo, navegador)
  src/ui/                     Page Elements: localizadores por atributo data-test
  src/tasks/                  Tareas Screenplay (Login, AddProductsToCart,
                              ViewCart, ProvideCheckoutInformation, FinishOrder)
  src/questions/              Preguntas Screenplay (ShoppingCart, OrderSummary,
                              OrderConfirmation)
  test/purchase-flow.spec.ts  Escenario E2E del flujo de compra
  test/data/                  Datos de prueba (usuario, cliente, productos)
  reports/                    Reportes de evidencia de la ultima ejecucion
  conclusiones.txt            Hallazgos y conclusiones del ejercicio
