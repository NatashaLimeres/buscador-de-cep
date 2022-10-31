import React from "react";

function Address({ cep }) {
  return (
    <main className="main">
      <h2>CEP: {cep.cep}</h2>
      <span>{cep.logradouro}</span>
      <span>Complemento: {cep.complemento}</span>
      <span>{cep.bairro}</span>
      <span>
        {cep.localidade} - {cep.uf}
      </span>
    </main>
  );
}

export default Address;
