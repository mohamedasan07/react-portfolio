import { ChevronUp } from "lucide-react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="brand brand--footer" href="#home">
          ASAN<span>.DEV</span>
        </a>

        <p>© 2026 Mohamed Asan. All Rights Reserved.</p>

        <a className="footer__top" href="#home">
          Back to top <ChevronUp size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
