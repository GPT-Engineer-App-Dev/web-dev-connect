import React from "react";
import { Box, Heading, Text, Button, Stack, Container, SimpleGrid, Image } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Find Top Software Talent at Particles
          </Heading>
          <Text fontSize="xl" mb={8}>
            Particles is your go-to marketplace for discovering skilled web developers specializing in the latest technologies.
          </Text>
          <Button colorScheme="blue" size="lg" rightIcon={<FaCheckCircle />} onClick={() => alert("View developers")}>
            View Available Developers
          </Button>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10}>
            Why Choose Particles?
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box>
              <Image src="https://images.unsplash.com/photo-1541697277882-d139bbd1d08a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcmUtdmV0dGVkJTIwZGV2ZWxvcGVyc3xlbnwwfHx8fDE3MTMwNDg2NDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Pre-vetted developers" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Pre-vetted Developers
              </Heading>
              <Text>All developers on Particles are thoroughly vetted to ensure high-quality skills and professionalism.</Text>
            </Box>
            <Box>
              <Image src="https://images.unsplash.com/photo-1416312189147-9a686b7fb250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3aWRlJTIwcmFuZ2UlMjBvZiUyMHNraWxsc3xlbnwwfHx8fDE3MTMwNDg2NDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Wide range of skills" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Wide Range of Skills
              </Heading>
              <Text>Find developers with expertise in various web technologies, including React, Node.js, Python, and more.</Text>
            </Box>
            <Box>
              <Image src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlYXN5JTIwY29udGFjdCUyMHByb2Nlc3N8ZW58MHx8fHwxNzEzMDQ4NjQ0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Easy contact process" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Easy Contact Process
              </Heading>
              <Text>Seamlessly connect with developers through our platform and start collaborating on your projects.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="blue.500" py={20} color="white">
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Ready to Find Your Ideal Developer?
          </Heading>
          <Text fontSize="xl" mb={8}>
            Browse our talented pool of developers and take your projects to the next level.
          </Text>
          <Button colorScheme="white" size="lg" variant="outline" onClick={() => alert("View developers")}>
            View Available Developers
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
