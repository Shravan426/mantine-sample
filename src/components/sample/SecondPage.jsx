import { Title, Text, Box, Grid, Image, Container } from '@mantine/core';
import useStyles from "./style";
import Rectangle9 from "./images/Rectangle 9.png";
import Rectangle10 from "./images/Rectangle 10.png";
import Rectangle11 from "./images/Rectangle 11.png";
import Rectangle12 from "./images/Rectangle 12.png";

function SecondPage() {
  const { classes } = useStyles();
  
  function ImageCard({ imageSrc, title, description }) {
    return (
      <Grid.Col xs={12} sm={6} md={4} lg={3}>
        <Image src={imageSrc} style={{ maxWidth: '100%', height: 'auto' }} />
        <Container mt={15} p={0}>
          <Title order={4} c="white" fz={18}>{title}</Title>
          <Text c="white" fz={14}>{description}</Text>
        </Container>
      </Grid.Col>
    );
  }

  return (
    <Box mt={50} bg={"black"} pt={30} pb={30} pl={25} mr={-63} style={{ maxwidth: '100%'}}>
      <Container>
        <Title order={2} align="center" c="white" fz={30} ml={-15}>Lorem ipsum dolor sit amet</Title>
        <Text align="center" mt={20} c="white" fz={18} ml={-10}>
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud<Text>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </Text>

        <Grid mt={40} justify="center" gutter="xl" pl={25} pr={50}>
        <ImageCard 
        imageSrc={Rectangle9} 
        title="Lorem ipsum dolor sit amet" 
        description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
      />
       <ImageCard 
        imageSrc={Rectangle10} 
        title="Lorem ipsum dolor sit amet" 
        description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
      />
       <ImageCard 
        imageSrc={Rectangle11} 
        title="Lorem ipsum dolor sit amet" 
        description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
      />
       <ImageCard 
        imageSrc={Rectangle12} 
        title="Lorem ipsum dolor sit amet" 
        description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
      />
      
        </Grid>
      </Container>
    </Box>
  );
}

export default SecondPage;


