import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { Button } from 'bootstrap';
import { AlignHorizontalLeft } from '@mui/icons-material';


function TabPanel(props) {
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

TabPanel.propTypes = {
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

export default function Notes() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="RSA notes" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                    <Tab label="Back To Main" href="/"  {...a11yProps(3)} />

                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Alert severity="info" sx={{ width: "fit-content", mb: 5, mt: 2 }}>RSA is used in digital signatures but not many other places anymore.</Alert>

                <h2 variant="">
                    The following walks through how RSA works:
                </h2>
                <br />

                <h3> Recall fermats little theorem: </h3>
                <div className="boxBorder" >
                    <strong>
                        <ul>a<sup>p</sup> &#8801; p mod p</ul>
                    </strong>
                    re-written as:
                    <strong>
                        <ul>a<sup>p-1</sup> &#8801; 1 mod p</ul>
                    </strong>
                    re-written as:
                    <strong>
                        <ul>a<sup>p-1</sup> -1 &#8801; mod p</ul>
                    </strong>
                    which asserts that:
                    <strong><ul>(a<sup>p-1</sup> -1) mod p = 0</ul></strong>
                </div>
                <h3> Recall euler's theorem: </h3>
                <div className="boxBorder" >
                    <p>Given: <strong>n = p<sub>1</sub>p<sub>2</sub>...p<sub>k</sub></strong></p>
                    Then to following must be true:
                    <strong>
                        <ul>a<sup>p</sup> &#8801; p mod p</ul>
                    </strong>
                    re-written as:
                    <strong>
                        <ul>a<sup>(p<sub>1</sub>-1)(p<sub>2</sub>-1)...(p<sub>k</sub>-1)</sup> &#8801; 1 mod n</ul>
                    </strong>

                </div>
                <h3> Recall euler's theorem: </h3>
                <div className="boxBorder" >
                    <p>Given: <strong>n = p<sub>1</sub>p<sub>2</sub>...p<sub>k</sub></strong></p>
                    Then to following must be true:
                    <strong>
                        <ul>a<sup>p</sup> &#8801; p mod p</ul>
                    </strong>
                    re-written as:
                    <strong>
                        <ul>a<sup>(p<sub>1</sub>-1)(p<sub>2</sub>-1)...(p<sub>k</sub>-1)</sup> &#8801; 1 mod n</ul>
                    </strong>

                </div>
                <h3> Now applying what we already know: </h3>
                <div className="boxBorder" >
                    <p>Given: <strong>n = pq</strong> for large primes p and q</p>
                    <ul><p>Let : <strong>&#x3D5; = (p-1)(q-1)</strong></p></ul>
                    Then it is no suprise that:
                    <ul><strong>a<sup>&#x3D5;</sup> &#8801; 1 mod n</strong></ul>
                    And then we can state that:
                    <ul><strong>a<sup>&#x3D5;</sup> &#8801; a<sup>0</sup>  mod n</strong></ul>
                    As well as:
                    <ul><strong>a<sup>0</sup>  mod n &#8801; a<sup>&#x3D5; mod &#x3D5;</sup></strong></ul>
                    Because:
                    <ul><strong>a<sup>&#x3D5; mod &#x3D5;</sup> = a<sup>0</sup></strong> </ul>
                    And:
                    <ul><strong>(a<sup>&#x3D5; </sup>-1) mod n = 0</strong> </ul>
                </div>

                <h3> Developing the RSA process: </h3>
                <div className="boxBorder" >
                    <p>Given two numbers a and b arbitrary within the context that:</p>
                    <ul><p> <strong>ab &#8801; 1 mod &#x3D5;</strong></p></ul>
                    <p>Then we can define the RSA process:</p>
                    <ul><strong>Public key: n, e</strong></ul>
                    <ul><strong>Private key: n, d</strong></ul>
                    <ul>Encryption:
                        <ul><strong>c = Enc(m) = m<sup>e</sup> mod n</strong></ul>
                    </ul>
                    <ul>Decryption:
                        <ul><strong>d = Dec(c) = c<sup>d</sup> mod n</strong></ul>
                    </ul>
                </div>

                <h3> Applying what has been stated to proove why it works: </h3>
                <div className="boxBorder" >
                    <p>Given two numbers a and b arbitrary within the context that:</p>
                    <ul><p> <strong>ab &#8801; 1 mod &#x3D5;</strong></p></ul>
                    <p>Then we can define the RSA process:</p>
                    <ul><strong>Public key: n, e</strong></ul>
                    <ul><strong>Private key: n, d</strong></ul>
                    <ul>Encryption:
                        <ul><strong>c = Enc(m) = m<sup>e</sup> mod n</strong></ul>
                    </ul>
                    <ul>Decryption:
                        <ul><strong>d = Dec(c) = c<sup>d</sup> mod n</strong></ul>
                    </ul>
                </div>


            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>

        </Box >
    );
}
