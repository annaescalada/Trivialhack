'use strict';

class Navbar {
  constructor(parentElement, links, style) {
    this.parentElement = parentElement;
    this.links = links;
    this.style = style;
    this.elements = null;
  }

  generate() {
    this.elements = `<nav>
                        <img class="logo" src="styles/images/Logo.png" alt="Logo" url="/">
                        <p class="logo-text" url="/">Trivial Hack</p>
                        <ul>`;
    this.links.forEach((link)=>{
      this.elements += `
        <li>
          <a href="#0" url=${link.url}>${link.name}</a>
        </li>
      `;
    });
    this.elements += `</ul>
                    </nav>
    `;
    this.render();
  }
  render() {
    this.parentElement.innerHTML = this.elements;
  }
}
