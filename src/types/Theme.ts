export type Theme = 'black' | 'white'

export const getDataBackground = (theme: Theme) => {
  switch (theme) {
    case 'black':
      return '#222222'
    case 'white':
      return '#e9e7e6'
  }
}

export const getOpositeTheme = (theme: Theme): Theme => {
  switch (theme) {
    case 'black':
      return 'white'
    case 'white':
      return 'black'
  }
}
