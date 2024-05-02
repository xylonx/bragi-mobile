import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
// import SearchIcon from "../../assets/icons/magnifying-glass.svg";
import { IconSearch } from "@tabler/icons-react-native";
import ColoredBlurView from "../../components/ColoredBlurView";
import Input from "../../components/Input";
import NowPlaying from "../../components/NowPlaying";
import { Header } from "../../components/Typography";
import { useDefaultStyles } from "../../hooks/providers/theme";

// const SEARCH_INPUT_HEIGHT = 62;

const Container = styled(View)`
  padding: 4px 24px 0 24px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  border-top-width: 0.5px;
`;

const Search: React.FC = () => {
  const defaultStyles = useDefaultStyles();

  // input state

  // Prepare state for fuse and albums
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = () => {
    setSearchTerm("submit");
  };

  const SearchInput = React.useMemo(
    () => (
      <View>
        <ColoredBlurView>
          <Container style={[defaultStyles.border]}>
            <View>
              <Input
                value={searchTerm}
                onChangeText={setSearchTerm}
                style={[defaultStyles.view, { marginBottom: 12 }]}
                placeholder="Search..."
                autoCorrect={false}
                onSubmitEditing={handleSubmit}
                startIcon={
                  <IconSearch
                    size={16}
                    strokeWidth={3}
                    color={defaultStyles.textHalfOpacity.color}
                  />
                }
              />
            </View>
          </Container>
        </ColoredBlurView>
      </View>
    ),
    [defaultStyles, searchTerm],
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {SearchInput}
      <Header>{"Search"}</Header>
      <NowPlaying />
    </SafeAreaView>
  );
};

export default Search;
