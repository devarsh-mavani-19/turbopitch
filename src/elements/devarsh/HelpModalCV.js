import { Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';
import { AiFillCloseCircle } from 'react-icons/ai'

function MyTable () {
    const rows = [
        {
            do: 'Mention important points only',
            do_ex: `We are looking for someone to build a website for a small coffee shop/bar and promote it. Please send your offers and estimated delivery time`,
            dont: 'Don\'t copy and paste description from freelancing website',
            dont_ex: `We are looking for someone to build a website for a small coffee shop/bar and promote it. Please send your offers and estimated delivery time`,
        },
    ]
    return (
        <TableContainer component={Paper} style={{width: 'auto'}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell><h6>Do's</h6></TableCell>
                    <TableCell align="right"><h6>Don'ts</h6></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell align="left">
                        <div>
                            <h5>{row.do}</h5>
                            <p>{row.do_ex}</p>
                        </div>
                    </TableCell>
                    <TableCell align="right">
                        <div>
                            <h5>{row.dont}</h5>
                            <p>{row.dont_ex}</p>
                        </div>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default function HelpModalCV({open, handleClose}) {
    return (
        <Modal
            open={open}
            handleClose={handleClose}
            className='d-flex justify-content-center align-items-center'
            style={{outline: 'none', height: '100vh'}}
        >
            <div
                style={{outline: 'none', width: 'auto', overflow: 'scroll', height: '80vh'}}
                className='container card shadow d-flex flex-column justify-content-center align-items-center p-5 m-5'
            >
                
                <div className="d-flex flex-row justify-content-start align-items-center" style={{width: '100%'}}>
                    <AiFillCloseCircle size={25} className='mx-5' style={{cursor: 'pointer'}} onClick={handleClose} />
                    <h3 className='text-center my-0 mx-5'>Important tips for description</h3>
                </div>
                <MyTable />
            </div>
        </Modal>
    )
}