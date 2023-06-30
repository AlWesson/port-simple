import React from 'react';
import { Button, Slide, Snackbar, ButtonGroup } from "@material-ui/core";

function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
}



export function Footer() {
    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);

    

    const handleClick = (Transition) => () => {
        setTransition(() => Transition);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
        return (
            <div >
                <Button 
                variant='contained' 
                style={{
                    backgroundColor: 'gold',
                    color: 'white',
                    fontSize: 27,
                    fontWeight: 'bolder',
                    borderRadius: '50%',
                    position: 'fixed',
                    bottom: '4%',
                    right: '3%',
                }} 
                onClick={handleClick(TransitionUp)}
            > 
            + 
            </Button>
        <Snackbar 
        style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        action={
            <ButtonGroup variant='text' size="small" aria-label="small outlined button group" >
                
                <Button style={{color: 'gold', margin:'5px 20px 5px 2px' }} href='https://www.linkedin.com/in/albert-hernandez-fsd/' target='_new' > LinkedIn </Button>
                <Button style={{color: 'gold', margin:'5px 20px'}} href='https://github.com/AlWesson' target='_new' > GitHub </Button>
                <Button style={{color: 'gold', margin:'5px 20px'}} href='https://www.reddit.com/user/Union_Of_Onions' target='_new' > Reddit </Button>

            </ButtonGroup>
            
        }
        key={transition ? transition.name : ''}
        />
                
            </div>
        )

}

export default Footer;