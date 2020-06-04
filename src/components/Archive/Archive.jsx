import React from "react";
import ArchiveTable from "./ArchiveTable";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  padding: 1rem 0;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Container = styled.div`
  padding: 1rem 1rem;

  @media (max-width: 768px) {
    font-size: 8px;
    padding: 5px;
  }
`;

const Archive = () => {
  return (
    <React.Fragment className="archives">
      <Title>Archive</Title>
      <Container>
        <ArchiveTable />
      </Container>
    </React.Fragment>
  );
};

export default Archive;
