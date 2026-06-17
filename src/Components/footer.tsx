import "../styles/footer.css";
import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <nav className="redes">
          <div className="logo-e-redes-sociais">
            <img
              src={Logo}
              alt="Logo Agro & Pet Boiadeiro"
              width={300}
              height={160}
            />
            <ul className="svgs">
              <li>
                <a href="https://www.instagram.com/agropetboiadeiro/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z"
                      />
                      <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/agropecuariaboiadeiropetshop">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <nav>
          <h3>A Empresa</h3>
          <ul>
            <li>
              <a href="#">Sobre Nós</a>
            </li>
            <li>
              <a href="#">Nossa Loja Física</a>
            </li>
            <li>
              <a href="#">Marcas Parecidas</a>
            </li>
            <li>
              <a href="#">Trabalhe Conosco</a>
            </li>
            <li>
              <a href="#">Blog Agro & Campo</a>
            </li>
          </ul>
        </nav>

        <nav>
          <h3>Categorias</h3>
          <ul>
            <li>
              <a href="#pricing">Rações e Nutrição</a>
            </li>
            <li>
              <a href="#">Linha Pet Shop</a>
            </li>
            <li>
              <a href="#">Artigos para Boiadeiro</a>
            </li>
            <li>
              <a href="#">Medicamentos Vet</a>
            </li>
            <li>
              <a href="#">Ferramentas e Selaria</a>
            </li>
          </ul>
        </nav>

        <nav>
          <h3>Atendimento</h3>
          <ul>
            <li>
              <a href="#contact">Fale Conosco</a>
            </li>
            <li>
              <a href="#">Central de Ajuda</a>
            </li>
            <li>
              <a href="#">Televendas WhatsApp</a>
            </li>
            <li>
              <a href="#">Políticas de Troca</a>
            </li>
            <li>
              <a href="#">Horários de Funcionamento</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Linha fina divisória */}
      <hr className="footer-divider" />

      {/* Seção inferior com o texto de copyright */}
      <div className="footer-bottom">
        <p>&copy; 2026 Agro & Pet Boiadeiro. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
