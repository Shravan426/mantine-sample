import { Title, Box, Text, Grid, Image, List, Button } from '@mantine/core';
import useStyles from "./style";
import MaskGroup from "./images/Mask Group 2.png"

function FirstPage() {
  const { classes } = useStyles(); 
  
  return (
    <Box p="xl" mt={20} ml={25}>
      <Title order={2} align="center" fz={30}>Lorem ipsum dolor sit amet</Title>
      <Text mt="sm" align="center" fz={18} ml={10}>
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<Text>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </Text>
      <Grid mt={50} justify="space-around" align="center">
        <Grid.Col xs={12} sm={6} md={4}>
          <Image src={MaskGroup} alt="Descriptive Alt Text" pl={10} />
        </Grid.Col>
        <Grid.Col xs={12} sm={6} md={6}>
          <Title order={2} align="start" fz={24} pl={19}>Lorem ipsum dolor sit amet</Title>
          <Text mt="sm" align="start" pl={19}>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<Text>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</Text> consequat.
          </Text>
          <List mt="md">
            <List.Item>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</List.Item>
            <List.Item>sed do eiusmod tempor incididunt ut labore et dolore.</List.Item>
            <List.Item>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</List.Item>
            <List.Item>sed do eiusmod tempor incididunt.</List.Item>
          </List>
          <Box mt="xl" display="flex" justifyContent="center">
            <Button color="dark" radius="md" size="xl" ml={19}>Contact Us</Button>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export default FirstPage;
