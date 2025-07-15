import express from "express";
import fetch from "node-fetch";
const app = express();
app.use(express.json());

app.post("/melhorenvio", async (req, res) => {
  try {
    const { endpoint, method = "POST", headers = {}, body } = req.body;
    const response = await fetch(endpoint, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await response.text();
    res.status(response.status).send(data);
  } catch (e) {
    res.status(500).json({ error: "Erro no proxy", details: e.message });
  }
});

app.get("/", (req, res) => res.send("Proxy Melhor Envio online!"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Proxy rodando na porta " + port));
