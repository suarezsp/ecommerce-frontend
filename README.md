## Steps for correcting working.

Install dependencies (if error occurs)

```bash
  npm install

  or

  npm install react-material-ui-carousel --save --legacy-peer-deps
```

Start the server

```bash
  npm start
  or
  npm run dev
```

The server should now be running. You can access the application by opening a web browser and entering the following URL:

```bash
  http://localhost:3000
```

## Layout approach

Changed the original layout for:

- **Modular component of every product card:**
  Created ProductCard.jsx in order to improve workflow.
- **Clear structure:**
  Centered image, badge (new, out of stock), better title, rating, description, buttons (buy and add to cart), shadows, hover
- **Modern visual style:**
  Using modern databases of styles, I created a more coherent card.
- **Responsive Design:**
  Responsive design regarding size of screen,hovering, dynamic shadows, colors that change regarding stock\*,dropout menu that filters category.

* Every "Out of stock" was based, in this case, for every <2.5 rated item, just to show the visual style.
