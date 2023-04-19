This Guide for use generator PFB (Pay For Blob) Celestia

Link UI Celestia PFB : http://64.226.77.246:6070/


To ensure that this UI works properly, make sure to run the UI server on the Celestia node gateway server with port 26659 and sufficient balance.


## Generate 

![Screenshot 2023-04-12 at 04 49 58](https://user-images.githubusercontent.com/65535542/231295828-bee0c644-1f57-4461-8a4c-750fcb826fd6.png)


## Result For PFB
![Screenshot 2023-04-12 at 04 49 58](https://user-images.githubusercontent.com/65535542/231295910-4c1f5974-6270-48e3-82b2-cab605b53943.png)



Step For Installation


```bash 
curl http://deb.nodesource.com/setup_lts.x | sudo bash -

sudo apt install git nodejs -y

```

``` bash
apt install npm

npm install child_process

npm install express
```

```bash
git clone https://github.com/Dexanode/celestia_pfb
``` 

```bash
cd celestia_pfb
```

```
node main.js
```
