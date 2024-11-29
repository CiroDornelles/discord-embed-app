import { Grid } from '@mui/material';

const GridContainer = ({ children, ...props }) => {
  return (
    <Grid container {...props}>
      {children}
    </Grid>
  );
};

export default GridContainer;
