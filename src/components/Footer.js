import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} Datakin, Inc. All rights reserved.
        </span>
      </div>
    </footer>
  </div>
)
