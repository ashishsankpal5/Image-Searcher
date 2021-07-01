import { useState } from 'react';
import {
  Box,
  Input,
  Heading,
  Button,
  Flex,
  Image,
  Grid,
  Link,
} from '@chakra-ui/react';
// import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

const Photos = () => {
  const [image, setImage] = useState('');
  const [result, setResult] = useState([]);
  const clientId = 'mPbYlfFbQUfjl529jyN7fBiWfABz-ON9rsOrY8pgRfw';

  const changehandler = (eve) => {
    setImage(eve.target.value);
  };

  const submithandler = (eve) => {
    console.log(image);

    const fetchUrl =
      'https://api.unsplash.com/search/photos?per_page=30&query=' +
      image +
      '&client_id=' +
      clientId;

    axios.get(fetchUrl).then((response) => {
      console.log(response);
      setResult(response.data.results);
    });
  };

  return (
    <>
      <Box>
        <Box m="10">
          <Heading textAlign="center" mb="4">
            Unsplash Image Searcher
          </Heading>
          <Flex justifyContent="center">
            <Input
              type="text"
              name="image"
              onChange={changehandler}
              placeholder="search"
              w="60%"
              mr="4"
            />
            <Button onClick={submithandler} type="submit" colorScheme="blue">
              Search
            </Button>
          </Flex>
        </Box>
        <Box p="10">
          <Grid templateColumns="1fr 2fr 1fr 1fr " gap="4">
            {result.map((image) => (
              <>
                <Box className="datta">
                  <Flex justifyContent="center">
                    <Image
                      src={image.urls.small}
                      alt="broken"
                      borderRadius="xl"
                      minH="250px"
                    />
                  </Flex>
                  <Box textAlign="center">
                    <p>
                      capture By-{' '}
                      <em>
                        <b>{image.user.name}</b>
                      </em>
                    </p>
                    <p>Description- {image.alt_description}</p>
                  </Box>
                </Box>
              </>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default Photos;
