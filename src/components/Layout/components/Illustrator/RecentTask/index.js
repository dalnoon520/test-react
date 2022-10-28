import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from '../Illustrator.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const cx = classNames.bind(styles);



function RecentTask() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    items.map(item => {
        const fd = item.first_deliverable
        console.log(fd.slice(0,10));
    })

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch('https://6294640ba7203b3ed067f742.mockapi.io/api/shopify/tasks?page=1&limit=5')
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                },
            );
    }, []);

    return (
        <TableContainer component={Paper} className={cx('data-section')}>
            <Table className={cx('data-table')} aria-label="simple table">
                <TableHead>
                    <TableRow className={cx('data-table__head')}>
                        <TableCell>Type</TableCell>
                        <TableCell align="left">Task ID</TableCell>
                        <TableCell align="left">Task Name</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="left">First Deliverable</TableCell>
                        <TableCell align="left">Closed</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item) => (
                        <TableRow key={item.id} className={cx('data-table__body')}>
                            <TableCell component="th" scope="row" className={cx('data-table__type')}>
                                {item.type}
                            </TableCell>
                            <TableCell align="left" className={cx('data-table__id')}>#{item.id}</TableCell>
                            <TableCell align="left">
                                <div className={cx('data-table__name')}>{item.name}</div>
                                <div className={cx('data-table__description')}>{item.description}</div>
                            </TableCell>
                            <TableCell align="left" className={cx('data-table__status')}>{item.status ? 'Active' : 'Fail'}</TableCell>
                            <TableCell align="left">{item.first_deliverable.slice(0,10)}</TableCell>
                            <TableCell align="left">{item.closed.slice(0,10)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default RecentTask;
