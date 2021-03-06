import React, { useState } from "react";
import {
  Typography,
  Button,
  Grid,
  IconButton,
  Collapse,
  TextField,
} from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";
import PropTypes from "prop-types";
import "../../styles/form.css";
import { Alert } from "@material-ui/lab";
import CloseIcon from "@material-ui/icons/Close";

/**
 * @param {string} props token being passed for display
 * @return {Grid} returns a Grid component that contains the page
 */
export default function TokenDisplay(props) {
  const { token, tokenResponseVisable, parentGoBack } = props;
  const [copy, setCopy] = useState(false);

  const sendBack = (tokenResponseVisable) => {
    parentGoBack(tokenResponseVisable);
  };

  return (
    <Grid aria-label="Token Informatin Container">
      <Typography variant="h5">OAuth2l Response:</Typography>
      <form noValidate autoComplete="off" className="response-box">
        <TextField
          multiline
          fullWidth
          variant="outlined"
          value={token}
          InputProps={{
            readOnly: true,
          }}
        />
      </form>
      <Grid container direction="row" justify="space-between">
        <CopyToClipboard text={token} onCopy={() => setCopy(true)}>
          <Button variant="contained" color="primary" className="copy-button">
            Copy to Clipboard
          </Button>
        </CopyToClipboard>
        <Button
          onClick={() => sendBack(tokenResponseVisable)}
          className="copy-button"
          variant="contained"
        >
          Go Back
        </Button>
      </Grid>
      <div className="form-alert">
        <Collapse in={copy}>
          <Alert
            variant="outlined"
            severity="success"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setCopy(!copy);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Token copied to clipboard
          </Alert>
        </Collapse>
      </div>
    </Grid>
  );
}

TokenDisplay.propTypes = {
  token: PropTypes.string,
  tokenResponseVisable: PropTypes.bool,
  parentGoBack: PropTypes.func,
};
