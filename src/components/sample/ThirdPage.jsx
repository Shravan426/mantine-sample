import { Title, Text, Box, Grid, Table } from '@mantine/core';
import useStyles from "./style";

function ThirdPage() {
  const { classes } = useStyles();

  return (
    <Box px={{ base: 20, sm: 50, md: 100, lg: 200 }} mt={20}>
      <Title order={2} ta="center"fz={30}>Lorem ipsum dolor sit amet</Title>
      <Text mt="sm" fz={18} ta={"center"} pl={20}>
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <Text>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </Text>
      
      <Grid columns={24} mt={40} gutter="xl">
        <Grid.Col span={24} md={12} pl={35}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Grid.Col>
        <Grid.Col span={24} md={12} pl={35}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Grid.Col>
      </Grid>

      <Table mt={30} horizontalSpacing="lg" verticalSpacing="md" withBorder ml={15}>
        <thead className={classes.table}>
          <tr>
            <th>Lorem ipsum dolor</th>
            <th>Lorem ipsum dolor</th>
            <th>Lorem ipsum dolor</th>
            <th>Lorem ipsum dolor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9876543</td>
            <td>9876543</td>
            <td>9876543</td>
            <td>9876543</td>
          </tr>
          <tr>
            <td>9876543</td>
            <td>9876543</td>
            <td>9876543</td>
            <td>9876543</td>
          </tr>
          <tr>
            <td>9876543</td>
            <td>9876543</td>
            <td>9876543</td>
            <td>9876543</td>
          </tr>
        </tbody>
      </Table>
    </Box>
  );
}

export default ThirdPage;
