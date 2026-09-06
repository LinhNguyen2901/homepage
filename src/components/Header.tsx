import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="topbar">
      <div className="brand">Linh Nguyen</div>
      <nav className="nav">
        <Link to="/about">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/interests">Interest</Link>
        <Link to="/chart">Chart</Link>
        <Link to="/connect">Connect</Link>
      </nav>
    </header>
  );
}

export default Header;