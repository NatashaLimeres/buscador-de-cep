import React from "react";
import { useState } from "react";
import Address from "../../components/Address";
import Loading from "../../components/Loading";
import UserInput from "../../components/UserInput";
import { getAddress } from "../../services/Address";
import "./styles.css";

function Home() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (input === "") {
      alert("Preencha algum CEP");
    } else {
      try {
        setLoading(true);
        setCep({});
        const response = await getAddress({ input });
        setLoading(false);
        setCep(response);
        setInput("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="container">
      <h1 className="title">BUSCADOR CEP</h1>

      <UserInput
        input={input}
        setInput={setInput}
        handleSearch={handleSearch}
      />

      {loading ? <Loading /> : null}
      {Object.keys(cep).length > 0 ? <Address cep={cep} /> : null}
    </div>
  );
}

export default Home;
