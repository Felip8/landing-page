import "../styles/footer.css";
import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer>
      <nav className="redes">
        <img src={Logo} alt="Logo DonaFrost" width={300} height={160} />
        <ul className="svgs">
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    stroke="currentColor"
                    stroke-width="2"
                    d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z"
                  />
                  <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-dasharray="60"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5c9 0 9 0 9 7c0 7 0 7 -9 7c-9 0 -9 0 -9 -7c0 -7 0 -7 9 -7Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="60;0"
                  />
                </path>
                <path fill="currentColor" d="M10 8.5l6 3.5l-6 3.5Z" opacity="0">
                  <set
                    fill="freeze"
                    attributeName="opacity"
                    begin="0.6s"
                    to="1"
                  />
                  <animate
                    fill="freeze"
                    attributeName="d"
                    begin="0.6s"
                    dur="0.2s"
                    values="M12 11l0 1l0 1Z;M10 8.5l6 3.5l-6 3.5Z"
                  />
                </path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      <nav className="">
        <h3>Empresa</h3>
        <ul>
          <li>
            <a href="#">Sobre nós</a>
          </li>
          <li>
            <a href="#">Parceiros</a>
          </li>
          <li>
            <a href="#">Trabalhe conosco</a>
          </li>
          <li>
            <a href="#">Imprensa</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>

      <nav>
        <h3>Funcionalidades</h3>
        <ul>
          <li>
            <a href="#">Roteiros por IA</a>
          </li>
          <li>
            <a href="#">Busca Inteligente</a>
          </li>
          <li>
            <a href="#">Alertas de preço</a>
          </li>
          <li>
            <a href="#">Divisão de Gastos</a>
          </li>
          <li>
            <a href="#">Mapas Offline</a>
          </li>
        </ul>
      </nav>

      <nav>
        <h3>Recursos</h3>
        <ul>
          <li>
            <a href="#">Guia de Destinos</a>
          </li>
          <li>
            <a href="#">Central de Ajuda</a>
          </li>
          <li>
            <a href="#">Clube de Benefícios</a>
          </li>
          <li>
            <a href="#">Seguro Viagem</a>
          </li>
          <li>
            <a href="#">Aplicativo</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
