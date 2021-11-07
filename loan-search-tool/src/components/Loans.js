import React from 'react';
import Paper from '@mui/material/Paper';
import Loan from './Loan';
import SearchBar from './SearchBar';
import Grid from '@mui/material/Grid'

const Loans = ({ loans }) => {
    return (
        <div>
            <Paper className='MuiPaper'>
                <SearchBar />
                <Grid container spacing={4}>
                    {loans.map((loan) => (
                        <Loan
                            key={loan.id}
                            loan={loan}
                        />
                    ))}
                </Grid>
            </Paper>
        </div>
    )
}

export default Loans
