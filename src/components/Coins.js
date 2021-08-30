// import React, { Component } from 'react'
// import { connect } from 'react-redux'
import {fetchCoins, setLoading} from '../actions/actions'
import CoinTable from './table/CoinTable'

// import './Coins.css'

// // const useStyles = makeStyles({
// //     root: {
// //       background: 'black',
// //       color: 'white',
// //     },
// //   });

// const coinss = 
// [
//     [{
//         "name": "XRPAUD",
//         "data1": 1.55,
//         "data2": -0.57,
//         "data3": "121.8K",
//         "type" : "XRP",
//         "star" : true
//     },
//     {
//         "name": "XRPBTC",
//         "data1": 0.0002345,
//         "data2": 0.43,
//         "data3": "824.6K",
//         "type" : "XRP",
//         "star" : false
//     },
//     {
//         "name": "XRPCAD",
//         "data1": 1.43,
//         "data2": -0.35,
//         "data3": "222.3K",
//         "type" : "XRP",
//         "star" : false
//     }],
    
//         [{
//             "name": "BHCAUD",
//             "data1": 1.55,
//             "data2": -0.57,
//             "data3": "121.8K",
//             "type": "BCH",
//             "star" : true
//         },
//         {
//             "name": "BHCBTC",
//             "data1": 0.0002345,
//             "data2": 0.43,
//             "data3": "824.6K",
//             "type": "BCH",
//             "star" : true
//         },
//         {
//             "name": "BHCCAD",
//             "data1": 1.43,
//             "data2": -0.35,
//             "data3": "222.3K",
//             "type": "BCH",
//             "star" : false
//         }],
//         [{
//             "name": "LTCAUD",
//             "data1": 1.55,
//             "data2": -0.57,
//             "data3": "121.8K",
//             "type": "LTC",
//             "star" : false
//         },
//         {
//             "name": "LTCBTC",
//             "data1": 0.0002345,
//             "data2": 0.43,
//             "data3": "824.6K",
//             "type": "LTC",
//             "star" : false
//         },
//         {
//             "name": "LTCCAD",
//             "data1": 1.43,
//             "data2": -0.35,
//             "data3": "222.3K",
//             "type": "LTC",
//             "star" : true
//         }]
//     ]


// export class Coins extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             coins: []
//         }  
//     }
    

//     componentDidMount() {
//         this.getCoins()
//         this.getKeys()
//     }

//     getKeys() {

//     }

//     getCoins() {
//         // this.props.fetchCoins()
//         // this.setState({coins: results})
//         // console.log(state.coins);
        

//     }



//     render() {
// console.log(this.props.coins)
//         const coins = coinss
//         return (
//             <div style={{backgroundColor: 'black'}}>
//                 {coins.map((v) => 
//                 <CoinTable current={v} type={v[0].type}/>
//                 )}
//             </div>
//         )
//     }
// }
// const mapStateToProps = state => ({
//     coins: state.coins.coins,
// })

// export default connect(mapStateToProps, {fetchCoins, setLoading})(Coins)
// // export default Coins

import React, {useEffect} from 'react'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";

export default function Coins() {

    const dispatch = useDispatch();
  
    const coins = useSelector((state) => state.coins)
    const keys = Object.keys(coins.coins)

    useEffect(() => {
        dispatch(fetchCoins())

    }, [dispatch])

    return (
        <div>
            <div style={{backgroundColor: 'black', padding: '30px'}}>
                 {keys.map((v) => 
                <CoinTable type={v} coins={coins.coins}/>
                )}
            </div>
        </div>
    )
}

