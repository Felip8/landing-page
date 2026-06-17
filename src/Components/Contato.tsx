import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "../styles/contato.css";

export default function Formulario() {
  //armazena o que o uusário vai digitarr
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //formulario enviada = true, desastivando os campos de prenchimento
  const [loading, setLoading] = useState(false);

  //controla se o usuário passou pelo recaptcha ou não
  const [isChallengeCompleted, setChallengeCompleted] = useState(false);

  //reseta o recaptcha pra usar depois
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  function handleCompleteChallenge(token: string | null) {
    if (!token) {
      setChallengeCompleted(false);
      return;
    }
    setChallengeCompleted(true);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); //impede a tela de carregar dps de enviar ro formulario

    if (!email.trim() || !message.trim()) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (!isChallengeCompleted) {
      alert(
        "Por favor, complete o reCAPTCHA para provar que você não é um robô.",
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso! Verifique sua caixa de e-mail.");
        setEmail("");
        setMessage("");
        setChallengeCompleted(false);
        recaptchaRef.current?.reset();
      } else {
        const errorData = await response.json();
        alert(`Erro ao enviar: ${errorData.error || "Tente novamente."}`);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro de conexão. Verifique se o Netlify Dev está rodando.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="container formulario">
      <div className="container-formulario">
        <p>Envie sua dúvida</p>
        <h3>Entre em contato</h3>
        <p className="texto-usuario">
          Entre em contato. Estamos dispostos a tirar qualquer dúvida, seja um
          orçamento ou uma dúvida técnica de algum de nossos produtos. Estamos à
          disposição para responder.😎
        </p>
      </div>

      <form onSubmit={handleSubmit} className="formulario-bloco">
        <div className="inputs-formularios">
          <input
            type="email"
            placeholder="Seu melhor Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
          />
          <input
            type="text"
            placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me dar um orçamento?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={loading}
            required
          />
        </div>

        <div className="recaptcha-wrapper" style={{ marginBottom: "1.5rem" }}>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LfXzCQtAAAAAD7YMbtdz9BbwCAnxoP_T-lXChdV"
            onChange={handleCompleteChallenge}
          />
        </div>

        <button type="submit" className="btn-primary enviar" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </section>
  );
}
