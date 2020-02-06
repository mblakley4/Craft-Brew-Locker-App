import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          <a
            href='mailto:m.blakley@icloud.com'
            target='_blank'
            rel="noopener noreferrer"
          >
             Michael Blakley
            </a>
          | © 2019</p>
      </footer>
    );
  }
}
