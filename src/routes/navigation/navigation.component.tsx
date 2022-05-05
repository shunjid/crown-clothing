import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

const Navigation = () => (
  <>
    <div className="navigation">
      <Link className="logo-container" to="/">
        <CrownLogo className="logo" />
      </Link>
      <div className="links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
      </div>
    </div>
    <Outlet />
  </>
)

export default Navigation
