import { extendTheme, useColorModeValue } from "@chakra-ui/react"
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
  components: {
    Menu: {
      baseStyle: () => ({
        list: {
          bg: useColorModeValue(
            "rgba(237, 242, 247, 0.9)",
            "rgba(23, 25, 35, 0.9)"
          )
        }
      })
    }
  }
})

export default theme
