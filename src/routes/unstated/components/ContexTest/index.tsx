import React, { Component, createContext } from 'react';

interface Theme {
  foreground: string;
  background: string;
}

interface Themes {
  [name: string]: Theme;
}

const themes: Themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
};

const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
});

function ThemeTogglerButton() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button
          onClick={toggleTheme}
          style={{ backgroundColor: theme.background }}
        >
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

interface Props {}

interface State {
  theme: Theme;
  toggleTheme(): void;
}

class ContexTest extends Component<Props, State> {
  state: State = {
    theme: themes.light,
    toggleTheme: this.toggleTheme
  };

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }));
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

export default ContexTest;
