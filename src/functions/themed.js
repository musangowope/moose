import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"

// export default comp => <ThemeProvider theme={theme}>{comp}</ThemeProvider>;
export default Component => props => (
  <ThemeProvider theme={theme}>
    <Component {...props} />
  </ThemeProvider>
)
