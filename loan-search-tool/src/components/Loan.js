import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Loan = ({ loan }) => {

    //this.setState({loan: loan.loan});

    return (
       <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ minHeight: '250px', padding: '20px'}} elevation={5} gutterBottom className='MuiCard'>
                <h2>{loan.first_name} {loan.last_name}</h2>
                <p>{loan.address}</p>
                <p>{loan.city}, {loan.state} {loan.zip}</p>
                <p style={{color: "#0288d1"}}>{loan.email}</p>
                <h3>{loan.loan_number}</h3>
            </Card>
       </Grid>
    )
}

export default Loan
