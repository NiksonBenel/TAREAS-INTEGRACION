import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Button, Container, FormControl, FormControlLabel, InputLabel, MenuItem, NativeSelect, Switch, TextField } from '@mui/material';
import { CheckBox } from '@mui/icons-material';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container fixed>
        <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Información personal" {...a11yProps(0)} />
            <Tab label="Contacto" {...a11yProps(1)} />
            </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
            <TextField label="Nombres" id="margin-none" />
            <br></br>
            <br></br>
            <TextField label="Apellidos" id="margin-none"/>
            <br></br>
            <br></br>
            <TextField label="Ocupación" id="margin-none"/>
            <br></br>
            <br></br>
            <FormControlLabel control={<Switch defaultChecked />} label="Mayor de edad" />
            <br></br>
            <br></br>
            <Button variant="contained" color="success">Registrarse</Button>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        <TextField label="Correo" id="margin-none" />
            <br></br>
            <br></br>
            <TextField label="Celular" id="margin-none"/>
            <br></br>
            <br></br>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Rango de edad
        </InputLabel>
        <NativeSelect
            defaultValue={30}
            inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
            }}
        >
            <option value={10}>16-20</option>
            <option value={20}>21-25</option>
            <option value={30}>26-30</option>
        </NativeSelect>
        <br></br>
        <br></br>
        Puntuación del sitio web
        <Pagination count={10} color="primary" />
        <br></br>
        <br></br>
        <Button variant="contained" color="success">Guardar</Button>

        </CustomTabPanel>
        
        </Box>
    </Container>
  );
}