import logo from '/logo-name.svg';

export default function Header() {
  const now = new Date();

  return (
    <header>
      <img src={logo} alt={'Result'} />

      {/* <h3>Result University</h3> */}

      <span>Time now: {now.toLocaleTimeString()}</span>
    </header>
  );
}
