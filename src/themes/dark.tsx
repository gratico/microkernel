import { ITheme } from '../theme'

export const darkTheme: ITheme = {
  meta: {
    name: 'Light Theme',
    description: 'Default light theme',
    url: 'https://www.grati.co/@gratico/kernel',
    author: 'Abhishiv Saxena<abhishiv@gmail.com>'
  },
  dependencies: {
    GTWalsheimPro: {
      type: 'font',
      url: 'https://cdn.jsdelivr.net/npm/@oss-stealth/hub@0.0.2/fonts/GTWalsheimPro/GTWalsheimPro.css'
    },
    AllFonts: {
      type: 'font',
      url:
        'https://fonts.googleapis.com/css?family=Cabin:400,500,700|Fira+Sans:400,500,700|Indie+Flower|Montserrat:400,500,700|Nunito+Sans:400,600,700|Open+Sans:400,700|Slabo+27px|Source+Sans+Pro:400,600,700|Titillium+Web:400,600,700|Yanone+Kaffeesatz:400,500,700&display='
    }
  },
  tokens: {
    backgroundColor: 'rgb(10,14,20)',
    foregroundColor: 'white',
    modalBackgroundColor: 'rgb(10,14,20)',
    modalForegroundColor: 'white',
    fontFamily: 'Open Sans',
    headlineFontFamily: 'Slabo 27px',
    borderColor: '#555',
    borderStyle: '2px',
    borderWidth: '1px'
  }
}
