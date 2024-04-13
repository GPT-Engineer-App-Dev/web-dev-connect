import React, { useState } from "react";
import { Box, Heading, Input, Select, Wrap, WrapItem, Text, Tag } from "@chakra-ui/react";

const developers = [
  {
    id: 1,
    name: "John Doe",
    location: "New York, USA",
    specialties: ["React", "Node.js", "GraphQL"],
  },
  {
    id: 2,
    name: "Jane Smith",
    location: "London, UK",
    specialties: ["Vue.js", "Laravel", "MySQL"],
  },
];

const Developers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("");

  const filteredDevelopers = developers.filter((dev) => {
    const nameMatch = dev.name.toLowerCase().includes(searchTerm.toLowerCase());
    const locationMatch = dev.location.toLowerCase().includes(locationFilter.toLowerCase());
    const specialtyMatch = specialtyFilter ? dev.specialties.includes(specialtyFilter) : true;

    return nameMatch && locationMatch && specialtyMatch;
  });

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Available Developers
      </Heading>

      <Box mb={4}>
        <Input placeholder="Search by name, location or specialty" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} mb={2} />
        <Select placeholder="Filter by location" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} mb={2}>
          <option value="">All Locations</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          {}
        </Select>
        <Select placeholder="Filter by specialty" value={specialtyFilter} onChange={(e) => setSpecialtyFilter(e.target.value)}>
          <option value="">All Specialties</option>
          <option value="React">React</option>
          <option value="Node.js">Node.js</option>
          {}
        </Select>
      </Box>

      <Wrap spacing={4}>
        {filteredDevelopers.map((dev) => (
          <WrapItem key={dev.id} borderWidth={1} borderRadius="lg" p={4} width="300px">
            <Box>
              <Heading as="h2" size="md" mb={2}>
                {dev.name}
              </Heading>
              <Text mb={2}>{dev.location}</Text>
              <Wrap>
                {dev.specialties.map((spec) => (
                  <WrapItem key={spec}>
                    <Tag>{spec}</Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default Developers;
