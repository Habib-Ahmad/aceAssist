import React from 'react'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// This is a temporary component, Material-UI has a working component but is still under development. So this will be used for now

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
		paddingTop: '25px'
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
		textTransform: 'capitalize',
		color: '#222021 !important',
		opacity: '0.5',
		margin: 'auto 5px auto 15px',
		display: 'flex',
		alignItems: 'center'
	}
})

const TimePicker = ({ label, name, value, cb }) => {
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
			placeholder="hh-mm"
			inputProps={{
				className: classes.input,
				pattern: "[0-9]{2}-[0-9]{2}",
			}}
			InputProps={{
				disableUnderline: true,
				className: classes.text,
			}}
			InputLabelProps={{
				className: classes.label
			}}
		/>
	)
}

export default TimePicker
