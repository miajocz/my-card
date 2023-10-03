import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--my-card-background-color);
    }

    main {
      .button {
  margin: 30px auto;
}
.button button {
  font-size: 15px;
  color: red;
  background-color: white;
}
.button button:hover{
  color: white;
  background-color: blue;
}
.wrapper {
  width: 400px;
  border-style: solid;
  padding: 20px;
  background-color: white;
}
.header{
  text-align: center;
}
.image{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (max-width: 800px) and (min-width: 500px){
  .button{
    display: block;
  }}
@media screen and (max-width: 500px){
  .wrapper{
    transform: scale(0.10);
  }}
.dup-button button:focus{
  color: white;
  background-color: white;
}
.dup-button button:hover{
  color: white;
  background-color: blue;
}
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main>
        
      <div class="wrapper">
  <img class="image" src="https://logos-world.net/wp-content/uploads/2020/05/Washington-Nationals-Emblem.png" 
alt="Nationals Logo" width="400" height="200">
  <div class="header">
  <h2>Washington Nationals</h2>
  </div>
  <h3>Description</h3>
  <div class="description">
    <p>The Washington Nationals are an American professional baseball team based in Washington, D.C. They compete in Major League Baseball as a member of the National League East division.</p>
  </div>
  <div class="button">
    <button type="button" data-prototype-url="hax.psu.edu">Details™</button>
  </div>
</div>`

  }
}

customElements.define('my-card', MyCard);