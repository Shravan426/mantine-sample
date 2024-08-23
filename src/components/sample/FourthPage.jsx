import { Grid, TextInput, Textarea, Button, Title, Text, Box, Image,Modal,Notification,Alert } from '@mantine/core';
import useStyles from './style';
import MaskGroup3 from './images/Mask Group 3.png';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';

 function FourthPage() {
  const { classes } = useStyles();
  
  const [opened, { open, close }] = useDisclosure(false);
 
 
  const form = useForm({
    initialValues: {
      fullname:'',
      email:'',
      phno:'',
      message:'',
    },
    validate: {
      fullname:(value) => {
        if(!value) {
          return "Fullname is required"
        }
      },
      phno:(value) => {
        if(!value) {
          return "Mobile Number is required"
        }
      },
      email:(value) => {
        if(!value) {
          return "Email is required"
        }
      }
     },
     
  });

  const onHandleSubmit = () => {
    const validationResults = form.validate();
    
    if (validationResults.hasErrors) {
      console.log('Form validation failed. Please correct the errors and try again.');
    } else {
      console.log('Form is valid. Proceeding with submission...');
      open();
    }
  };
  

  
  

  return (
    <Box>
      <Grid columns={24}>
        <Grid.Col span={24} md={10}>
          <Image src={MaskGroup3} mb={-25}  className={classes.form__image}/>
        </Grid.Col>
        <Grid.Col span={24} md={11} mt={{ base: 20, md: 100 }} ml={{ base: 0, md: 40 }} pl={50}>
          <Title order={2} pb={10} fw={"bold"} fz={30}>Lorem ipsum dolor sit amet</Title>
          <Text fz={18}>
            sed do eiusmod tempor incididunt ut labore et dolore magna <Text>exercitation ullamco laboris nisi ut aliquip.</Text>
          </Text>
 
          <TextInput withAsterisk placeholder="Your name" label="Full name" {...form.getInputProps('fullname')} radius="md" size="xl"  mt={10} maw={500} />
          <TextInput withAsterisk placeholder="Your email" label="Email" {...form.getInputProps('email')} radius="md" size="xl"  mt={10} maw={500}/>
          <TextInput withAsterisk placeholder="Your Mobile Number" label="Mobile Number" {...form.getInputProps('phno')} radius="md" size="xl"  mt={10} maw={500}/>
          <Textarea  placeholder="Your Message" label="Message" {...form.getInputProps('message')} mt={10} size="xl" radius="md"  maw={500}/>
      
          <Button  color="dark" radius="md" size="lg" onClick={onHandleSubmit} mt={20} px={50}>
            Submit
            
          </Button>
        
        </Grid.Col>
      </Grid>
      <Text bg="black" c="white" ta="center" fz={14} mt={20} pl={30} pr={40} mr={-64}>
        Copyright © Gewan Info Tech Solutions India Private Limited. All Rights Reserved
      </Text>
        <Modal className={classes.modal} opened={opened} onClose={close} size={'xs'}>
        <Alert title="Form is submitted " color="teal" radius="xs" variant="filled" mb={30}>
      Thank you for Submitting the form
    </Alert>
       </Modal>  
    </Box>
  );
}

export default FourthPage;
