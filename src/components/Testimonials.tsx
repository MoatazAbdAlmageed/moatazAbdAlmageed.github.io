import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'gatsby';
import React, { ReactNode } from 'react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      id="testimonials"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
  url,
}: {
  src: string;
  name: string;
  title: string;
  url: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text color={'orange'} fontWeight={600}>
          {name}
        </Text>
        <Text fontSize={'md'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>

        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          <Link target="_blank" to={url}>
            {url}
          </Link>
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
              <TestimonialText>
                Highly recommended for professional websites
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://rtcneklawy.com/wp-content/uploads/2020/11/82c418a2-22e2-4212-a50e-6491ac7ef767-150x150.jpeg'
              }
              name={'Ahmed Neklawy'}
              title={'CFO at rtcneklawy'}
              url="http://rtcneklawy.com/"
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Intuitive Design</TestimonialHeading>
              <TestimonialText>
                Highly recommended for professional websites
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png'
              }
              name={'Hamada Hassan'}
              title={'CEO at kitaballahacademy'}
              url="https://www.kitaballahacademy.com/"
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Results are amazing</TestimonialHeading>
              <TestimonialText>
                Highly recommended for professional websites
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://pps.whatsapp.net/v/t61.24694-24/229002938_347695800219086_1999437479412687992_n.jpg?ccb=11-4&oh=01_AVyVWmK7mO7oYEzWuEBpZmHqYYfadZnbWGXpd_-vTr3rSQ&oe=61FBDA1C'
              }
              name={'Bakr Hamza'}
              title={'CEO at beinquran'}
              url="https://beinquran.com/"
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Amazing support</TestimonialHeading>
              <TestimonialText>
                Highly recommended for professional websites
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhMQEhEQFRUVEBgREhEVExIQFxgVFRIWFhUWFRYYHSggGBolGxMVITEhJSkrLi4uFyA1ODMtNygtLi0BCgoKDQ0OFxAQFy0fHR0tLSstKy0rKy0tLS0tLS0rLSstKystNystLS0tLS0rLS0tNy0tLSstLSsrLSstKystN//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQMCBQYHBP/EAD0QAAIBAgEIBwYFAwQDAAAAAAABAgMRIQQFBhIxUXGRIkFhgaGxwRMyQlJy0WKCksLworLhI1PS8RRDY//EABgBAQADAQAAAAAAAAAAAAAAAAABAgME/8QAHhEBAQACAgMBAQAAAAAAAAAAAAECETFBAxIhUTL/2gAMAwEAAhEDEQA/APcEhYIkCLCxIAiwsSAIsLEgCLCxIAiwsSAIsLGLrRWDlHmiPbR38k35AZ2FjD20d/NNBV4/NHmgM7CxIAiwsSAIsLEgCLCxIAiwsSAIsLEgCmwJAFiJIRIAAAAAAAKpVeqKu+t9S4vf2AWNlftb+6m+3YufX3XJVLrk7vwXBfxlgFWpJ7ZW7Ipeb2+BPsI9avxbl5lgAhK2wkAAGgAK/YR6lbh0fIajWyXc1f7MsAFXtGvei+K6S+/gWRknimn2rEkrlSW1XT3r13gWAq9o171vqWzv3fzEtAAAAAAAAAqAAFiJIRIAAACG7YsN2xZVFOWL2bVH1fovXYDGW9R5N/ZePAtiksFgtxIAAAAAYzkkm20ksW3ggMgc/l+llCGENao/w4R/U9vcmaetpjWfu06UV2603zuvItMMqj2juAcLS0wrr3oUpLhKL539DbZDpfSlhUjKm9/vx5rHwJuGUPaOkBhRrRmlKMlJPY000+9GZRIAABTqOPu4r5d30/YuAGMJJq6MiqcGnrR747/8/wA4ZwkmroDIAAAABUAALESQiQABVVfwra9r3LrfHq/6Aj3n+FPm16Lz4FxEVbBcESAAAAAiUkld4JYtgUZflsKMHUm7Jc2+pJdbPPs856qZQ8Xqwv0aaeHGW9mWkOdnlFS6v7OOFNecn2vyNUb4Ya+1nbsABoqAAD7c150qUJa0Hh8UH7suK39p6DmnOcMohrwwawlF7Yvc+ztPMT7c05xlQqKpHFbJR+aPWvsUzw2tLp6eCvJq8akYzi7xkrp9jLDnaAAAFU+i9bq+Jfu+/wDgtAAFVPovV6tseHWu7y4FoAAAVAACxEkIkCGzCivie1+XUv51tkVsbR3vHgtvou8tAAAAAABzumecNSkqUX0qmD+hbeeC5nRHnGk2V+0yib6ov2ceEcH/AFaxfCbquV+NUAfRkORzqyUILi+pLezo2ooPtoZprT2U332j4PE6zNmZqdJXtrS65P03GySM7n+LzD9cLUzHXWOonwa9bHwVaUou0otPc1Y9KKMpyOFRasopoTOlwecg2+esyyo9ON3DxXHsNQXllUs067QfOHvZO3+OHPpLxT72dceW5syr2VWnV+WSb+l4S8Gz1FMx8k1V8akAGawAAMKsbrDasVx/mHeTCV0mZFUMJNb+kv3eNn+YC0AAVAACxEkIkCuGMpPdaK835rkWFeT+6nv6X6nf1LAAAAAACrK62pCc/lg5ck36HlLbeL27W+09I0lnbJaz/Bb9TS9TzY28UUyTCLbUVi27Jb28Ed7mfNyoU1H4njOW9/Y53RLI9erKq1hTVl9Uvsr80diTlek4zsABRcAAGNSCknFq6as0cJnvN/sKlvhljB9m7uO9NTpNkXtaEml0odOPd7y5X5ImXVVym3EHpmj9fXyelLr1FF8Y9F+R5mjvtCp3ya26pJeT9S3k4Ux5b4AGDQAAArrYWlulbueHqn3FhjUjdNb01zQGQMacrpPek+aMgKgABYjGu7Rk18r8jJGFf3Xy5uwGcVbAkAAAAAAA0mmE7ZLNb5QX9afoefHcacz/ANGEd9VclGXq0cRY38fDPLl2ui1HVyeL65ylJ89VeEUbc1ejc1/41P8AMv65GzbKXlpOEghsJhKQQ5GLdyNjMGEMDJMDzfKKWpOUPlm4/pbXodloJP8A0qkd1W/OEf8AicjnF3q1X/8AWf8AezpdAqmNaPZCS/qT9DTP+WU5deADBoAAAAAK6Gzg2u5SaRYV0fi+p+OPqWAVAACxGFf3eT5NMzRhlHuy+l+QFgCYAAAAAAOP08qdKlG/VKXNxS8mcr/PP7m70yra2UtfJCMP3fuNEdGE+RneXXaKVb0XH5Zvk0mvG5u2uw5HRTK9Sq4PZUVvzLGPqu9HZFMp9Xx4VJbOAS2FoK6WVqO0JeRYBoVW8iJy1U5PYouT7ldlxqNJ8r1KLj11OguHxPlh3kyIt04uUr4va9vfib7QirbKHH5qTXenF+SZz5sdHq2plNGX49X9acf3GuU+VlOXpYAOZqAAAAAK6XxfU/JL0LCuhs/NL+5lgFQAAsRJCJAryf3Uty1eWHoWFdPCUlwku/8Aym+8sAAAAGDWaSZZ7LJ6jvjJezjxlhhwV33EybHn+cco9pVqVPmm2uF8PCx8wMW7PidPDJnGTTTTs07p7mtjO9zNnFV6alhrLCcdz38H/NhwJ9OQZbOjNTg8djXU1uZGWO043T0QHwZrztTrrou0uum9vdvR95k0ACrKcohTi5zkoxXW/Jb32BLOc0k22kkrtvBJLa2cFnrOPt6rkvdj0YLs38Xt5bj6s957dboQvGn4y7XuXZ/Fp0jTHFnldhlGTTTW1O64rYYJkl1Hq+S1lOEZrZKKku9XLTQaGZZr0NR7actX8rxj6ruN+ctmrprAAEJDGcrJvcr8jIrr9S3yS7tr8E13gTSjaKW5JeBmABUAALESQiQKquDUu2z4O3ql4lpEo3TT61ZmFGWFntTs/v3rECwAADhtNM4a9VUovo0/e+t7eSw72dDpHnlZPC0WnUkugt34n2eb7zzyTbd27tu7bxxNfHj2plekGNWN0ZA2UYUp34mZTUhbFGUKu8iCzHqdntTPvyfSDKqeGupr8S1vHb4nwAWSp22dXSnKZYL2ce2MP+TaNdVqzm9epOU5b2724bjECYyG6ES/jJBKBIAAbfRfOHsa61naE+hLsu+i+5+DZ6KeRnc6KZ7VSKo1H/qRXRb+OK/cuvnvMvJj2vjenRgAxXCqOMm9y1Vxdm/2+JlVnZX5Le3sRNOFlbm97eLfMDIAAVAACxEkIkAVVcHr90uG/u+5aAB8mdMujQpyqy6ti3t7EWw6L1ep+72fh+3+DjtN8u1qkaKeEFrS+uSw5R/uZbGbukW6jQZZlMqs5VJu8pO79EuxFIB0swABAYummZADBUu1maAGgAAAAAAAAM6dRxalFtNO6a6mtjMAB6VmDOiyikpYKS6M12712Pb/ANGyPPdE8u9lXUW+jU6D4/A+eH5jvajv0V3vcvuzmzx1WsuyPSd+pYLjsb9OZaRFWVl1YIkqkAAFQAAsRJCJAAADGcU1ZnAaT5qqUqkqjblCcm1Pc3jqyts7D0Err0Yzi4SScWrNPYy2OWqizbycG/z9o5KjepTvKntfXKHHeu3nvNAdEsvDOzQACUAAAAAAAAAAAAAAAbfMeYp5Q9bGNO+M9/ZDe+3YvAi2RKjMua55RNKN0k05VPl4du5HpVOFlbm3tb3sqyLJIUoKnTjaK8Xvb62XnPll7VpJoABVIAAKgABYiSESAAAAAADnM86LQqXnStCe1x+B93wvhyOjBMtnCLNvK8tyKpRlq1IOL6r7HwexnznrFehGacZxjJPamk14nO5w0QpyxpScH8r6cfuubNcfJO1bi4kG2yzRzKaf/r11vh0/Db4GrnBxdmmnuas+TNJZeFWIAJQAAACUruyxe7abLJMw5TU2UpJfNPoLxxfciLZEtYW5Nk86ktSEZSluSvz3LtOtyDQ6Ks603L8EOiu+W1+B0eSZJClHVpwjFbkrc97KXyTpaYuczPoklade0ntVNe6vqfXw2cTqYxSSSSSSsksFYkGNtvK0mgAEJAAAAAFQAAsRJCJAAAAAAAAAAAAYVaMZK0oxktzSa8TMAa6rmLJpbaFP8q1P7bHzy0XyX/ba4Tqfc3IJ9r+o1GlWi2S/7cv11PuX0swZNHZRh+a8/wC5s2YHtf01FVHJ4QwhCEeyMVHyLQCEgAAAAAAAAAAAACoAAQiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqAAH/9k='
              }
              name={'Aouatif Mansour'}
              title={`CEO at Grandirlibrement`}
              url="https://grandirlibrement.com/"
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
