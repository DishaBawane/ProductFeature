import classes from './Header.module.css'

const Header = (props) => {
  return(
      <header>
            <div className={classes.header}>
             <h2 className="h2">Feature On Top</h2>
            </div>
      </header>);
};
export default Header;
