import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// import colors from 'vuetify/lib/util/colors';

const myCustomTheme = {
    dark: false,
    colors: {
      background: '#FFFFFF',
      surface: '#FFFFFF',
      'surface-bright': '#FFFFFF',
      'surface-light': '#EEEEEE',
      'surface-variant': '#424242',
      'on-surface-variant': '#EEEEEE',
      primary: '#2c3e50',
      'primary-darken-1': '#1F5592',
      secondary: '#48A9A6',
      'secondary-darken-1': '#018786',
      error: '#B00020',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
    }
}


export default createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'myCustomTheme',
        themes: {
          myCustomTheme,
        },
      },
});

//   nuxtApp.vuetify = vuetify;
//   nuxtApp.provide('vuetify', vuetify);
// });

// import Vue from 'vue';
// import '@mdi/font/css/materialdesignicons.css';
// import Vuetify from 'vuetify/lib/framework';
// import colors from 'vuetify/lib/util/colors';
// // import { createApp } from 'vue'
// import { createVuetify } from 'vuetify'




// export default createVuetify({
//     theme: {
//       options: {
//             customProperties: true
//         },
//         themes: {
//             light: {
//                 primary: '#2c3e50',        
//                 secondary: colors.grey.darken1,
//                 accent: colors.purple,
//                 error: colors.red.accent3,
//                 warning: colors.orange.accent4,
//                 info: colors.cyan
//             }
//         }
//     }
//   })

// export default new Vuetify({
//     theme: {
//         options: {
//             customProperties: true
//         },
//         themes: {
//             light: {
//                 primary: colors.green,        
//                 secondary: colors.grey.darken1,
//                 accent: colors.purple,
//                 error: colors.red.accent3,
//                 warning: colors.orange.accent4,
//                 info: colors.cyan
//             }
//         }
//     }
// });