import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode('#fbf8f5', "#181817")(props)
      },
    }),
  },
  components: {
    Menu: {
      baseStyle: {
        list: {
          bg: "rgba(226, 223, 221, 0.9)",
          _dark: {
            bg: "rgba(47, 47, 47, 0.8)"
          }
        }
      }
    }
  }
})

export default theme
