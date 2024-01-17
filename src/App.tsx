import { Widget } from './components/widget/Widget';
import { AppContainer, WidgetOverlay } from './App.styles';

function App() {
  return (
    <AppContainer>
      <WidgetOverlay>
        <Widget />
      </WidgetOverlay>
    </AppContainer>
  );
}

export default App;
