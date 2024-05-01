import React from "react";
import styled from "styled-components/native";
import { Header } from "../../components/Typography";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

const Setting: React.FC = () => {
  return (
    <Container>
      <Header>{"Setting"}</Header>
    </Container>
  );
};

export default Setting;
