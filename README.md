# Proxy Melhor Envio (Node.js)

Este projeto é um proxy HTTP para contornar bloqueios de requisições externas em hospedagens compartilhadas.

## Como usar

1. Suba este diretório para um repositório no GitHub.
2. No Render.com, crie um novo Web Service e conecte ao seu repositório.
3. O Render detecta automaticamente o comando `node index.js`.
4. Após o deploy, use a URL fornecida pelo Render para fazer requisições POST para `/melhorenvio`.

## Exemplo de requisição para o proxy

```json
POST /melhorenvio
{
  "endpoint": "https://api.melhorenvio.com.br/api/v2/me/shipment/calculate",
  "method": "POST",
  "headers": {
    "Authorization": "Bearer SEU_TOKEN",
    "Content-Type": "application/json"
  },
  "body": { /* seu payload */ }
}
```

## Dependências
- express
- node-fetch

---

Dúvidas? Só pedir!
