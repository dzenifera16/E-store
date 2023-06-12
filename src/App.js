import "./styles.css";

import AppBar from "@mui/material/AppBar";

import { Toolbar, Drawer, Avatar, Alert, Tooltip } from "@mui/material";
import { IconButton, Typography, Grid, Badge, Button } from "@mui/material";
import { Card, CardMedia, CardContent, CardActions } from "@mui/material";
import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import ListIcon from "@mui/icons-material/List";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutline from "@mui/icons-material/RemoveCircleOutline";
import HighlightOff from "@mui/icons-material/HighlightOff";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import data from "./AppData";
import { useState } from "react";
export default function App() {
  const [productData, SetProductData] = useState(data.productData);
  const [cartData, SetCartData] = useState(data.cartData);
  const [isCartVisible, SetIsCartVisible] = useState(false);

  function onIsFreeShippingChange(event) {
    let isFreeShippingFormValue = parseInt(event.target.value, 2);
    if (isFreeShippingFormValue === -1) {
      SetProductData(data.productData);
      return;
    }
    let isFreeShipping = isFreeShippingFormValue === 1 ? true : false;
    const newProductData = data.productData.filter(
      (item, index) => item.isFreeShipping === isFreeShipping
    );
    SetProductData(newProductData);
  }
  function onCategoryClick(categoryId) {
    if (categoryId === 0) {
      SetProductData(data.productData);
      return;
    }
    const newProductData = data.productData.filter(
      (item) => item.category.indexOf(categoryId) > -1
    );
    SetProductData(newProductData);
  }
  function onClickDeleteAll() {
    SetCartData({ ...cartData, totalPrice: 0, totalQuantity: 0, items: [] });
  }
  function onAdd2ItemToCart(productId, price) {
    let newCartItems = [];

    if (
      cartData.items.length > 0 &&
      cartData.items.findIndex((product) => product.productId === productId) >
        -1
    ) {
      newCartItems = cartData.items.map((item) => {
        if (item.productId === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    } else {
      newCartItems = cartData.items;
      newCartItems.push({ productId: productId, price: price, quantity: 1 });
      // const product = productData.find((item) => item.id === productId);
      // let newItem = {
      //   productId: product.id,
      //   price: product.price,
      //   quantity: 1
      // };
      // newCartItems = [...cartData.items, newItem];
    }
    let totalPrice = 0;
    let totalQuantity = 0;

    newCartItems.forEach((item) => {
      totalPrice = totalPrice + item.price * item.quantity;
      totalQuantity = totalQuantity + item.quantity;
    });

    SetCartData({
      ...cartData,
      items: newCartItems,
      totalPrice: totalPrice,
      totalQuantity: totalQuantity
    });
  }

  function onCategoryAllClick() {
    SetProductData(data.productData);
  }
  function onSizeChange(event) {
    const selectedValue = Array.from(event.target.selectedOptions, (option) =>
      parseInt(option.value, 0)
    );

    const newProductData = data.productData.filter((item) =>
      item.size.some((s) => selectedValue.indexOf(s) > -1)
    );
    SetProductData(newProductData);
  }
  function onAddToCartClick(productId) {
    let CartDataItems = cartData.items.map((item) => {
      if (item.productId === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    let totalPrice = 0;
    let totalQuantity = 0;
    // CartDataItems.map((item) => {
    //   totalPrice = totalPrice + item.price * item.quantity;
    //   totalQuantity = totalQuantity + item.quantity;
    //   return item;
    // });
    CartDataItems.forEach((item) => {
      totalPrice = totalPrice + item.price * item.quantity;
      totalQuantity = totalQuantity + item.quantity;
    });
    SetCartData({
      ...cartData,
      items: CartDataItems,
      totalPrice: totalPrice,
      totalQuantity: totalQuantity
    });
  }

  function onSubtractCartClick(productId) {
    const CartDataItems = cartData.items.map((item) => {
      if (item.productId === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    let totalPrice = 0;
    let totalQuantity = 0;
    // CartDataItems.map((item) => {
    //   totalPrice = totalPrice + item.price * item.quantity;
    //   totalQuantity = totalQuantity + item.quantity;
    //   return item;
    // });
    CartDataItems.forEach((item) => {
      totalPrice = totalPrice + item.price * item.quantity;
      totalQuantity = totalQuantity + item.quantity;
    });
    SetCartData({
      ...cartData,
      items: CartDataItems,
      totalPrice: totalPrice,
      totalQuantity: totalQuantity
    });
  }
  function onRemoveCartClick(productId) {
    const newCartItems = cartData.items.filter(
      (item) => item.productId !== productId
    );
    let totalPrice = 0;
    let totalQuantity = 0;
    // CartDataItems.map((item) => {
    //   totalPrice = totalPrice + item.price * item.quantity;
    //   totalQuantity = totalQuantity + item.quantity;
    //   return item;
    // });
    newCartItems.forEach((item) => {
      totalPrice = totalPrice + item.price * item.quantity;
      totalQuantity = totalQuantity + item.quantity;
    });
    SetCartData({
      ...cartData,
      items: newCartItems,
      totalPrice: totalPrice,
      totalQuantity: totalQuantity
    });
  }
  function onBrandChange(event) {
    const selectedValue = Array.from(event.target.selectedOptions, (option) =>
      parseInt(option.value, 0)
    );

    const newProductData = data.productData.filter(
      (item) => selectedValue.indexOf(item.brand) > -1
    );
    SetProductData(newProductData);
  }

  function onColorChange(event) {
    const selectedValue = Array.from(event.target.selectedOptions, (option) =>
      parseInt(option.value, 0)
    );

    const newProductData = data.productData.filter((item) =>
      item.color.some((s) => selectedValue.indexOf(s) > -1)
    );
    SetProductData(newProductData);
  }
  function onPriceChange(event) {
    const newProductData = [...data.productData]; // Create a new array to avoid modifying the original data

    const selectedValue = parseInt(event.target.value, 0);

    if (selectedValue === 1) {
      newProductData.sort((a, b) => b.price - a.price);
    } else if (selectedValue === 2) {
      newProductData.sort((a, b) => a.price - b.price);
    }

    SetProductData(newProductData);
  }
  function GetproductById(productId) {
    var product = data.productData.filter((item) => item.id === productId);
    return product[0];
  }

  return (
    <div className="App">
      <AppBar position="fixed">
        <Toolbar>
          <CurrencyExchangeIcon className="App-Title" />
          <Typography
            variant="h6"
            component="span"
            sx={{ marginRight: "auto" }}
          >
            E-veiklas
          </Typography>

          <div>
            {/* <IconButton
                  onClick={toggleDrawer(anchor, true)}
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  sx={{ marginLeft: "auto" }}

                > */}
            <IconButton
              onClick={SetIsCartVisible}
              color="inherit"
              aria-label="open drawer"
              edge="end"
              sx={{ marginLeft: "auto" }}
            >
              <Badge badgeContent={cartData.totalQuantity} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <Drawer>
              <div>
                {/* <Typography
                      variant="h5"
                      component="span"
                      sx={{ possition: "center" }}
                    >
                      Iepirkumu grozs
                    </Typography> */}
                {/* <List component="nav" aria-label="mailbox folders">
                      {cartData &&
                        cartData.items &&
                        cartData.items.length > 0 &&
                        cartData.items.map((item, index) => {
                          return (
                            <div key={index}>
                              <ListItem sx={{ margin: "10px", padding: "5px" }}>
                                <span> id: {item.productId}</span>
                                <span> price: {item.price}</span>
                                <span> quantity: {item.quantity}</span>
                                <button
                                  onClick={() =>
                                    onAddToCartClick(item.productId)
                                  }
                                >
                                  +
                                </button>
                                <button
                                  onClick={() =>
                                    onSubtractCartClick(item.productId)
                                  }
                                >
                                  -
                                </button>
                                <button
                                  onClick={() =>
                                    onRemoveCartClick(item.productId)
                                  }
                                >
                                  x
                                </button>
                              </ListItem>
                              <Divider />
                            </div>
                          );
                        })}
                    </List> */}
                {/* <Paper
                      elevation={3}
                      sx={{ margin: "10px", padding: "5px" }}
                    >
                      <div>Kopējā cena: {cartData.totalPrice}</div>
                      <div>Daudzums: {cartData.totalQuantity}</div>
                      <Button variant="contained" onClick={onClickDeleteAll}>
                        Noņemt visas preces
                      </Button>
                    </Paper> */}
              </div>
            </Drawer>
          </div>
        </Toolbar>
      </AppBar>

      <div className="Empty-row" />
      <div className="app-layout">
        <div>
          <div>
            <List
              subheader={
                <ListSubheader className="list-header">Sadaļas:</ListSubheader>
              }
            ></List>
          </div>
          <div>
            {/* <button onClick={onCategoryAllClick}> Visi</button> */}
            {data.categoryData &&
              data.categoryData.length > 0 &&
              data.categoryData.map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    button
                    onClick={() => onCategoryClick(item.id)}
                  >
                    <ListItemIcon>
                      <ListIcon />
                    </ListItemIcon>
                    <ListItemText
                      className="category-list-text"
                      primary={item.name}
                    ></ListItemText>
                  </ListItem>
                );
              })}
          </div>
          {/* <div>
            <select multiple onChange={onSizeChange}>
              {data.sizeData &&
                data.sizeData.length > 0 &&
                data.sizeData.map((item, index) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div>
            <select multiple onChange={onBrandChange}>
              {data.brandData &&
                data.brandData.length > 0 &&
                data.brandData.map((item, index) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div>
            <select multiple onChange={onColorChange}>
              {data.colorData &&
                data.colorData.length > 0 &&
                data.colorData.map((item, index) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div>
            <select onChange={onPriceChange}>
              {data.SortData &&
                data.SortData.length > 0 &&
                data.SortData.map((item, index) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
          </div> */}
          {/* <div onChange={onIsFreeShippingChange}>
            <span> Is free shipping</span>
            <input type="radio" value="1" name="freeShipping" /> Yes
            <input type="radio" value="0" name="freeShipping" /> No
            <input type="radio" value="-1" name="freeShipping" /> Both
          </div> */}
        </div>

        <div>
          <div className="product-length">
            Atrastas {productData.length} preces
          </div>
          <Grid container spacing={4}>
            {/* <Grid item xs={12} sm={6} md={4} lg={3}> Tests</Grid> */}

            {productData &&
              productData.length > 0 &&
              productData.map((item, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card>
                      <div className="CardMedia-style">
                        <CardMedia
                          component="img"
                          height="200"
                          title={item.name}
                          image={item.Image}
                        ></CardMedia>
                        {item.isFreeShipping && (
                          <div className="free-shipping-icon">
                            <Tooltip title="Free shipping">
                              <LocalShippingTwoToneIcon />
                            </Tooltip>
                          </div>
                        )}
                      </div>
                      <CardContent>
                        <div className="product-item-name">{item.name}</div>
                        <div className="product-item-price">
                          {item.price.toFixed(2)} €
                        </div>
                        <div className="produc-item-description-text">
                          {" "}
                          {item.description}
                        </div>
                      </CardContent>
                      <CardActions className="CardAction-Content">
                        <Button
                          className="button-style-text"
                          variant="outlined"
                          startIcon={<AddShoppingCartIcon />}
                          onClick={() => onAdd2ItemToCart(item.id, item.price)}
                        >
                          Pievienot Grozam
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
        </div>
      </div>

      <Drawer
        open={isCartVisible}
        onClose={() => SetIsCartVisible(false)}
        anchor="right"
        PaperProps={{ sx: { width: "500px", backgroundColor: "#B7CADB" } }}
      >
        <div className="drawer-content">
          <div className="drawer-badge-content">
            <div className="drawer-badge-title">Iepirkuma grozs</div>
            <Badge badgeContent={cartData.totalQuantity} color="error">
              <ShoppingCartIcon
                className="drawer-shopping-cart"
                color="primary"
              />
            </Badge>
          </div>
          {cartData.totalQuantity === 0 && (
            <div className="drawer-nodata-content">
              <span>Pievienojat vismaz vienu produktu grozam :)</span>
            </div>
          )}
          {cartData.totalQuantity > 0 && (
            <>
              <List>
                {cartData &&
                  cartData.items &&
                  cartData.items.length > 0 &&
                  cartData.items.map((item, index) => {
                    var product = GetproductById(item.productId);
                    return (
                      <Card className="drawer-cart-item">
                        <ListItem
                          key={index}
                          secondaryAction={
                            <div>
                              <IconButton
                                edge="end"
                                title="Palielināt skaitu"
                                onClick={() => onAddToCartClick(item.productId)}
                              >
                                <AddCircleOutline />
                              </IconButton>
                              <IconButton
                                edge="end"
                                title="Samazināt skaitu"
                                onClick={() =>
                                  onSubtractCartClick(item.productId)
                                }
                              >
                                <RemoveCircleOutline />
                              </IconButton>
                              <IconButton
                                edge="end"
                                title="Noņemt produktu"
                                onClick={() =>
                                  onRemoveCartClick(item.productId)
                                }
                              >
                                <HighlightOff />
                              </IconButton>
                            </div>
                          }
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <img
                                src={product.Image}
                                alt="produkts"
                                height="40"
                                width="40"
                              />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              product.name +
                              " [" +
                              item.price.toFixed(2) +
                              " €]"
                            }
                            secondary={"Daudzums: " + item.quantity}
                          />
                        </ListItem>
                      </Card>
                    );
                  })}
              </List>
              <div>
                <Alert variant="outlined" severity="info">
                  <div>
                    Kopējā cena: {cartData.totalPrice.toFixed(2) + " €"}
                  </div>
                  <div>Kopējais preču daudzums: {cartData.totalQuantity}</div>
                  <Button variant="contained" disabled>
                    Pasūtīt
                  </Button>
                  <Button
                    className="drawer-footer-btn"
                    variant="outlined"
                    onClick={onClickDeleteAll}
                  >
                    Notīrīt
                  </Button>
                </Alert>
              </div>
            </>
          )}
        </div>
      </Drawer>
    </div>
  );
}
