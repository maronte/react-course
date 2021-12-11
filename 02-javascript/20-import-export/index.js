import { heroes } from './heroes.js';

console.log(heroes);

// Si un archivo JS hace uso de ESModules al importar el sript en el archivo HTML se debe
// especificar que es de tipo module. <script type="module"...

// Los bare import (sin extension .js) solo funcionan en node o con babel como compilador.

// https://lenguajejs.com/javascript/caracteristicas/modulos-es6/