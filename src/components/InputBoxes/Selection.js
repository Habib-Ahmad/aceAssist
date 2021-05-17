import React from 'react'
import { InputLabel, NativeSelect } from '@material-ui/core'
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
		paddingRight: '5px',
		paddingTop: '2px',
		justifyContent: 'center'
	},
	select: {
		marginTop: '0 !important',
		fontFamily: 'Nunito',
		fontWeight: '600 ',
        fontSize: '18px',
		color: '#222021 ',
        paddingTop: '15px',
		paddingLeft: '25px',
	},
	label: {
		fontFamily: 'Nunito',
		fontWeight: '800',
		fontSize: '12px',
		letterSpacing: '0.05em',
		textTransform: 'capitalize',
		color: '#222021 !important',
		opacity: '0.5',
		marginLeft: '25px',
	}
})

const Selection = ({ label, name, cb, value, option1, option2, option3, option4 }) => {
	const classes = useStyles()

	function handleInputChange(e) {
		e.persist()
		cb && cb(e)
	}

	return (
		<div className={classes.field}>
			<InputLabel className={classes.label} >{label}</InputLabel>
			<NativeSelect
				label={label}
				name={name}
				value={value}
				onChange={handleInputChange}
				fullWidth
				disableUnderline
				type='date'
				inputProps={{
					className: classes.select
				}}
			>
				{option1 && <option value={option1}>{option1}</option>}
				{option2 && <option value={option2}>{option2}</option>}
				{option3 && <option value={option3}>{option3}</option>}
				{option4 && <option value={option4}>{option4}</option>}
			</NativeSelect>
		</div>
	)
}

export default Selection
