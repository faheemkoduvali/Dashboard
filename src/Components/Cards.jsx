import React from 'react'
import {Card, CardContent,CardHeader ,Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import cx from 'classnames'

const Cards = ({  confirmed, recovered, deaths, lastUpdate } ) => {
    

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid xs={12} md={3} lg={4}>
                <Card className={cx(styles.card,styles.infected)}>
                <CardHeader title="Shrimp and Chorizo Paella" className={styles.headerTitle}/>
                    <CardContent>
                        <Typography gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                        </Typography>
                        <Typography variant="body2">Number of active caases of Covid-19</Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid xs={12} md={3} lg={4}>
                    <Card className={cx(styles.card,styles.recovered)}>
                    <CardHeader title="Shrimp and Chorizo Paella" className={styles.headerTitle}/>
                        <CardContent>
                            <Typography gutterBottom>Infected</Typography>
                            <Typography variant="h5">
                            </Typography>
                            <Typography variant="body2">Number of active caases of Covid-19</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} md={3} lg={4}>
                    <Card  className={cx(styles.card,styles.deaths)}>
                    <CardHeader title="Shrimp and Chorizo Paella" className={styles.headerTitle}/>
                        <CardContent>
                            <Typography gutterBottom>Infected</Typography>
                            <Typography variant="h5">
                            </Typography>
                            <Typography variant="body2">Number of active caases of Covid-19</Typography>
                        </CardContent>
                    </Card>
                </Grid>
               
            </Grid>
        </div>
    )
}

export default Cards
