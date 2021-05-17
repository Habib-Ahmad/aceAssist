import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { makeStyles } from '@material-ui/core/styles'
import RegularInputBox from './RegularInputBox'

const useStyles = makeStyles({
	field: {
		marginTop: '15px',
		marginRight: '10px',
		marginLeft: '10px',
		width: '103%',
    justifyContent: 'center',
		paddingRight: '5px',
		paddingTop: '2px'
	},
	button: {
		color: '#4C5782 !important',
    padding: '4px'
	},
	label: {
		marginBottom: '10px',
		fontFamily: 'Nunito',
		fontWeight: '800',
		fontSize: '12px',
		letterSpacing: '0.05em',
		textTransform: 'capitalize',
		color: '#222021 !important',
		opacity: '0.5',
    textAlign: 'left'
	},
	radioLabel: {
		fontFamily: 'Nunito',
		fontWeight: '600',
		fontSize: '16px',
		textTransform: 'capitalize',
		color: '#222021 !important',
	}
})

const RadioButtons = ({ label, name, cb, value, option1, option2, option3, option4, option5, option6, option7, option8, option9, option10, option11, option12, option13, other }) => {
  const classes = useStyles()

  const handleChange = (e) => {
    e.persist()
    cb && cb(e)
  }

  return (
    <FormControl component="div" classes={{root: classes.field}}>
        <FormLabel component="div" classes={{root: classes.label}} >{label}</FormLabel>
        <RadioGroup
            row
            name={name}
            value={value}
            onChange={handleChange}
            style={{justifyContent:'left', marginLeft:'10px'}}
        >
            {option1 && <FormControlLabel classes={{label: classes.radioLabel}} value={option1} control={<Radio classes={{root: classes.button}} />} label={option1} />}
            {option2 && <FormControlLabel classes={{label: classes.radioLabel}} value={option2} control={<Radio classes={{root: classes.button}} />} label={option2} />}
            {option3 && <FormControlLabel classes={{label: classes.radioLabel}} value={option3} control={<Radio classes={{root: classes.button}} />} label={option3} />}
            {option4 && <FormControlLabel classes={{label: classes.radioLabel}} value={option4} control={<Radio classes={{root: classes.button}} />} label={option4} />}
            {option5 && <FormControlLabel classes={{label: classes.radioLabel}} value={option5} control={<Radio classes={{root: classes.button}} />} label={option5} />}
            {option6 && <FormControlLabel classes={{label: classes.radioLabel}} value={option6} control={<Radio classes={{root: classes.button}} />} label={option6} />}
            {option7 && <FormControlLabel classes={{label: classes.radioLabel}} value={option7} control={<Radio classes={{root: classes.button}} />} label={option7} />}
            {option8 && <FormControlLabel classes={{label: classes.radioLabel}} value={option8} control={<Radio classes={{root: classes.button}} />} label={option8} />}
            {option7 && <FormControlLabel classes={{label: classes.radioLabel}} value={option7} control={<Radio classes={{root: classes.button}} />} label={option7} />}
            {option9 && <FormControlLabel classes={{label: classes.radioLabel}} value={option9} control={<Radio classes={{root: classes.button}} />} label={option9} />}
            {option10 && <FormControlLabel classes={{label: classes.radioLabel}} value={option10} control={<Radio classes={{root: classes.button}} />} label={option10} />}
            {option11 && <FormControlLabel classes={{label: classes.radioLabel}} value={option11} control={<Radio classes={{root: classes.button}} />} label={option11} />}
            {option12 && <FormControlLabel classes={{label: classes.radioLabel}} value={option12} control={<Radio classes={{root: classes.button}} />} label={option12} />}
            {option13 && <FormControlLabel classes={{label: classes.radioLabel}} value={option13} control={<Radio classes={{root: classes.button}} />} label={option13} />}
            {other && <FormControlLabel classes={{label: classes.radioLabel}} value="" control={<RegularInputBox cb={handleChange}  label="Other" />} />}
        </RadioGroup>
    </FormControl>
  )
}

export default RadioButtons