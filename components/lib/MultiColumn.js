import Card from "./Card";

/**
 * MultiColumn Layout
 * @param {*} props 
 */

export default function MultiColumn(props) {
  const bgImage = props.bgImage;
  
  return (
    <div className="multi-column containerb">
      <Card bgImage />
      {/* <!-- there are a few shorthand columns widths as well --> */}
      <div className="row">
        <div className="twelve columns">
          <h2>Arcu quisque metus litora platea erat lacinia</h2>
          <p className="large-paragraph">
            Venenatis phasellus quisque lobortis fames dictumst tempus in montes
            penatibus, nam habitant etiam augue vulputate tellus ad luctus, sed
            aliquam elementum est placerat mollis tortor nisi. Ullamcorper
            euismod dis urna iaculis ad proin viverra, rutrum dictumst integer
            vehicula facilisis penatibus, nostra habitant sapien posuere
            volutpat metus. Ante eget sollicitudin parturient tempor curae
            gravida libero vivamus, conubia lobortis molestie neque fringilla
            rhoncus urna consectetur montes.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="two-thirds column">
          <h2>Arcu quisque metus litora platea erat lacinia</h2>
          <p className="">
            Venenatis phasellus quisque lobortis fames dictumst tempus in montes
            penatibus, nam habitant etiam augue vulputate tellus ad luctus, sed
            aliquam elementum est placerat mollis tortor nisi. Ullamcorper
            euismod dis urna iaculis ad proin viverra, rutrum dictumst integer
            vehicula facilisis penatibus, nostra habitant sapien posuere
            volutpat metus. Ante eget sollicitudin parturient tempor curae
            gravida libero vivamus, conubia lobortis molestie neque fringilla
            rhoncus urna consectetur montes, posuere volutpat natoque leo
            iaculis dapibus ornare. Placerat dictum fringilla nascetur id tellus
            mus erat rhoncus torquent dictumst molestie, feugiat venenatis
            convallis gravida eget non primis aenean quis arcu. Tortor nostra
            mattis mollis viverra malesuada ipsum praesent nisl, varius purus
            ultrices placerat litora blandit dictum suscipit, commodo hac
            elementum class aliquam sodales vivamus. Aliquet eleifend euismod
            molestie curae amet duis posuere malesuada, ultrices sociosqu
            habitant donec pellentesque lectus volutpat, faucibus dolor tempor
            pulvinar vestibulum convallis suscipit.
          </p>
          <p className="">
            Venenatis phasellus quisque lobortis fames dictumst tempus in montes
            penatibus, nam habitant etiam augue vulputate tellus ad luctus, sed
            aliquam elementum est placerat mollis tortor nisi. Ullamcorper
            euismod dis urna iaculis ad proin viverra, rutrum dictumst integer
            vehicula facilisis penatibus, nostra habitant sapien posuere
            volutpat metus. Ante eget sollicitudin parturient tempor curae
            gravida libero vivamus, conubia lobortis molestie neque fringilla
            rhoncus urna consectetur montes, posuere volutpat natoque leo
            iaculis dapibus ornare. Placerat dictum fringilla nascetur id tellus
            mus erat rhoncus torquent dictumst molestie, feugiat venenatis
            convallis gravida eget non primis aenean quis arcu. Tortor nostra
            mattis mollis viverra malesuada ipsum praesent nisl, varius purus
            ultrices placerat litora blandit dictum suscipit, commodo hac
            elementum class aliquam sodales vivamus. Aliquet eleifend euismod
            molestie curae amet duis posuere malesuada, ultrices sociosqu
            habitant donec pellentesque lectus volutpat, faucibus dolor tempor
            pulvinar vestibulum convallis suscipit.
          </p>
        </div>
        <div className="one-third column">
          <img srcSet={bgImage.srcSet} src={bgImage.src} alt="" />
          <img srcSet={bgImage.srcSet} src={bgImage.src} alt="" />
          <img srcSet={bgImage.srcSet} src={bgImage.src} alt="" />
          <img srcSet={bgImage.srcSet} src={bgImage.src} alt="" />
        </div>
      </div>

      <div className="row">
        <div className="one-third column">
            Fun descriptive content
        </div>
        <div className="two-thirds column">
            <Card bgImage />
            <Card bgImage />
            <Card bgImage />
        </div>
      </div>
    </div>
  );
}
