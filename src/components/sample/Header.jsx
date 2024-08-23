import { useState } from 'react';
import { Container, Group, Burger, Text, Flex, MediaQuery, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import useStyles from './style';

const links = [
  { link: '/home', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/services', label: 'Services' },
  { link: '/contact', label: 'Contact Us' },
];

function Header() {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        toggle(); // Close the drawer on mobile when a link is clicked
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Container fluid px="sm"> {/* Use fluid container with padding to prevent overflow */}
      <Flex justify="space-between" align="center" mt={30}>
        <Text ml={23}>LOGO</Text>

        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Flex gap="sm" wrap="wrap" mr={2}> {/* Use wrap to prevent horizontal scroll */}
            {items}
          </Flex>
        </MediaQuery>

        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger opened={opened} onClick={toggle} size="sm" />
        </MediaQuery>
      </Flex>

      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Drawer
          opened={opened}
          onClose={toggle}
          padding="md" 
          size="sm"
          overlayOpacity={0.55}
          overlayBlur={3}
          transitionDuration={250}
        >
          <Flex direction="column" gap={20}>
            {items}
          </Flex>
        </Drawer>
      </MediaQuery>
    </Container>
  );
}

export default Header;

