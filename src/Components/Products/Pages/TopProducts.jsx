import React from 'react'
import useStyles from '../style';
import { Grid, Typography, Button } from '@material-ui/core';
import Product from '../Product/Product';
const TopProducts = ({ topProducts, onAddToCart }) => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}>

            </div>
            <Grid container justifyContent="center" spacing={4}>
                {
                    topProducts.map((product) => (

                        <Grid item key={product.id} xs={12} sm={6} md={3} lg={3}>
                            <Product product={product} onAddToCart={onAddToCart} />
                        </Grid>
                    ))
                }
            </Grid>
        </main>
    )
}

export default TopProducts