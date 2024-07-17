"use strict";(self.webpackChunkapi_laravel_doc=self.webpackChunkapi_laravel_doc||[]).push([[512],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>g});var a=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=a.createContext({}),s=function(e){var r=a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=s(e.components);return a.createElement(c.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=t,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(g,i(i({ref:r},d),{},{components:n})):a.createElement(g,i({ref:r},d))}));function g(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[u]="string"==typeof e?e:t,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7464:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),t=(n(7294),n(3905));const o={sidebar_position:3},i="Cap\xedtulo 10: Manejo de Errores y Depuraci\xf3n en JavaScript",l={unversionedId:"intermedio/errores",id:"intermedio/errores",title:"Cap\xedtulo 10: Manejo de Errores y Depuraci\xf3n en JavaScript",description:"Introducci\xf3n",source:"@site/docs/intermedio/errores.md",sourceDirName:"intermedio",slug:"/intermedio/errores",permalink:"/js_curso/docs/intermedio/errores",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intermedio/errores.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Manipulaci\xf3n del DOM en JavaScript",permalink:"/js_curso/docs/intermedio/dom"},next:{title:"Cap\xedtulo 11: Asincron\xeda en JavaScript",permalink:"/js_curso/docs/intermedio/asincronia"}},c={},s=[{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"Try...catch",id:"trycatch",level:2},{value:"Introducci\xf3n a Try...catch",id:"introducci\xf3n-a-trycatch",level:3},{value:"Sintaxis B\xe1sica",id:"sintaxis-b\xe1sica",level:3},{value:"Ejemplo Pr\xe1ctico",id:"ejemplo-pr\xe1ctico",level:3},{value:"Uso de Herramientas de Depuraci\xf3n en el Navegador",id:"uso-de-herramientas-de-depuraci\xf3n-en-el-navegador",level:2},{value:"Herramientas de Desarrollo",id:"herramientas-de-desarrollo",level:3},{value:"C\xf3mo Acceder a las Herramientas de Desarrollo",id:"c\xf3mo-acceder-a-las-herramientas-de-desarrollo",level:3},{value:"Uso de Puntos de Interrupci\xf3n",id:"uso-de-puntos-de-interrupci\xf3n",level:3},{value:"Mensajes de Consola y Logging",id:"mensajes-de-consola-y-logging",level:2},{value:"Uso de <code>console.log</code>",id:"uso-de-consolelog",level:3},{value:"Otros M\xe9todos de Consola",id:"otros-m\xe9todos-de-consola",level:3},{value:"Ejemplo Pr\xe1ctico de Logging",id:"ejemplo-pr\xe1ctico-de-logging",level:3},{value:"Conclusi\xf3n",id:"conclusi\xf3n",level:2}],d={toc:s},u="wrapper";function p(e){let{components:r,...n}=e;return(0,t.kt)(u,(0,a.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"cap\xedtulo-10-manejo-de-errores-y-depuraci\xf3n-en-javascript"},"Cap\xedtulo 10: Manejo de Errores y Depuraci\xf3n en JavaScript"),(0,t.kt)("h2",{id:"introducci\xf3n"},"Introducci\xf3n"),(0,t.kt)("p",null,"El manejo de errores y la depuraci\xf3n son habilidades esenciales para cualquier desarrollador. En este cap\xedtulo, aprender\xe1s c\xf3mo manejar errores usando ",(0,t.kt)("inlineCode",{parentName:"p"},"try...catch"),", c\xf3mo usar herramientas de depuraci\xf3n en el navegador y c\xf3mo utilizar mensajes de consola y logging para rastrear y solucionar problemas en tu c\xf3digo."),(0,t.kt)("h2",{id:"trycatch"},"Try...catch"),(0,t.kt)("h3",{id:"introducci\xf3n-a-trycatch"},"Introducci\xf3n a Try...catch"),(0,t.kt)("p",null,"El bloque ",(0,t.kt)("inlineCode",{parentName:"p"},"try...catch")," te permite manejar errores en tu c\xf3digo sin detener la ejecuci\xf3n del programa. Es \xfatil para situaciones donde un error puede ocurrir y quieres asegurarte de que tu programa puede manejarlo de manera adecuada."),(0,t.kt)("h3",{id:"sintaxis-b\xe1sica"},"Sintaxis B\xe1sica"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"JavaScript:")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"try {\n    // C\xf3digo que puede lanzar un error\n    let resultado = 10 / 0;\n    console.log(resultado);\n} catch (error) {\n    // C\xf3digo que maneja el error\n    console.error('Ocurri\xf3 un error:', error);\n} finally {\n    // C\xf3digo que se ejecuta siempre, ocurra o no un error\n    console.log('Ejecuci\xf3n finalizada.');\n}\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Explicaci\xf3n:")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"try { ... }"),": Contiene el c\xf3digo que puede lanzar un error."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"catch (error) { ... }"),": Se ejecuta si ocurre un error en el bloque ",(0,t.kt)("inlineCode",{parentName:"li"},"try"),". El par\xe1metro ",(0,t.kt)("inlineCode",{parentName:"li"},"error")," contiene informaci\xf3n sobre el error."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"finally { ... }"),": Opcional. Se ejecuta siempre, sin importar si ocurri\xf3 un error o no.")),(0,t.kt)("h3",{id:"ejemplo-pr\xe1ctico"},"Ejemplo Pr\xe1ctico"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"HTML:")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},'<input type="text" id="miInput" placeholder="Escribe un n\xfamero">\n<button id="miBoton">Dividir por 2</button>\n<p id="resultado"></p>\n')),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"JavaScript:")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"const input = document.getElementById('miInput');\nconst boton = document.getElementById('miBoton');\nconst resultado = document.getElementById('resultado');\n\nboton.addEventListener('click', function() {\n    try {\n        let valor = parseInt(input.value);\n        if (isNaN(valor)) {\n            throw new Error('Por favor, introduce un n\xfamero v\xe1lido');\n        }\n        resultado.innerText = `El resultado es: ${valor / 2}`;\n    } catch (error) {\n        resultado.innerText = error.message;\n    }\n});\n")),(0,t.kt)("h2",{id:"uso-de-herramientas-de-depuraci\xf3n-en-el-navegador"},"Uso de Herramientas de Depuraci\xf3n en el Navegador"),(0,t.kt)("h3",{id:"herramientas-de-desarrollo"},"Herramientas de Desarrollo"),(0,t.kt)("p",null,"Los navegadores modernos vienen con herramientas de desarrollo que te permiten inspeccionar el DOM, ver mensajes de consola, establecer puntos de interrupci\xf3n y mucho m\xe1s. La m\xe1s com\xfanmente utilizada es la de Google Chrome."),(0,t.kt)("h3",{id:"c\xf3mo-acceder-a-las-herramientas-de-desarrollo"},"C\xf3mo Acceder a las Herramientas de Desarrollo"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("strong",{parentName:"li"},"Google Chrome:")," Presiona ",(0,t.kt)("inlineCode",{parentName:"li"},"Ctrl + Shift + I")," (o ",(0,t.kt)("inlineCode",{parentName:"li"},"Cmd + Option + I"),' en Mac) o haz clic derecho en la p\xe1gina y selecciona "Inspeccionar".'),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("strong",{parentName:"li"},"Mozilla Firefox:")," Presiona ",(0,t.kt)("inlineCode",{parentName:"li"},"Ctrl + Shift + I")," (o ",(0,t.kt)("inlineCode",{parentName:"li"},"Cmd + Option + I"),' en Mac) o haz clic derecho en la p\xe1gina y selecciona "Inspeccionar".')),(0,t.kt)("h3",{id:"uso-de-puntos-de-interrupci\xf3n"},"Uso de Puntos de Interrupci\xf3n"),(0,t.kt)("p",null,"Los puntos de interrupci\xf3n te permiten pausar la ejecuci\xf3n del c\xf3digo en una l\xednea espec\xedfica para inspeccionar el estado de la aplicaci\xf3n."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"JavaScript:")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"function dividir(a, b) {\n    debugger; // Pausa la ejecuci\xf3n aqu\xed\n    return a / b;\n}\n\ndividir(10, 2);\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Pasos para Usar Puntos de Interrupci\xf3n:")),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Abre las herramientas de desarrollo."),(0,t.kt)("li",{parentName:"ol"},'Ve a la pesta\xf1a "Sources" o "Debugger".'),(0,t.kt)("li",{parentName:"ol"},"Encuentra tu archivo JavaScript y haz clic en el n\xfamero de l\xednea donde quieres establecer un punto de interrupci\xf3n."),(0,t.kt)("li",{parentName:"ol"},"La ejecuci\xf3n se pausar\xe1 en esa l\xednea cuando se ejecute el c\xf3digo, permiti\xe9ndote inspeccionar variables y el flujo del programa.")),(0,t.kt)("h2",{id:"mensajes-de-consola-y-logging"},"Mensajes de Consola y Logging"),(0,t.kt)("h3",{id:"uso-de-consolelog"},"Uso de ",(0,t.kt)("inlineCode",{parentName:"h3"},"console.log")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"console.log")," es una herramienta b\xe1sica pero poderosa para imprimir mensajes y valores en la consola del navegador, ayud\xe1ndote a entender lo que est\xe1 sucediendo en tu c\xf3digo."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"JavaScript:")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"const nombre = 'Juan';\nconsole.log('El nombre es:', nombre);\n")),(0,t.kt)("h3",{id:"otros-m\xe9todos-de-consola"},"Otros M\xe9todos de Consola"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"console.error()"),": Para imprimir mensajes de error."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"console.warn()"),": Para imprimir advertencias."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"console.table()"),": Para imprimir tablas.")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Ejemplo:")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"const usuario = { nombre: 'Juan', edad: 30 };\nconsole.error('Esto es un mensaje de error');\nconsole.warn('Esto es una advertencia');\nconsole.table(usuario);\n")),(0,t.kt)("h3",{id:"ejemplo-pr\xe1ctico-de-logging"},"Ejemplo Pr\xe1ctico de Logging"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"HTML:")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},'<input type="text" id="miInput" placeholder="Escribe algo">\n<button id="miBoton">Enviar</button>\n')),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"JavaScript:")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"const input = document.getElementById('miInput');\nconst boton = document.getElementById('miBoton');\n\nboton.addEventListener('click', function() {\n    console.log('Bot\xf3n clicado');\n    console.log('Valor del input:', input.value);\n    if (input.value === '') {\n        console.warn('El input est\xe1 vac\xedo');\n    }\n});\n")),(0,t.kt)("h2",{id:"conclusi\xf3n"},"Conclusi\xf3n"),(0,t.kt)("p",null,"El manejo de errores y la depuraci\xf3n son cruciales para el desarrollo de aplicaciones robustas y libres de errores. Usar ",(0,t.kt)("inlineCode",{parentName:"p"},"try...catch")," te permite manejar errores sin interrumpir la ejecuci\xf3n del programa, las herramientas de depuraci\xf3n del navegador te ofrecen un control detallado sobre tu c\xf3digo, y los mensajes de consola te ayudan a rastrear y entender el flujo de tu aplicaci\xf3n. Con estas habilidades, estar\xe1s mejor equipado para escribir c\xf3digo de alta calidad y solucionar problemas de manera eficiente."))}p.isMDXComponent=!0}}]);