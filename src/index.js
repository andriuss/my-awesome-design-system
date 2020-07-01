import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  SignUpModal,
} from './components';
import {GlobalStyle, darkTheme, defaultTheme} from './utils';



const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <main>
        <button
          style={{
            margin: "0 16px 24px",
            padding: "8px",
            backgroundColor: "none"
          }}
          onClick={() => setUseDarkTheme(true)}
        >Dark theme</button>
        <button
          style={{
            margin: "0 16px 24px",
            padding: "8px",
            backgroundColor: "none"
          }}
          onClick={() => setUseDarkTheme(false)}
        >Default theme</button>
        <button
          style={{
            margin: "0 16px 24px",
            padding: "8px",
            backgroundColor: "none"
          }}
          onClick={() => setShowModal(!showModal)}
        >Toggle modal</button>
        <div style={{
          backgroundColor: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-around",
        }}>



          {/* <PrimaryButton>Primary</PrimaryButton>
          &nbsp;
          <SecondaryButton>Secondary</SecondaryButton>
          &nbsp;
          <TertiaryButton>Tertiary</TertiaryButton>
          <br />
          <br /> */}



          {/* <PrimaryButton modifiers={["small", "warning", "primaryButtonWarning"]}>Primary</PrimaryButton>
          &nbsp;
          <SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]}>Secondary</SecondaryButton>
          &nbsp;
          <TertiaryButton modifiers={["warning"]}>Tertiary</TertiaryButton>
          <br />
          <br />
          <PrimaryButton modifiers={["small", "error", "primaryButtonError"]}>Primary</PrimaryButton>
          &nbsp;
          <SecondaryButton modifiers={["large", "error", "secondaryButtonError"]}>Secondary</SecondaryButton>
          &nbsp;
          <TertiaryButton modifiers={["error"]}>Tertiary</TertiaryButton>
          <br />
          <br />
          <PrimaryButton modifiers={["small", "success", "primaryButtonSuccess"]}>Primary</PrimaryButton>
          &nbsp;
          <SecondaryButton modifiers={["large", "success", "secondaryButtonSuccess"]}>Secondary</SecondaryButton>
          &nbsp;
          <TertiaryButton modifiers={["success"]}>Tertiary</TertiaryButton>
          <br />
          <br /> */}


          {/* <PrimaryButton disabled>Primary</PrimaryButton>
          &nbsp;
          <SecondaryButton disabled>Secondary</SecondaryButton>
          &nbsp;
          <TertiaryButton disabled>Tertiary</TertiaryButton>
          &nbsp; */}
          <SignUpModal showModal={showModal} setShowModal={setShowModal} />
          <GlobalStyle />
        </div>
      </main>
    </ThemeProvider>
  )
}

ReactDOM.render(<App/>, document.querySelector("#root"))