# Nnodes Car

Proyecto desarrollado con [Angular.js](http://angularjs.org) en su versión 1.5.3 y [Rails](http://rubyonrails.org/) en su version 4.2.6. Para la base de datos se utilizó sqlite3 (Si no lo tienes intalado revisa el siguiente link: [Intala sqlite3](http://mislav.net/rails/install-sqlite3/)).

## Antes de empezar

Debes intalar las dependencias de rails y las dependencias de angular. Ademas se debe migrar la base de datos. Para esto ejecuta los siguientes comandos:

    bundle install
    bower install
    rake db:migrate

## Iniciar servidor

Para iniciar el servidor se debe ejecutar las siguientes operaciones:

		rails s

Luego en su navegador ingrese a http://localhost:3000