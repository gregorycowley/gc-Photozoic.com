import Header from "./Header";
import Meta from './Meta'

/**
 * General Layout
 * @param {*} props 
 */


export default function Layout(props) {
  
  const siteTitle = props.siteTitle || '';
  const siteDescription = props.siteDescription || '';
  const classes = props.pathname == "info" && "info_page";
  const backgroundColor = props.bgColor && props.bgColor;
  const color = props.pathname == "info" && 'white';

  return (
    <>
    <Meta
      siteTitle={siteTitle}
      siteDescription={siteDescription}
    />
    <Header className={`${classes} test`} siteTitle={siteTitle} />
    <main className="container">{props.children}</main>
    </>
  );
}
