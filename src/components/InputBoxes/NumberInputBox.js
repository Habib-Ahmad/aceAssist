import { TextField } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
	field: {
		marginTop: '15px',
		marginRight: '10px',
		marginLeft: '10px',
		width: '100%',
		height: '60px',
		background: 'rgba(219, 219, 219, 0.15)',
		border: '1px solid #BEBDB9',
		borderRadius: '10px',
		paddingLeft: '25px',
		paddingRight: '5px',
		paddingTop: '25px',
	},
	input: {
		padding: '0',
		height: '30px',
		fontSize: '18px'
	},
	text: {
		marginTop: '0 !important',
		fontFamily: 'Nunito',
		fontWeight: '600 ',
		color: '#222021 '
	},
	label: {
		fontFamily: 'Nunito',
		fontWeight: '800',
		fontSize: '14px',
		letterSpacing: '0.05em',
		textTransform: 'capitalize',
		color: '#222021 !important',
		opacity: '0.5',
		marginLeft: '15px',
		marginRight: '15px',
		paddingRight: '5px',
		width:'100%',
	}
})

const NormalInputBox = ({ label, name, value, cb }) => {
	const classes = useStyles()

	function handleInputChange(e) {
		e.persist()
		cb && cb(e)
	}

	return (
        <TextField
            className={classes.field}
            label={label}
            name={name}
            value={value}
            onChange={handleInputChange}
            fullWidth
            type="number"
            inputProps={{
                className: classes.input
            }}
            InputProps={{
                disableUnderline: true,
                className: classes.text
            }}
            InputLabelProps={{
                className: classes.label
            }}
        />
	)
}

export default NormalInputBox
