import XmasMenuStyles from '../styles/XmasMenu.styles';

export default function XmasMenu() {
  return (
    <XmasMenuStyles>
      <h1>Xmas Menu</h1>
      <main>
        <h2>"GIMME SOMETHING FESTIVE"</h2>
        <div className="item">
          <h3>
            Hot chocolate - it’s Christmas, go for the works - cream &
            marshmallows!
          </h3>
          <h5>Add one of our tasty syrups for a festive twist:</h5>
          <p>- Caramel Vanilla</p>
          <p>- Gingerbread</p>
          <p>- Hazelnut</p>
          <p>- Amaretto</p>
          <h5>OR a splash of Baileys for something a bit stronger!</h5>
          <h5>
            One for the road - Mulled wine & bucks-fizz (we wont tell Santa!)
          </h5>
        </div>
        <h2>"I’LL HAVE THE USUAL"</h2>
        <div className="item">
          <h3>
            Tea - fancy a brew? However you like it, that’s what we’ll do!
          </h3>
          <h5>Coffee - lattes, cappuccinos & mocha galore!</h5>
          <h5>Our usual cold drinks and alternative teas available too.</h5>
          <h5>*Decaf & non dairy available</h5>
        </div>
      </main>

      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
      </div>
    </XmasMenuStyles>
  );
}
