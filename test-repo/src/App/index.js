// Module Imports
import SampleModal from '../SampleModal'

// Styles Import
import { AppTitle, SampleModalWrapper } from './style'

const APP_TITLE_TEXT = 'Simple modal component we can open multiple modals like (Stacked Modal) and are closed as LIFO (Last in first out) order'

const App = () => {
  return (
    <div className="App">
      <AppTitle>{APP_TITLE_TEXT}</AppTitle>
      <SampleModalWrapper>
        <SampleModal />
      </SampleModalWrapper>
    </div>
  );
}

export default App;
