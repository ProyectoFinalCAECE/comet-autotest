***********************************************************

Instalar nightwatch (http://nightwatchjs.org/)
Seguir los pasos del README para configurar el entorno

En mi caso ya tenia Firefox y no Chrome, por lo que Firefox funcionó de una.

Chrome:
- Descargar chromedriver v2.18 (https://sites.google.com/a/chromium.org/chromedriver/downloads)
- Copiar chromedriver a /bin

Configurar nightwatch:
- Editar nightwatch.json (en mi caso en /usr/local/lib/node_modules/nightwatch/bin)
- En "selenium" -> "webdriver.chrome.driver" colocar la ruta a chromedriver
- En "test_settings" agregar una nueva entrada "chrome", copiando "default" y
modificando "browserName" de "firefox" "chrome"

Tests de Comet:
- Clonar "comet-autotest" del repositorio de Comet.
Los tests estan en la subcarpeta /tests

Tambien estan tests "completos" estan en la subcarpeta /tests_completos

Custom Commands:
- Editar nightwatch.json nuevamente, y agregar "comet-autotest/custom-commands" como path de custom-commands

Si selenium estuviera corriendo, cerrarlo y volverlo a abrir para que tome los cambios

Ejemplos:
Desde la carpeta nightwatch ejecutar:
  nightwatch -e chrome -t comet-autotest/tests/usuario_login.js
Ejecutar tests con el tag "integrado":
  nightwatch -t -e chrome -a "integrado"


***********************************************************
