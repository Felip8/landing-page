import { useState } from "react";
import "../styles/contato.css";

export default function Formulario() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Impede a página de recarregar

    if (!email.trim() || !message.trim()) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);

    try {
      // Faz a chamada para a serverless function local na porta do Netlify Dev
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso! Verifique sua caixa de e-mail.");
        setEmail(""); // Limpa o campo de email
        setMessage(""); // Limpa o campo de mensagem
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
        <button type="submit" className="btn-primary enviar" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </section>
  );
}
