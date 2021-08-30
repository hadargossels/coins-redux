import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    container: {
      backgroundColor: 'black',
      color: 'white',
      marginBottom: '50px'
    },
    cell: {
        color: 'white',
        borderBottom: 'none'
    },
    table: {
        marginTop: '15px',
        width: '70%',
        margin: '0 auto'
    },
    tableBody: {
        borderTop: '1px solid white',
        borderBottom: '1px solid white',
    }
  });

export default function CoinTable(props) {
    const classes = useStyles();

    return (
        <div>
                            <TableContainer className={classes.container} component={Paper} >
                    <Table className={classes.table} aria-label="simple table" >
                        <TableHead>
                        <TableRow>
                            <TableCell className={classes.cell} align="right">{props.type}</TableCell>
                            <TableCell className={classes.cell} align="right"></TableCell>
                            <TableCell className={classes.cell} align="right"></TableCell>
                            <TableCell className={classes.cell} align="right"></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody className={classes.tableBody}>
                        {props.coins[props.type].map((coin) => (
                            <TableRow key={coin.name}>
                            <TableCell className={classes.cell} component="th" scope="row" align="right">
                                {coin.name}
                            </TableCell>
                            <TableCell className={classes.cell} align="right">{coin.data1}</TableCell>
                            <TableCell className={classes.cell} style={{color: coin.data2 > 0 ? 'green' : 'red'}} align="right">{coin.data2}</TableCell>
                            <TableCell className={classes.cell} align="right">{coin.data3}</TableCell>
                            <TableCell className={classes.cell} align="right">{coin.star === true ? <i class="fas fa-star"></i> : <i class="far fa-star"></i>}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
        </div>
    )
}
