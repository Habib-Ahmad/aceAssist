import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
	field: {
		width: '100%',
		height: '70px',
		display: 'flex',
        flexDirection: 'column',
        // marginTop: '20px',
	},
	button: {
		color: '#4C5782 !important',
		padding: '4px',
	},
	label: {
        width:' 60%',
		fontFamily: 'Nunito',
		fontWeight: '600',
		fontSize: '15px',
        lineHeight: '22px',
		letterSpacing: '0.05em',
		color: '#222021 !important',
		opacity: '0.9',
		textAlign: 'left',
	},
	radioLabel: {
		fontFamily: 'Nunito',
		fontWeight: '600',
		fontSize: '16px',
		color: '#222021 !important',
	},
	radioGroup: {
        justifyContent: 'left',
        marginLeft: '10px',
	}
})

const RadioButtons3 = ({
	label,
	name,
	cb,
	value,
	option1,
	option2,
	option3,
	option4
}) => {
	const classes = useStyles()

	//   const [value, setValue] = React.useState('female')

	const handleChange = (e) => {
		e.persist()
		cb && cb(e)
		// setValue(event.target.value)
	}

	return (
		<FormControl component='div' classes={{ root: classes.field }}>
			<FormLabel component='div' classes={{ root: classes.label }}>
				{label}
			</FormLabel>
			<RadioGroup
				name={name}
				value={value}
				onChange={handleChange}
                classes={{root: classes.radioGroup }}
				// style={{ justifyContent: 'left', marginLeft: '10px', }}
			>
				{option1 && (
					<FormControlLabel
						classes={{ label: classes.radioLabel }}
						value={option1}
						control={<Radio classes={{ root: classes.button }} />}
						label={option1}
					/>
				)}
				{option2 && (
					<FormControlLabel
						classes={{ label: classes.radioLabel }}
						value={option2}
						control={<Radio classes={{ root: classes.button }} />}
						label={option2}
					/>
				)}
				{option3 && (
					<FormControlLabel
						classes={{ label: classes.radioLabel }}
						value={option3}
						control={<Radio classes={{ root: classes.button }} />}
						label={option3}
					/>
				)}
				{option4 && (
					<FormControlLabel
						classes={{ label: classes.radioLabel }}
						value={option4}
						control={<Radio classes={{ root: classes.button }} />}
						label={option4}
					/>
				)}
			</RadioGroup>
		</FormControl>
	)
}

export default RadioButtons3
