import Icard from "../../Components/Icard"
import Grid from '@mui/material/Grid';

export default function Certifications(){
    const pics = ['1']
    return(
        <>
        


        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12}}>
            {
                pics.map((pic)=>{
                    return  <Grid item xs={2} sm={4} md={2}>
                    <Icard/>
                    </Grid>
                })
            }
           
         
        </Grid>
        </>
    )
  
}