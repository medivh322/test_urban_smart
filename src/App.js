import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Switch, useHistory} from "react-router-dom";

function MainForm({login, password}) {
  const [loginForm, setLoginForm] = useState();
  const [passwordForm, setPasswordForm] = useState();
  const [disabledInput, setDisabledInput] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (loginForm === login && passwordForm === password) {
      setDisabledInput(false);
    } else {
      setDisabledInput(true);
    }
  }, [loginForm, passwordForm, login, password]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/profile');
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="login">Логин</label>
      <input type="text" id="login" onChange={(e) => setLoginForm(e.target.value)} />
      <label htmlFor="password">Пароль</label>
      <input type="password" id="password" onChange={(e) => setPasswordForm(e.target.value)} />
      <input className="form__submit" type="submit" value="войти" disabled={disabledInput ? true : false} />
    </form>
  )
}

function App() {
  const { login, password } = useSelector(state => state);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainForm login={login} password={password}/>
        </Route>
        <Route path="/profile">
          <h1>{login}</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
