import { BackgroundImage, Text, Title, Box, Button, } from "@mantine/core";
import useStyles from "./style";
import Group from "./images/Group 3.png";

function HomePage() {
  const { classes } = useStyles(); 
  return (
    <Box
      style={{
        overflowX: 'hidden', // Prevent horizontal scrolling
        width: '100%',
        padding: '0 10px', 
      }}
    >
      <BackgroundImage className={classes.image} src={Group} style={{ width: '100%' }} mx={22}>
        <Title
          className={classes.heading}
          color="white"
          order={2}
          align="start"
          
            fz={'clamp(1.5rem, 4vw, 2.5rem)'} 
            m={'0 10px'} 
            pl= {'clamp(20px, 5%, 50px)'} // Adjusted for responsiveness
          
        >
          Lorem ipsum dolor sit amet
        </Title>
        <Text
          className={classes.paragraph}
          color="white"
          align="start"
          
            fz={'clamp(0.875rem, 2.5vw, 1.125rem)'} 
            m={'0 10px'} 
            pl= {'clamp(20px, 5%, 50px)'} // Adjusted for responsiveness
          
        >
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<Text> Ut enim ad minim veniam, <span class={classes.yello}>quis nostrud</span> exercitation</Text> ullamco laboris nisi ut aliquip.
        </Text>
        <Button
          color="red"
          radius="md"
          size="lg"
          
            display={'block'} 
            w={'clamp(150px, 50%, 200px)'}  // Responsive button width
            ml={'clamp(27px, 7%, 67px)'}  // Adjusted for responsiveness
            mt={'40px'} 
            c={'black'} 
            
        >
          Contact Us
        </Button>
        <Text
          className={classes.marq}
          color="white"
          align="center"
          
            fz= {'clamp(0.875rem, 2.5vw, 1rem)'}
            m={'0 auto'}  
            mt={'clamp(10vh, 15vh, 18vh)'}       
            p={'clamp(5px, 2vw, 10px)'}           
            maw={'100%'}         
 
          
          pb={5}
          >
        
          <marquee>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</marquee>
        </Text>
      </BackgroundImage>
    </Box>
  );
}

export default HomePage;

