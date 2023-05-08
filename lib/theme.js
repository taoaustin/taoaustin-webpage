import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode('#F5EEE5', "#181817")(props)
      },
    }),
  },
})

export default theme
