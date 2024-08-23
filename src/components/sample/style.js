import {  createStyles } from "@mantine/core";
const useStyles = createStyles(() => ({
//  container {
//   BackgroundImage:URL("mantinetwo/images/Group 3.png");
//  }
//  Header {
//     align-items:
//  }

link:{
textDecoration:"none",
color:"#707070"
},

heading:{
marginTop:20,
marginLeft:10,
},

image:{
    height:500,
    paddingTop:120,
    marginTop:30,
},

paragraph:{
    color:"white",
},

marq:{
    background: '',
    border: '1px solid #707070',
    borderRadius: '10px',
    opacity: 1,
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)', 
    padding: '0',
    boxSizing: 'border-box',
    display: 'inline-block',
    animation: 'marquee 10s linear infinite',
    wordWrap:'break-word',
},

table:{
    background: '#F4F4F4 0% 0% no-repeat padding-box',
    borderRadius: '5px 5px 0px 0px',
    opacity: 1,
},
form__image:{
  [`@media (max-width: 750px)`]: {
    display: 'none',
  },
},
yello:{
  color:"yellow",
},

modal:{
  background:"black",
}



  
}));
export default useStyles;