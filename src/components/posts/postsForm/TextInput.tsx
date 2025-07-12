import {
  Button,
  Flex,
  Input,
  Stack,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

type TextInputProps = {
  textInputs: {
    title: string;
    body: string;
  };
  tags?: string;
  onTagsChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleCreatePost: () => void;
  loading: boolean;
};

const TextInput: React.FC<TextInputProps> = ({
  textInputs,
  tags: tagsProp,
  onTagsChange,
  onChange,
  handleCreatePost,
  loading,
}) => {
  const [tags, setTags] = React.useState("");
  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value);
    if (onTagsChange) onTagsChange(e);
  };
  const searchBg = useColorModeValue("white", "#2D3748");
  const searchBorder = useColorModeValue("black", "#A0AEC0");

  return (
    <Stack spacing={3} width="100%">
      <Input
        name="title"
        value={textInputs.title}
        onChange={onChange}
        fontSize="10pt"
        borderRadius={4}
        placeholder="Title"
        _placeholder={{ color: "gray.500" }}
        _focus={{
          outline: "none",
          bg: searchBg,
          border: "1px solid",
          borderColor: searchBorder,
        }}
      />
      <Textarea
        name="body"
        fontSize="10pt"
        value={textInputs.body}
        onChange={onChange}
        borderRadius={4}
        height="100px"
        placeholder="Text (optional)"
        _placeholder={{ color: "gray.500" }}
        _focus={{
          outline: "none",
          bg: searchBg,
          border: "1px solid",
          borderColor: searchBorder,
        }}
      />
      <Input
        name="tags"
        fontSize="10pt"
        value={tagsProp !== undefined ? tagsProp : tags}
        onChange={onTagsChange ? onTagsChange : handleTagsChange}
        borderRadius={4}
        placeholder="Tags (comma separated)"
        _placeholder={{ color: "gray.500" }}
        _focus={{
          outline: "none",
          bg: searchBg,
          border: "1px solid",
          borderColor: searchBorder,
        }}
        mt={2}
      />
      <Flex justify="flex-end">
        <Button
          height="34px"
          padding="0px 30px"
          disabled={!textInputs.title}
          isLoading={loading}
          onClick={handleCreatePost}
        >
          Post
        </Button>
      </Flex>
    </Stack>
  );
};
export default TextInput;
