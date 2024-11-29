import { Grid } from '@mui/material';

const GridItem = ({ children, ...props }) => {
  return (
    <Grid item {...props}>
      {children}
    </Grid>
  );
};

export default GridItem;
