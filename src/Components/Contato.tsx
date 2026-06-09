import "../styles/contato.css";

export default function Formulario() {
  return (
    <div id="contact" className="container formulario">
      {/*useio dois nomes pra não ferrar o tamanho padrao do container */}
      <div className="container-formulario">
        <p>Envie sua dúvida</p>
        <h3>Entre em contato</h3>
        <p className="texto-usuario">
          Entre em contato. Estamos dispostos a tirar qualquer dúvida, seja um
          orçamento ou uma dúvida técnica de algum de nossos produtos. Estamos à
          disposição para responder.😎
        </p>
      </div>
      <div className="inputs-formularios">
        <input type="email" name="" id="" placeholder="Seu melhor Email" />
        <input
          type="text"
          placeholder="Motivo do contato. Ex: Gostei muito do plano X, poderia me dar um orçamento?"
        />
      </div>
      <button className="btn-primary enviar">Enviar</button>
    </div>
  );
}
