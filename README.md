# Ionic + Angular mobile hybrid POC
This app was developed to test Ionic + Angular against React Native and Flutter, performing different tests and comparissons between these three frameworks. It uses an external API to reach information for the main feed, has all sorts of Ionic components (specially inputs in the "edit profile" section) and access to hardware-level features such as the camera.


# Process documentation and instructions: 


# Sobre la versión 4 de Ionic y su característica framework-agnostic
Ionic funcinaba hasta su versión 3 exclusivamente con AngularJS primero y Angular2+ después. Sin embargo a partir de su versión 4, el framework fue reescrito para, en teoría, no depender de ningún framework front-end, sino que incorpora un compilador de componentes web, Stencil, que se encarga de tomar como input los componentes de cualquiera de los tres frameworks soportados (Angular, React o Vue) . Sin emabrgo, al momento de escribir este artículo la compatibilidad full-full para Ionic+Vue aún no ha sido lanzada. Si bien hay ejemplos de apps en producción utilizando esta combinación, por la falta de soporte oficial y fundamentalmente de documentación y ejemplos recomiendo fuertemente utilizar React (recién lanzado) o Angular hasta el lanzamiento oficial de Ionic/Vue. 


# Sobre Capacitor y Cordova
Originalmente también hasta su versión 3, Ionic utilizaba Cordova directamente para instalar plugins para acceder a las características nativas de los dispositivos y hacer los builds para iOS y Android. El equipo de Ionic desarrolló luego otra herramienta (framework?) llamado Capacitor, que es compatible con las versiones anteriores de Cordova y cumple casi las mismas funciones, pero le permite al equipo de Ionic tener más control sobre todo el pipeline de desarrollo y buildeo. En mi experiencia particularmente para Ionic, hay cosas que están mejor documentadas para Capacitor, su uso es más simple y todos los plugins diseñados para Cordova funcionan (en teoría) con Capacitor, ya que es backwards-compatible con Cordova. En resumen recomiendo utilizar Capacitor aunque puede que algunos plugins o documentaciones estén solo orientadas a Cordova, porque la tendencia en Ionic es a deprecar Cordova en un tiempo. Por ejemplo, la versión Beta de Ionic/Vue que hay ya no soporta Cordova, sino solamente Capacitor. 


# Requisitos
Para poder codear y buildear se necesitan, de mínima:


## Android:
- Computadora con Windows, Ubuntu o macOS
- Android Studio
- SDK de Java 8 y JDK
- Android SDK instalado para las versiones de Android para las que se quiera buildear
- Versión reciente de Node y NPM (recomiendo fuertemente utilizar NVM)


## iOS:
- Computadora con macOS High Sierra o superior (no hace falta hacer todo el desarrollo en la Mac, simplemente a la hora de buildear)
- xCode 10 o superior (con Ionic no se puede buildear en versiones anteriores para sdks menores al 11)
- Versión reciente de Node y NPM (recomiendo fuertemente utilizar NVM)
- Cuenta de desarrollador de iOS
- Ciclo de Desarrollo y Buildeo


#### En términos generales, el ciclo de desarrollo consiste en lo siguiente:

- Creamos un proyecto web con algún framework (React, Angular o Vue) a través de sus respectivos CLI o uno custom (sin framework)
- Como alternativa, podemos usar el CLI de Ionic para generar proyecto de 0 que venga con Ionic ya integrado (en la práctica va a correr el CLI del framework que seleccionemos por abajo, así que es lo mismo)
- Agregamos Ionic con Ionic init (previamente se instala con Npm)
- Activamos Capacitor o Cordova (o los dos)
- Vamos desarrollando en el marco del framework como si estuviéramos codeando una web normal. Las diferencias principales son dos: además de los componentes HTML tradicionales, contamos con el set de componentes de Ionic que emulan el look and feel de los componentes nativos de iOS y Android. Lo bueno es que nosotros solo utilizamos el componente como nos lo provee Ionic y el framework solo se encarga de adaptarlo al look and feel de uno u otro sistema operativo reconociendo automáticamente en qué dispositivo está corriendo. Por otro lado, cuando queremos acceder a capacidades específicas de los dispositivos nativos,  debemos instalar los plugins de Capacitor o Cordova a través de NPM, importarlos en Ionic a través del framework que estemos utilizando y luego interactuar con la API que nos provean en los componentes que nos interesan.
- En todo momento podemos ir viendo en el navegador los cambios que vamos haciendo, como si fuera un web normal (de hecho es una web normal) utilizando el hot reload que traen casi todos los frameworks, como ng serve o npm run serve. Obviamente hay características nativas que no podemos testear desde el navegador de una PC.
- Para revertir esto último, contamos con Ionic DevApp, una app que instalamos en el móvil (disponible para Play Store y AppStore). Luego desde la terminal del proyecto hacemos un "ionic serve --devapp" y, estando conectados en la PC y en el móvil a la misma red, nos sirve la app en el celular, ahí sí con acceso full a todas las capacidades nativas. Como funciona por WiFi, ni siquiera es necesario estar conectados por cable. 


Una vez que estamos contentos con el resultado y queremos finalmente buildear una versión instalable de la App, debemos hacer lo siguiente:

# Build:

## Para iOS:
- Si no estábamos en una Mac, debemos importar el trabajo en la Mac  continuar el proceso de buildeo ahí.
- Lo siguiente que tenemos que hacer es buildear el proyecto con el framework que estemos usando. Esto es fundamental porque no se puede seguir solo con las versiones del "serve". Para ello hacemos, por ejemplo en Angular, "ng build --prod", en Vue "npm run build" o directamente desde el CLI de Ionic. El output debe estar en una carpeta que se llame "www", de lo contrario hay que modificar la configuración de Capacitor desde el "capacitor.config.json" para que busque la carpeta "dist" o la que corresponda.
- Una vez hecho esto, y habiendo habilitado capacitor, tenemos que agregar la plataforma con "npx cap add ios". Npx es una facilidad de NPM para trabajar con comandos instalados localmente. "Cap" hace referencia a capacitor. 
- Esto nos creará en el proyecto una nueva carpeta llamada "ios". 
- A partir de acá, debemos tener en cuenta dos conceptos parecidos pero distintos: "npx cap copy" sincroniza todos los cambios que hayamos hecho en nuestro framework web con la plataforma nativa que tengamos instalada. "npx cap update" en cambio, sincroniza los cambios que tienen que ver con los plugins de Cordova o Capacitor que agreguemos y que interactúen nativamente con una u otra plataforma. Finalmente "npx cap sync" hace las dos cosas al mismo tiempo. En resumen: si cambiamos solo código web y hacemos un rebuild, basta con un "npx cap copy". Si en cambio agregamos o quitamos plugins, debemos correr un "npx cap update". Ante la duda, o al hacerlo por primera vez, podemos usar un "npx cap sync".
- El paso anterior nos deja todo listo para sincronizar los archivos con el IDE nativo de iOS. Por lo tanto debemos correr un "npx cap open ios" que nos abrirá una instancia de xCode con nuestro proyecto en primer plano. 
- Una vez en xCode las cosas ya no dependen de Ionic y los problemas que nos encontremos son generales al desarrollo de cualquier app. Particularmente en los prototipos que hicimos hasta el momento encontramos dos  cosas sobresalientes a tener en cuenta:
- Chequear que la versión de iOS para la que puede buildear Ionic nos sirva en los dispositivos que queremos testear
- Configurar la cuenta de desarrollador en xCode para tener los certificados y permisos necesarios para firmar y buildear la app
- En caso de que nos pida repetitivamente permisos de macOs al momento de buildear, debemos abrir el Keychain Access desde el Launchpad de la mac, buscar el certificado que nos está pidiendo, darle doble click y en la pestaña de permitir o denegar accesos darle permitir a todos. Alternativamente podemos simplemente ingresar la contraseña del usuario de Mac con el que hemos iniciado sesión varias veces hasta que eventualmente te lo deja de pedir
- Solucionado eso, hay tres formas de buildear en iOS:
- Podemos enchufar un dispositivo mediante el cable USB a la mac y en el menú superior izquierdo de dispositivos seleccionarlo. Luego le damos al botón de Play y eso debería buildear la app, transferirla al dispositivo, instalarla y correrla. Ventajas: es rápido y automáticos y en xCode nos abre una consola para debuggear lo que va pasando en la app, siempre que nos mantengamos enchufados. Desventajas: no se puede instalar en otros dispositivos al menos que lo hagamos uno por uno. Necesitas enchufar el dispositivo.
- Podemos en lugar de seleccionar un dispositivo físico, seleccionar algún emulador con los que cuenta xCode. Ventajas: no necesitás tener un iPhone o iPad real, podes probar cualquier versión del dispositivo. Desventajas: como cualquier emulador, no son 100% fieles respecto a los dispositivos físicos que imitan. Corren lento y son pesados, demoran en arrancar.
- Finalmente está la opción de exportar un IPA, que es el formato de aplicaciones para iOS. Para ello debemos ir al menú Product > Archive. Esto nos hace un build y nos redirige a una segunda pantalla por fuera de la ventana principal del proyecto. En esta nueva ventana le damos "Distribute App" (botón grande azul a la derecha) y en los menúes subsiguientes es importante seleccionar la opción "Ad Hoc" y "Manejar firmas automáticamente". En la parte que pide URL de la IPA y los íconos, no es necesario poner URL reales, basta cualquiera que empiece con "HTTPS".  Cuando hayamos pasado todas las pantallas, nos llevará a la instancia final en la que compila el bytecode y finalmente se nos habilita la opción de exportar. Ahí seleccionamos la carpeta en donde queremos exportar y el nombre. Esto nos genera una carpeta con varios archivos de los cuales la app es la que dice App.ipa. 
- A partir de acá podemos subirlo a servicios como Diawi o similares y la app se puede instalar desde distintos dispositivos accediendo a la URL que nos provee Diawi por Safari.  Esa importante notar que este tercer método se torna más problemático si empezamos a requerir permisos del sistema operativo y como alternativa debemos usar testFlight (actualmente estamos investigando esto último).

## Para Android:
- Lo primero que tenemos que hacer es buildear el proyecto con el framework que estemos usando. Esto es fundamental porque no se puede seguir solo con las versiones del "serve". Para ello hacemos, por ejemplo en Angular, "ng build --prod", en Vue "npm run build" o directamente desde el CLI de Ionic. El output debe estar en una carpeta que se llame "www", de lo contrario hay que modificar la configuración de Capacitor desde el "capacitor.config.json" para que busque la carpeta "dist" o la que corresponda.
- Una vez hecho esto, y habiendo habilitado capacitor, tenemos que agregar la plataforma con "npx cap add android". Npx es una facilidad de NPM para trabajar con comandos instalados localmente. "Cap" hace referencia a capacitor. 
- Esto nos creará en el proyecto una nueva carpeta llamada "android". 
- A partir de acá, debemos tener en cuenta dos conceptos parecidos pero distintos: "npx cap copy" sincroniza todos los cambios que hayamos hecho en nuestro framework web con la plataforma nativa que tengamos instalada. "npx cap update" en cambio, sincroniza los cambios que tienen que ver con los plugins de Cordova o Capacitor que agreguemos y que interactúen nativamente con una u otra plataforma. Finalmente "npx cap sync" hace las dos cosas al mismo tiempo. En resumen: si cambiamos solo código web y hacemos un rebuild, basta con un "npx cap copy". Si en cambio agregamos o quitamos plugins, debemos correr un "npx cap update". Ante la duda, o al hacerlo por primera vez, podemos usar un "npx cap sync".
- El paso anterior nos deja todo listo para sincronizar los archivos con el IDE nativo, Android Studio. Por lo tanto debemos correr un "npx cap open Android" que nos abrirá una instancia de Android Studio con nuestro proyecto en primer plano.
- A partir de acá las opciones de buildeo son independientes de Ionic y son como cualquier otra app. La forma más fácil de buildear es ir a a Build > Build Bundles/Apk > Build APK. Eso nos genera un APK  que podemos instalar en cualquier dispositivo habilitando la opción de "permitir aplicaciones de origenes externos" (la opción se encuentra en las configuraciones de seguridad del dispositivo y básicamente permite instalar apps por fuera de la Play Store.
- A diferencia de iOS, Android es mucho más versátil para distribuir versiones no finales de la app, por lo que el APK generado en el paso anterior debería funcionar en cualquier dispositivo que soporte el SDK que pusimos como Target.
- Alternativamente, también podemos correrlo en un emulador dentro de Android Studio o instalarlo automáticamente en el teléfono conectándolo a la computadora por cable USB.
- Siempre debemos tener en cuanta cuando hacemos cambios, debemos hacer un build del proyecto, sincronizar los cambios con el IDE correspondiente con un "npx cap sync", "npx cap copy" o "npx cap update" según corresponda y finalmente abrir el IDE nativo y buildear.
