// Module Imports
import SampleModal from '../SampleModal'
import { ThemeProvider } from 'styled-components'
import { theme } from '../common/theme'

// Styles Import
import { AppTitle, SampleModalWrapper } from './style'

// Constant Imports
import { APP_TITLE_TEXT } from './constant'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <AppTitle>{APP_TITLE_TEXT}</AppTitle>
        <SampleModalWrapper>
          <SampleModal />
        </SampleModalWrapper>
    </ThemeProvider>
  );
}

export default App;
