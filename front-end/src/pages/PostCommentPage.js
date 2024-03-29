import "../styles/PostCommentPage.css"

import { useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BurgerMenu from "../components/BurgerMenu"
import { TextField } from "@mui/material";
import Button from "../components/Button"
import { useNavigate } from 'react-router-dom';


function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{

        p: 1,
        m: 2,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};



function PostCommentPage() {
  const [value, setValue] = React.useState('');
  const navigate = useNavigate();

  const location = useLocation()
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [formInput, setFormInput] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      overall: 0,
      comment: " "
    }
  );
  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };
  const handleSubmit = async evt => {
    evt.preventDefault()
    let data = { formInput }
    console.log('data is', data)

    fetch(`http://localhost:4000/rateAdvisor/searchResult/commentsDisplay/postCommentPage/${location.state.user_id}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error))
      .finally(() => navigate('/rateAdvisor/searchResult/commentsDisplay/', { state: { id: location.state.user_id } }))

    // await axios.post(`http://localhost:4000/rateAdvisor/searchResult/commentsDisplay/postCommentPage/${location.state.user_id}`, data)
    //   .then(response => console.log("Success:", JSON.stringify(response)))
    //   .catch(error => console.error("Error:", error))
    //   .finally(() => navigate('/rateAdvisor/searchResult/commentsDisplay/', { state: { id: location.state.user_id } }))
      navigate('/rateAdvisor/searchResult/commentsDisplay/',{ state: { id: location.state.user_id } })
  };

  //getting data from another page
  // const location = useLocation();
  // const state = location.state;
  // console.log(state);

  return (
    <div id="PostCommentPage">
      <BurgerMenu />

      <div className="advisor-info">
        <br></br>
        <br></br>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 10,
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography component="legend" variant="h6">{`Name: ${location.state.name}`}</Typography>
          <Typography component="legend" variant="h6">{`University: ${location.state.university}`}</Typography>
          <Typography component="legend" variant="h6">{`School Department: ${location.state.department}`}</Typography>
          <Typography component="legend" variant="h6">{`Current Score: ${location.state.currentScore}/5`}</Typography>
          <Rating name="read-only" value={parseFloat(location.state.currentScore)} precision={0.25} readOnly size="large" />


        </Box>
      </div>
      <div className="box">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            p: 1,
            m: 1,
            bgcolor: 'background.salmon',
            borderRadius: 5,
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <form onSubmit={handleSubmit}></form>
          <Item><Typography component="legend" >Your Score:</Typography>
            <Rating name="overall" defaultValue={2.5} precision={0.25} onChange={handleInput} size = 'large'/></Item>

          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 2, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              name='comment'
              className = "thetext"
              id="outlined-multiline-flexible"
              label="Written Review"
              multiline
              maxRows={4}
              value={value}
              onChange={handleChange}
              onInput={handleInput}
            />
          </Box>
          <Button
            type="submit"
            size="btn--default" 
            buttonStyle="btn--primary--solid"
            onClick={handleSubmit}
          >
            Submit Rate For {`${location.state.name}`}
          </Button>
          <form />
        </Box>

      </div>
    </div>
  );
}




export default PostCommentPage