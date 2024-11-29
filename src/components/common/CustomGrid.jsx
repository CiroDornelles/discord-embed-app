import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
}));

CustomGrid.defaultProps = {
  container: true
};

export default CustomGrid;
