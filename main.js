const { exec } = require('child_process');
const express = require('express');


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.post('/', (req, res) => {
  const namespace_id = req.body.namespace_id;
  const data = req.body.message;
  if (namespace_id && data) {
    const command = `curl --header "Content-Type: application/json" --request POST --data '{"namespace_id":"${namespace_id}","data":"${data}","gas_limit": 80000,"fee":2000}' http://localhost:26659/submit_pfb`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
        return;
      }
      try {
        const parsedOutput = JSON.parse(stdout);
        const { height, txhash } = parsedOutput;
        const signer = parsedOutput.logs[0].events[0].attributes[2].value;
        const result = {
          blockHeight: height,
          transactionHash: txhash,
          namespaceID: namespace_id,
          dataHex: data,
          signer,
          parsedOutput,
        };
        console.log(result)
        res.status(200).send(JSON.stringify(result, null, 2))
      } catch (e) {
        res.status(500).json(`Namespace ID: ${namespace_id}\nData Hex: ${data}\n\n\n${stdout}`);
        console.log(e)
      }
    });
  } else {
    res.status(400).json({ message: 'Invalid request' });
  }
});

app.listen(6070, () => {
  console.log('Server is listening on port 6070');
});
