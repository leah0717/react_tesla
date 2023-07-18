export const theme = {
  color: {
    primaryColor: '#fff',
    secondaryColor: '#00848a'
  },
  text: {
    primaryColor: '#fff',
    secondaryColor: '#fff'
  },
  mixin: {
    boxShadow: `
            transition: box-shadow .2s ease;
            &:hover {
                box-shadow: 0 2px 4px rgba(0,0,0,.2);
            }
        `
  }
}
